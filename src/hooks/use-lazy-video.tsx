import { useEffect, useRef } from 'react';

interface UseLazyVideoOptions {
  fallbackDelay?: number;
  intersectionThreshold?: number;
}

export const useLazyVideo = (options: UseLazyVideoOptions = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { fallbackDelay = 1000, intersectionThreshold = 0.1 } = options;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fonction pour charger la vidéo en arrière-plan (optimisé pour éviter le lag au scroll)
    const loadVideo = () => {
      if (video.dataset.lazy === 'true') {
        // Utiliser preload="none" pour éviter de charger la vidéo immédiatement
        // Elle ne se chargera que quand play() sera appelé
        video.preload = 'none';
        video.dataset.lazy = 'false';
        
        // Charger seulement les métadonnées pour avoir les dimensions
        video.load();
      }
    };

    // Vérifier si IntersectionObserver est supporté
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadVideo();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: intersectionThreshold,
          rootMargin: '50px'
        }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback pour les navigateurs sans IntersectionObserver
      const fallbackLoad = () => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(loadVideo);
        } else {
          setTimeout(loadVideo, fallbackDelay);
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
  }, [fallbackDelay, intersectionThreshold]);

  return videoRef;
};
