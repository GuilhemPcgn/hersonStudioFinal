import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personnalisé pour remettre automatiquement le scroll en haut
 * lors du changement de route dans React Router
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Remettre le scroll en haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Animation fluide vers le haut
    });
  }, [location.pathname]); // Se déclenche quand l'URL change
};

export default useScrollToTop;
