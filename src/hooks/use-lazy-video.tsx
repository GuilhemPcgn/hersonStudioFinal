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

    // Fonction pour charger la vidéo en arrière-plan
    const loadVideo = () => {
      if (video.dataset.lazy === 'true') {
        // Charger seulement les métadonnées d'abord, puis la vidéo complète
        video.preload = 'metadata';
        video.load();
        
        // Une fois les métadonnées chargées, charger la vidéo complète
        const handleLoadedMetadata = () => {
          video.preload = 'auto';
          video.load();
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
        
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.dataset.lazy = 'false';
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
