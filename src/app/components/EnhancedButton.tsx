'use client';

import React from 'react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withShine?: boolean;
  withRipple?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function EnhancedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  withShine = true,
  withRipple = true,
  className = '',
  type = 'button',
  disabled = false,
}: EnhancedButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
    secondary:
      'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 hover:from-gray-300 hover:to-gray-400',
    outline:
      'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:shadow-lg',
  };

  const baseClasses = `
    relative font-semibold rounded-lg transition-all duration-300 
    transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}
  `;

  const shineClass = withShine ? 'btn-shine' : '';
  const rippleClass = withRipple ? 'btn-ripple' : '';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (withRipple && (e.currentTarget as HTMLElement).classList.contains('btn-ripple')) {
      const ripple = (e.currentTarget as HTMLElement).querySelector('::after');
      if (ripple) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Ripple effect triggered
      }
    }
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center ${baseClasses} ${shineClass} ${rippleClass}`}
        onClick={handleClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`inline-flex items-center ${baseClasses} ${shineClass} ${rippleClass}`}
    >
      {children}
    </button>
  );
}
