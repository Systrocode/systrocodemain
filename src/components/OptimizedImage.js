'use client';
import Image from 'next/image';
import { useState } from 'react';

// Optimized image mappings for large GIFs
const OPTIMIZED_IMAGES = {
  '/assets/img/product/cards/social-media-marketing.gif': '/assets/img/product/cards/social-media-marketing.webp',
  '/assets/img/product/cards/design.gif': '/assets/img/product/cards/design.webp',
  '/assets/img/product/cards/webd.gif': '/assets/img/product/cards/webd.webp',
  '/assets/img/product/cards/Ads-Management.gif': '/assets/img/product/cards/ads-management.webp',
  '/assets/img/product/cards/email-marketing.gif': '/assets/img/product/cards/email-marketing.webp',
  '/assets/img/product/cards/ai.gif': '/assets/img/product/cards/ai.webp',
  '/assets/img/product/cards/marketing-automation.gif': '/assets/img/product/cards/marketing-automation.webp',
  '/assets/img/product/cards/da.gif': '/assets/img/product/cards/data-analysis.webp',
  '/assets/img/product/cards/Conversion-Rate-Optimization.gif': '/assets/img/product/cards/conversion-optimization.webp',
  '/assets/img/product/cards/seo.gif': '/assets/img/product/cards/seo.webp',
  '/assets/img/product/cards/cybersecurity.gif': '/assets/img/product/cards/cybersecurity.webp',
  '/assets/img/Services/webd1.gif': '/assets/img/Services/webd1.webp',
  '/assets/img/Services/webd2.gif': '/assets/img/Services/webd2.webp',
};

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  fallbackSrc,
  priority = false,
  loading = 'lazy',
  ...props 
}) => {
  // Use optimized version if available
  const optimizedSrc = OPTIMIZED_IMAGES[src] || src;
  const [imgSrc, setImgSrc] = useState(optimizedSrc);
  const [isLoading, setIsLoading] = useState(true);

  // Convert GIF to WebP/PNG fallback
  const getOptimizedSrc = (originalSrc) => {
    // Already optimized or use mapping
    if (OPTIMIZED_IMAGES[originalSrc]) {
      return OPTIMIZED_IMAGES[originalSrc];
    }
    
    if (originalSrc.endsWith('.gif')) {
      // Try WebP first, then PNG fallback
      return originalSrc.replace('.gif', '.webp');
    }
    return originalSrc;
  };

  const handleError = () => {
    console.log(`Failed to load: ${imgSrc}, trying fallback`);
    
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else if (imgSrc.endsWith('.webp')) {
      // Fallback from WebP to PNG
      setImgSrc(imgSrc.replace('.webp', '.png'));
    } else if (imgSrc.endsWith('.gif')) {
      // Fallback from GIF to PNG, then to original
      setImgSrc(imgSrc.replace('.gif', '.png'));
    } else if (imgSrc.includes('.png')) {
      // Last resort: use original GIF
      setImgSrc(src);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      <Image
        src={getOptimizedSrc(imgSrc)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
