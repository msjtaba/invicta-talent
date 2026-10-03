import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: boolean;
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
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 tracking-wide rounded-none group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#7D2419]';
  
  const variants = {
    primary: 'bg-[#7D2419] text-[#E8DDC8] hover:bg-[#9B2D20] active:bg-[#5C1910] border border-[#7D2419]',
    secondary: 'bg-[#E8DDC8] text-[#171717] hover:bg-[#F3F1EC] hover:text-[#0B0B0A] border border-[#E8DDC8]',
    outline: 'border border-[#E8DDC8]/30 text-[#E8DDC8] hover:border-[#7D2419] hover:text-[#E8DDC8] hover:bg-[#7D2419]/10',
    ghost: 'text-[#E8DDC8] hover:text-[#7D2419] bg-transparent',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-3',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-current" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={clsx(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clsx(baseStyles, variants[variant], sizes[size], className)}>
      {content}
    </button>
  );
};
