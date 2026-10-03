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
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Headings */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            02 — PROJECT PROGRESSION
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.projectFlowHeadline}
          </h2>
          <p className="text-base sm:text-lg text-[#3D352A] leading-relaxed font-sans font-medium">
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
                    ? 'bg-[#7D2419] border-[#7D2419] text-[#E8DDC8] shadow-md'
                    : 'bg-[#F7F2E8] border-[#171717]/20 text-[#171717] hover:border-[#7D2419]'
                }`}
              >
                <div className={`flex items-center justify-between text-xs font-mono mb-6 ${stage.isFinal ? 'text-[#E8DDC8]/80' : 'text-[#7F725F]'}`}>
                  <span>STAGE</span>
                  <span className="font-bold">{stage.code}</span>
                </div>
                <div className={`text-sm font-semibold tracking-wide ${stage.isFinal ? 'text-[#E8DDC8] font-mono' : 'text-[#171717]'}`}>
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
