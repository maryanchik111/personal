'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  type?: 'text' | 'scale' | 'rotate';
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  type = 'scale',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
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

  const revealClasses = {
    text: 'reveal-text',
    scale: 'reveal-scale',
    rotate: 'reveal-rotate',
  };

  return (
    <div
      ref={ref}
      className={`${isRevealed ? revealClasses[type] : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
