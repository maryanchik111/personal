'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export default function NumberCounter({
  end,
  duration = 2500,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0,
}: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 20);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return (
    <div
      ref={ref}
      className={`animate-count-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {prefix}
      {count}
      {suffix}
    </div>
  );
}
