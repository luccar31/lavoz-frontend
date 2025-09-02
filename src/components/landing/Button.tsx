import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'solid' | 'outline';
};

const baseClasses = `
    inline-flex items-center justify-center font-oswald uppercase
    border-2 rounded-none transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-landing-background focus:ring-accent-focus
  `;

const sizeClasses = {
  default: 'px-4 py-2 text-button',
  lg: 'px-8 py-3 text-button-lg',
};

const variantClasses = {
  solid: 'bg-brand-red border-brand-red text-landing-text-primary hover:bg-transparent hover:text-brand-red',
  outline: 'bg-transparent border-landing-text-secondary text-landing-text-secondary hover:bg-landing-text-secondary hover:text-landing-background',
};

export default function Button({ href, children, className = '', size = 'default', variant = 'solid' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}