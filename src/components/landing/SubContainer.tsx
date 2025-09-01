import type {ReactNode} from 'react';

type SubContainerProps = {
  type: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
}

export default function SubContainer({children, className = '', type = 'xl'}: SubContainerProps) {
  const types = {
    xs: 'max-w-xl',
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  }
  return (
    <div className={`${types[type]} mx-auto ${className}`}>
      {children}
    </div>
  );
}