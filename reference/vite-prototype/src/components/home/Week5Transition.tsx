import React from 'react';
import { motion } from 'framer-motion';

export const Week5Transition: React.FC = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#5C1910] text-[#E8DDC8] relative overflow-hidden border-t border-b border-[#E8DDC8]/20">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#E8DDC8] text-[#171717] text-xs font-mono font-bold px-3 py-1 uppercase tracking-widest"
          >
            PROJECT SIMULATION THRESHOLD
          </motion.div>

          <h2 className="font-serif-editorial text-5xl sm:text-7xl font-normal leading-none tracking-tight">
            WEEK 5 — <br />
            <span className="italic font-light">THE PROJECT STARTS.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#E8DDC8]/90 font-sans max-w-2xl leading-relaxed">
            At Week 5, the visual language shifts. You leave generic tutorials behind. You are handed a dataset derived from a real GCC project package — airport terminal wing, hospitality tower, or hospital block — producing the actual deliverables of your target role under strict project constraints.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between p-8 border border-[#E8DDC8]/30 bg-[#7D2419]/50 font-mono text-xs space-y-6">
          <div className="space-y-1">
            <span className="text-[#E8DDC8]/60 text-[10px]">DATASET IDENTIFIER</span>
            <div className="text-sm font-bold text-[#E8DDC8]">GCC_AV_TERMINAL_PKG_04</div>
          </div>
          <div className="space-y-1">
            <span className="text-[#E8DDC8]/60 text-[10px]">SIMULATION PROTOCOL</span>
            <div className="text-xs text-[#E8DDC8]">30+ DISCIPLINE MODELS · LIVE REVITO BCF SLA</div>
          </div>
          <div className="pt-4 border-t border-[#E8DDC8]/20 text-[10px] text-[#E8DDC8]/80 flex justify-between">
            <span>STATUS: ACTIVE SIMULATION</span>
            <span>WEEK 5 - 12</span>
          </div>
        </div>
      </div>
    </section>
  );
};
