import { useState, useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.08, rootMargin = '0px 0px -40px 0px' } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    // Immediate fallback for SSR, environments without IntersectionObserver, or reduced motion
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || isReduced) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref: elementRef, isRevealed };
}
