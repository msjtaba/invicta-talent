'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FirstContrastSection: React.FC = () => {
  return (
    <section className="min-h-[65vh] flex items-center justify-center bg-ivory text-graphite px-6 md:px-12 py-16 lg:py-32 border-b border-stone-light text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-graphite leading-[1.1]">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block text-graphite/65"
          >
            KNOWING THE SOFTWARE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-2xl sm:text-4xl md:text-5xl font-sans uppercase tracking-widest text-graphite/60 my-4 font-semibold"
          >
            ISN'T THE SAME AS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-graphite"
          >
            KNOWING THE{' '}
            <span className="text-crimson underline decoration-crimson underline-offset-8 italic">
              WORK.
            </span>
          </motion.span>
        </h2>
      </div>
    </section>
  );
};
