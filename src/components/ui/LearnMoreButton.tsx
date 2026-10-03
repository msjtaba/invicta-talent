import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface LearnMoreButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

// `button-1` from components.md: a crimson circle with an arrow that expands into a pill on hover.
// Rendered as a link because every use navigates. Styles are scoped under `.learn-more` in globals.css.
export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ children, to, className }) => (
  <Link href={to} className={clsx('learn-more', className)}>
    <span className="learn-more__circle" aria-hidden>
      <span className="learn-more__arrow" />
    </span>
    <span className="learn-more__text">{children}</span>
  </Link>
);
