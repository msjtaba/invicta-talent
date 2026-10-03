import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'onDark' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  icon = true,
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.08em] leading-none rounded-sm group cursor-pointer transition-colors duration-250 ease-brand';

  // design-2 §5.1
  const variants = {
    primary: 'bg-crimson text-white hover:bg-crimson-dark',
    secondary: 'bg-transparent text-crimson border-[1.5px] border-crimson hover:bg-crimson hover:text-white',
    onDark: 'bg-ivory text-crimson-deepest hover:bg-white',
    ghost: 'bg-transparent text-ivory border-[1.5px] border-stone-light hover:border-gold hover:text-gold',
    link: 'bg-transparent text-crimson underline-offset-4 decoration-2 decoration-gold hover:underline',
  };

  const sizes = {
    sm: 'h-10 px-5 text-[13px] gap-2',
    md: 'h-12 px-7 text-[15px] gap-2.5',
    lg: 'h-14 px-7 text-[15px] gap-3',
  };

  const classes = clsx(
    baseStyles,
    disabled ? 'bg-ivory-warm text-stone border-transparent cursor-not-allowed pointer-events-none' : variants[variant],
    variant === 'link' ? 'h-auto px-0' : sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          strokeWidth={1.5}
          className="w-4 h-4 shrink-0 transition-transform duration-250 ease-brand group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link href={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};
