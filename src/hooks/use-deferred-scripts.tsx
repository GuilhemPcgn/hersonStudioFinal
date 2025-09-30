import { useEffect, useRef } from 'react';

interface DeferredScriptOptions {
  delay?: number;
  idle?: boolean;
  priority?: 'high' | 'normal' | 'low';
}

export const useDeferredScripts = (options: DeferredScriptOptions = {}) => {
  const { delay = 0, idle = true, priority = 'normal' } = options;
  const scriptsLoaded = useRef<Set<string>>(new Set());

  useEffect(() => {
    const loadScript = (script: HTMLScriptElement) => {
      const src = script.src || script.getAttribute('data-src');
      if (!src || scriptsLoaded.current.has(src)) return;

      // Marquer comme chargé pour éviter les doublons
      scriptsLoaded.current.add(src);

      // Créer un nouveau script
      const newScript = document.createElement('script');
      
      // Copier tous les attributs
      Array.from(script.attributes).forEach(attr => {
        if (attr.name !== 'data-defer' && attr.name !== 'data-src') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });

      // Utiliser src au lieu de data-src
      if (src) {
        newScript.src = src;
      }

      // Copier le contenu si c'est un script inline
      if (script.textContent) {
        newScript.textContent = script.textContent;
      }

      // Ajouter au DOM
      document.head.appendChild(newScript);

      // Nettoyer l'ancien script
      script.remove();
    };

    const loadScripts = () => {
      const deferredScripts = document.querySelectorAll('script[data-defer]');
      deferredScripts.forEach(loadScript);
    };

    // Fonction de chargement avec délai
    const loadWithDelay = () => {
      if (delay > 0) {
        setTimeout(loadScripts, delay);
      } else {
        loadScripts();
      }
    };

    // Chargement basé sur la priorité
    if (priority === 'high') {
      // Charger immédiatement après DOMContentLoaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadWithDelay);
      } else {
        loadWithDelay();
      }
    } else if (priority === 'normal') {
      // Charger après window.load
      if (document.readyState === 'complete') {
        loadWithDelay();
      } else {
        window.addEventListener('load', loadWithDelay);
      }
    } else {
      // Charger en idle (priorité basse)
      if (idle && window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          loadWithDelay();
        }, { timeout: 5000 });
      } else {
        // Fallback pour les navigateurs sans requestIdleCallback
        setTimeout(loadWithDelay, 2000);
      }
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', loadWithDelay);
      window.removeEventListener('load', loadWithDelay);
    };
  }, [delay, idle, priority]);

  return {
    loadScript: (src: string) => {
      const script = document.querySelector(`script[data-src="${src}"]`) as HTMLScriptElement;
      if (script) {
        loadScript(script);
      }
    }
  };
};
