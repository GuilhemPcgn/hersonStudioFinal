import React, { useEffect } from 'react';
import { useDeferredScripts } from '@/hooks/use-deferred-scripts';

interface DeferredScriptsProps {
  children?: React.ReactNode;
  priority?: 'high' | 'normal' | 'low';
  delay?: number;
  idle?: boolean;
}

const DeferredScripts: React.FC<DeferredScriptsProps> = ({
  children,
  priority = 'normal',
  delay = 0,
  idle = true
}) => {
  const { loadScript } = useDeferredScripts({ delay, idle, priority });

  useEffect(() => {
    // Charger les scripts différés
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    deferredScripts.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      const src = scriptElement.src || scriptElement.getAttribute('data-src');
      if (src) {
        loadScript(src);
      }
    });
  }, [loadScript]);

  return <>{children}</>;
};

export default DeferredScripts;
