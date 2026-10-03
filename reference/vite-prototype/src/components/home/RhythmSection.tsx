import React from 'react';
import { RedlineSheet } from '@/components/ui/RedlineSheet';
import { GLOBAL_MICROCOPY } from '@/data/siteData';

export const RhythmSection: React.FC = () => {
  const weekDays = [
    { day: 'MON', label: 'EXPERT SESSION 1', detail: '90–120 mins live scenario' },
    { day: 'TUE', label: 'LAB DRILL', detail: '3–4 hours hands-on model work' },
    { day: 'WED', label: 'LAB DRILL', detail: '3–4 hours discipline production' },
    { day: 'THU', label: 'EXPERT SESSION 2', detail: '90–120 mins workflow review' },
    { day: 'FRI', label: 'SUBMISSION QA', detail: 'Graded deliverable redline' },
    { day: 'SAT', label: 'DESK CRIT', detail: '1-on-1 feedback & revision' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            07 — ACADEMY CADENCE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.rhythmHeadline}
          </h2>
          <p className="text-base text-[#4A4235] font-sans font-medium">
            {GLOBAL_MICROCOPY.rhythmSub}
          </p>
        </div>

        {/* 6-Day Rhythm Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {weekDays.map((d, i) => (
            <div
              key={d.day}
              className={`p-5 border transition-all ${
                i === 4
                  ? 'bg-[#7D2419] text-[#E8DDC8] border-[#7D2419] shadow-md'
                  : 'bg-[#F7F2E8] border-[#171717]/15 text-[#171717] hover:border-[#7D2419]'
              }`}
            >
              <div className={`flex justify-between items-center text-xs font-mono mb-4 ${i === 4 ? 'text-[#E8DDC8]/80' : 'text-[#7F725F]'}`}>
                <span>DAY 0{i + 1}</span>
                <span className="font-bold">{d.day}</span>
              </div>
              <div className="text-sm font-semibold mb-1 font-mono">
                {d.label}
              </div>
              <div className={`text-xs font-sans ${i === 4 ? 'text-[#E8DDC8]/90' : 'text-[#4A4235]'}`}>
                {d.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 3-Month Arc */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#171717]/15">
          <div className="p-6 border border-[#171717]/15 bg-[#F7F2E8] space-y-2">
            <span className="text-xs font-mono text-[#7D2419] font-bold uppercase">MONTH 1</span>
            <h3 className="font-serif-editorial text-xl text-[#171717]">Foundations and Tools</h3>
            <p className="text-xs text-[#4A4235]">Discipline templates, parameter discipline, ISO 19650 essentials.</p>
          </div>
          <div className="p-6 border border-[#7D2419] bg-[#7D2419]/10 space-y-2">
            <span className="text-xs font-mono text-[#7D2419] font-bold uppercase">MONTH 2</span>
            <h3 className="font-serif-editorial text-xl text-[#171717]">Role Workflows on Real Project Data</h3>
            <p className="text-xs text-[#4A4235]">Terminal wing / tower dataset issued. Multi-discipline revision cycles.</p>
          </div>
          <div className="p-6 border border-[#171717]/15 bg-[#F7F2E8] space-y-2">
            <span className="text-xs font-mono text-[#7D2419] font-bold uppercase">MONTH 3</span>
            <h3 className="font-serif-editorial text-xl text-[#171717]">Capstone Simulation and Certification</h3>
            <p className="text-xs text-[#4A4235]">Full role simulation package & live expert hiring panel defense.</p>
          </div>
        </div>

        {/* Deliverable QA Test Simulator */}
        <div className="pt-8 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold">
            FRIDAY REVIEW SIMULATOR — INTERACTIVE
          </div>
          <RedlineSheet />
        </div>
      </div>
    </section>
  );
};
