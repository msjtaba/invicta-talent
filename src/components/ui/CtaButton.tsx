import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface CtaButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

// `button-2` from components.md: a soft wine circle behind the label that stretches into a pill on hover.
// Rendered as a link because every use navigates. Styles are scoped under `.cta-pill` in globals.css.
export const CtaButton: React.FC<CtaButtonProps> = ({ children, to, className }) => (
  <Link href={to} className={clsx('cta-pill', className)}>
    <span>{children}</span>
    <svg width="15" height="10" viewBox="0 0 13 10" aria-hidden>
      <path d="M1,5 L11,5" />
      <polyline points="8 1 12 5 8 9" />
    </svg>
  </Link>
);
