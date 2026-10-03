'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROTATING_SUPPORT_LINES } from '@/data/siteData';

export const RotatingLine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_SUPPORT_LINES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 sm:h-6 overflow-hidden relative flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm tracking-wider uppercase text-stone-light font-medium"
        >
          {ROTATING_SUPPORT_LINES[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
