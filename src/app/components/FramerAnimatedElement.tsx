'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FramerAnimatedElementProps {
  children: React.ReactNode;
  variant?: 'fadeDown' | 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

const getVariants = (variant: string) => {
  const baseTransition = {
    duration: 0.8,
    ease: 'easeOut',
  };

  // Normalize variant names
  const normalizedVariant = variant
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  const variants: Record<string, any> = {
    'fade-down': {
      hidden: { opacity: 0, y: -40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
      },
    },
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
      },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
      },
    },
    'slide-down': {
      hidden: { opacity: 0, y: -40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition,
      },
    },
    'slide-left': {
      hidden: { opacity: 0, x: 40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: baseTransition,
      },
    },
    'slide-right': {
      hidden: { opacity: 0, x: -40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: baseTransition,
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: baseTransition,
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: baseTransition,
      },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10, scale: 0.8 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: baseTransition,
      },
    },
  };

  return variants[normalizedVariant] || variants.fade;
};

export default function FramerAnimatedElement({
  children,
  variant = 'fade',
  delay = 0,
  duration = 0.8,
  className = '',
  triggerOnce = true,
}: FramerAnimatedElementProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce,
  });

  const variants = getVariants(variant);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : (triggerOnce ? 'visible' : 'hidden')}
      variants={variants}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
