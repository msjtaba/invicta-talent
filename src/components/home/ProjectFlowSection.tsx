'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GLOBAL_MICROCOPY } from '@/data/siteData';

export const ProjectFlowSection: React.FC = () => {
  const flowStages = [
    { label: 'Project Brief', code: '01' },
    { label: 'Project Data', code: '02' },
    { label: 'Your Work', code: '03' },
    { label: 'Review', code: '04' },
    { label: 'Revision', code: '05' },
    { label: 'QA Check', code: '06' },
    { label: 'Final Deliverable', code: '07', isFinal: true },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Headings */}
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow text-crimson">
            02 — PROJECT PROGRESSION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-graphite leading-[1.1]">
            {GLOBAL_MICROCOPY.projectFlowHeadline}
          </h2>
          <p className="text-base sm:text-lg text-graphite/80 leading-relaxed font-sans font-medium">
            {GLOBAL_MICROCOPY.projectFlowSub}
          </p>
        </div>

        {/* Project Flow Horizontal Line Progression */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
            {flowStages.map((stage, idx) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`p-5 border transition-all ${
                  stage.isFinal
                    ? 'bg-crimson border-crimson text-ivory shadow-md'
                    : 'bg-ivory-warm border-stone-light text-graphite hover:border-crimson'
                }`}
              >
                <div className={`flex items-center justify-between text-xs mb-6 ${stage.isFinal ? 'text-ivory/80' : 'text-graphite/75'}`}>
                  <span>STAGE</span>
                  <span className="font-bold">{stage.code}</span>
                </div>
                <div className={`text-sm font-semibold tracking-wide ${stage.isFinal ? 'text-ivory' : 'text-graphite'}`}>
                  {stage.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
