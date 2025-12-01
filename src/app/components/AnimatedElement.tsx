'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'fade-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function AnimatedElement({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 1,
  className = '',
  threshold = 0.1,
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationMap: Record<string, string> = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'fade-in': 'animate-fade-in',
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationMap[animation] : 'opacity-0'} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
