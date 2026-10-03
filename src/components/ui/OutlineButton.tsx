import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface OutlineButtonProps {
  children: React.ReactNode;
  to: string;
  /** `light` for ivory/white sections, `dark` for wine or photo sections. */
  tone?: 'light' | 'dark';
  className?: string;
}

// `button-3` from components.md: outline button with a leading arrow; fills on hover.
// Rendered as a link because every use navigates. Styles are scoped under `.btn-outline` in globals.css.
export const OutlineButton: React.FC<OutlineButtonProps> = ({ children, to, tone = 'light', className }) => (
  <Link href={to} className={clsx('btn-outline', tone === 'dark' && 'btn-outline--dark', className)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
    <span className="btn-outline__text">{children}</span>
  </Link>
);
