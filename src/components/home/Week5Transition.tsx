'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Week5Transition: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-crimson-dark text-ivory relative overflow-hidden border-t border-b border-ivory/12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-gold text-gold text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-[0.1em]"
          >
            PROJECT SIMULATION THRESHOLD
          </motion.div>

          <h2 className="font-display text-5xl sm:text-7xl leading-[1.1]">
            WEEK 5 — <br />
            <span className="text-gold">THE PROJECT STARTS.</span>
          </h2>

          <p className="text-lg lg:text-xl text-ivory/90 max-w-2xl leading-[1.6]">
            At Week 5, the visual language shifts. You leave generic tutorials behind. You are handed a dataset derived from a real GCC project package — airport terminal wing, hospitality tower, or hospital block — producing the actual deliverables of your target role under strict project constraints.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between p-8 border border-ivory/12 bg-crimson-deepest/60 rounded-md text-xs space-y-6">
          <div className="space-y-1">
            <span className="text-stone-light text-[11px] tracking-[0.1em]">DATASET IDENTIFIER</span>
            <div className="text-sm font-bold text-ivory">GCC_AV_TERMINAL_PKG_04</div>
          </div>
          <div className="space-y-1">
            <span className="text-stone-light text-[11px] tracking-[0.1em]">SIMULATION PROTOCOL</span>
            <div className="text-xs text-ivory">30+ DISCIPLINE MODELS · LIVE REVITO BCF SLA</div>
          </div>
          <div className="pt-4 border-t border-ivory/12 text-[11px] text-gold font-bold tracking-[0.1em] flex justify-between">
            <span>STATUS: ACTIVE SIMULATION</span>
            <span>WEEK 5 - 12</span>
          </div>
        </div>
      </div>
    </section>
  );
};
