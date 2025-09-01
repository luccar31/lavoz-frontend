import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg';
};

export default function Button({ href, children, className = '', size = 'default' }: ButtonProps) {
  const baseClasses = `
    inline-block bg-brand-red text-landing-text-primary font-oswald
    uppercase border-2 border-brand-red rounded-none
    transition-all duration-200 ease-in-out
    hover:bg-transparent hover:text-brand-red
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-landing-background focus:ring-accent-focus
  `;

  const sizeClasses = {
    default: 'px-4 py-2 text-button',
    lg: 'px-8 py-3 text-button-lg',
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}