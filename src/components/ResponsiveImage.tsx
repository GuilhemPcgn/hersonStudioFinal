import React from 'react';
import { useLazyImage } from '@/hooks/use-lazy-image';

interface ResponsiveImageProps {
  picture: {
    sources: Array<{
      srcset: string;
      type: string;
      media?: string;
    }>;
    img: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  priority?: boolean;
  sizes?: string;
  lazy?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  picture,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  priority = false,
  sizes = '100vw',
  lazy = true
}) => {
  const { imgRef, isLoaded, shouldLoad } = useLazyImage({
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Déterminer le loading et decoding basé sur la priorité
  const loadingAttr = priority ? 'eager' : loading;
  const decodingAttr = priority ? 'sync' : decoding;

  // Si lazy loading est désactivé ou si l'image est prioritaire, charger immédiatement
  const shouldLoadImmediately = !lazy || priority;

  return (
    <picture className={className}>
      {shouldLoadImmediately && picture.sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcset}
          type={source.type}
          media={source.media}
          sizes={sizes}
        />
      ))}
      <img
        ref={imgRef}
        src={shouldLoadImmediately ? picture.img.src : undefined}
        data-src={!shouldLoadImmediately ? picture.img.src : undefined}
        alt={alt}
        width={picture.img.width}
        height={picture.img.height}
        loading={loadingAttr}
        decoding={decodingAttr}
        className={className}
        sizes={sizes}
        style={{
          backgroundColor: '#f3f4f6',
          transition: 'opacity 0.3s ease',
          opacity: isLoaded ? 1 : 0.7
        }}
      />
    </picture>
  );
};

export default ResponsiveImage;
