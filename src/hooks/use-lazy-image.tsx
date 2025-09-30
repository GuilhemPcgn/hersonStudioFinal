import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  threshold?: number;
  rootMargin?: string;
  fallbackDelay?: number;
}

export const useLazyImage = (options: UseLazyImageOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px', fallbackDelay = 300 } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Si l'image est déjà chargée, pas besoin d'observer
    if (img.complete && img.naturalHeight !== 0) {
      setIsLoaded(true);
      return;
    }

    // Fonction pour charger l'image
    const loadImage = () => {
      setIsInView(true);
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    };

    // Vérifier si IntersectionObserver est supporté
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(img);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback pour les navigateurs sans IntersectionObserver
      const fallbackLoad = () => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(loadImage);
        } else {
          setTimeout(loadImage, fallbackDelay);
        }
      };

      // Attendre que le DOM soit complètement chargé
      if (document.readyState === 'complete') {
        fallbackLoad();
      } else {
        window.addEventListener('load', fallbackLoad);
        return () => window.removeEventListener('load', fallbackLoad);
      }
    }
  }, [threshold, rootMargin, fallbackDelay]);

  // Gérer l'événement load de l'image
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(false);

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [isInView]);

  return {
    imgRef,
    isLoaded,
    isInView,
    shouldLoad: isInView || isLoaded
  };
};
