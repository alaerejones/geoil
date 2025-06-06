
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean; // For critical images like logos
}

// Create a simple cache to track loaded images
const imageCache = new Set<string>();

const OptimizedImage = ({ src, alt, className = '', loading = 'lazy', priority = false }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(imageCache.has(src));
  const [hasError, setHasError] = useState(false);

  // Create optimized src with quality reduction for faster loading
  const getOptimizedSrc = (originalSrc: string) => {
    // For local assets, return as-is
    if (originalSrc.startsWith('/assets/') || originalSrc.startsWith('/lovable-uploads/') || originalSrc.startsWith('/geo-uploads/')) {
      return originalSrc;
    }
    
    if (originalSrc.includes('unsplash.com')) {
      // For Unsplash images, add optimization parameters
      const url = new URL(originalSrc);
      url.searchParams.set('q', '75'); // Reduce quality to 75%
      url.searchParams.set('fm', 'webp'); // Use WebP format when supported
      url.searchParams.set('auto', 'format'); // Auto format selection
      return url.toString();
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  // Preload critical images
  useEffect(() => {
    if (priority && !imageCache.has(optimizedSrc)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      document.head.appendChild(link);
    }
  }, [optimizedSrc, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    imageCache.add(optimizedSrc);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        crossOrigin="anonymous"
        // Add cache-friendly attributes
        style={{
          contentVisibility: 'auto',
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <span className="text-slate-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
