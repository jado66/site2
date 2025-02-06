import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { LogoLoading } from 'src/components/loading-screen/splash-screen';

// Higher-order component to add SEO-friendly lazy loading
const withSEOLazyLoading = (LazyComponent, placeholderHeight = 'h-96') => {
  return function SEOWrapper(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '100px',
          threshold: 0.1,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);

    // Pre-render the component to string for SEO
    const SEOContent = (
      <noscript>
        <Suspense fallback={null}>
          <LazyComponent {...props} />
        </Suspense>
      </noscript>
    );

    return (
      <>
        {SEOContent}
        <div ref={containerRef}>
          {isVisible ? (
            <Suspense fallback={<LogoLoading />}>
              <LazyComponent
                {...props}
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </Suspense>
          ) : null}
        </div>
      </>
    );
  };
};

export default withSEOLazyLoading;
