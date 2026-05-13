import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
        variant === 'primary' && 'bg-brand-red text-white shadow-card hover:bg-[#90261f]',
        variant === 'secondary' && 'bg-brand-wood text-white hover:bg-[#9b7c5d]',
        variant === 'ghost' && 'bg-white/90 text-brand-dark border border-brand-cream hover:bg-white',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    />
  );
}
