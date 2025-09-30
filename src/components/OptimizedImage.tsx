import React from 'react';
import { useLazyImage } from '@/hooks/use-lazy-image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
  sizes = '100vw',
  style = {}
}) => {
  const { imgRef, isLoaded } = useLazyImage({
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Si lazy loading est désactivé ou si l'image est prioritaire, charger immédiatement
  const shouldLoadImmediately = !lazy || priority;

  return (
    <img
      ref={imgRef}
      src={shouldLoadImmediately ? src : undefined}
      data-src={!shouldLoadImmediately ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      sizes={sizes}
      style={{
        backgroundColor: '#f3f4f6',
        transition: 'opacity 0.3s ease',
        opacity: isLoaded ? 1 : 0.7,
        ...style
      }}
    />
  );
};

export default OptimizedImage;
