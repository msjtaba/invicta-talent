import React from 'react';
import { motion } from 'framer-motion';

export const FirstContrastSection: React.FC = () => {
  return (
    <section className="min-h-[65vh] flex items-center justify-center bg-[#E8DDC8] text-[#171717] px-6 md:px-12 py-24 border-b border-[#171717]/15 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
          01 — THE FOUNDATIONAL DISTINCTION
        </span>

        <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] text-[#171717] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block text-[#4A4235]"
          >
            KNOWING THE SOFTWARE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-2xl sm:text-4xl md:text-5xl font-sans uppercase tracking-widest text-[#171717]/60 my-4 font-semibold"
          >
            ISN'T THE SAME AS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-[#171717]"
          >
            KNOWING THE{' '}
            <span className="text-[#7D2419] underline decoration-[#7D2419] underline-offset-8 italic">
              WORK.
            </span>
          </motion.span>
        </h2>
      </div>
    </section>
  );
};
