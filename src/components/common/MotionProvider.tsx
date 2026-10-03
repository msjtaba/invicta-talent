'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';

// Honour prefers-reduced-motion: framer-motion drops transforms and keeps opacity fades.
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
