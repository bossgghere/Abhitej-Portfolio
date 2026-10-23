import { useState, useEffect, useRef } from 'react';

/**
 * Lightweight Intersection Observer hook for performant scroll-triggered animations.
 * Runs on GPU-accelerated CSS classes with zero lag.
 */
export const useInView = (options = { threshold: 0.15, triggerOnce: true }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
};

export default useInView;
