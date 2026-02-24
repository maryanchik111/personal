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
  className = '',
  type = 'button',
  disabled = false,
}: EnhancedButtonProps) {
  const sizeMap = {
    sm: { padding: '10px 20px', fontSize: '0.85rem' },
    md: { padding: '14px 28px', fontSize: '0.95rem' },
    lg: { padding: '16px 36px', fontSize: '1rem' },
  };

  const baseClass = variant === 'outline' ? 'btn-neon-cyan' : 'btn-neon-purple';

  const style: React.CSSProperties = {
    ...sizeMap[size],
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`} style={style} onClick={onClick as any}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
