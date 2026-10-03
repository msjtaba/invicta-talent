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
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="eyebrow text-crimson">
            07 — ACADEMY CADENCE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
            {GLOBAL_MICROCOPY.rhythmHeadline}
          </h2>
          <p className="text-base text-graphite/75 font-sans font-medium">
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
                  ? 'bg-crimson text-ivory border-crimson shadow-md'
                  : 'bg-ivory-warm border-stone-light text-graphite hover:border-crimson'
              }`}
            >
              <div className={`flex justify-between items-center text-xs mb-4 ${i === 4 ? 'text-ivory/80' : 'text-graphite/75'}`}>
                <span>DAY 0{i + 1}</span>
                <span className="font-bold">{d.day}</span>
              </div>
              <div className="text-sm font-semibold mb-1">
                {d.label}
              </div>
              <div className={`text-xs font-sans ${i === 4 ? 'text-ivory/90' : 'text-graphite/75'}`}>
                {d.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 3-Month Arc */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-light">
          <div className="p-6 border border-stone-light bg-ivory-warm space-y-2 rounded-md">
            <span className="text-xs text-crimson font-bold uppercase">MONTH 1</span>
            <h3 className="font-display text-xl text-graphite leading-[1.1]">Foundations and Tools</h3>
            <p className="text-xs text-graphite/75">Discipline templates, parameter discipline, ISO 19650 essentials.</p>
          </div>
          <div className="p-6 border border-crimson bg-crimson/10 space-y-2">
            <span className="text-xs text-crimson font-bold uppercase">MONTH 2</span>
            <h3 className="font-display text-xl text-graphite leading-[1.1]">Role Workflows on Real Project Data</h3>
            <p className="text-xs text-graphite/75">Terminal wing / tower dataset issued. Multi-discipline revision cycles.</p>
          </div>
          <div className="p-6 border border-stone-light bg-ivory-warm space-y-2 rounded-md">
            <span className="text-xs text-crimson font-bold uppercase">MONTH 3</span>
            <h3 className="font-display text-xl text-graphite leading-[1.1]">Capstone Simulation and Certification</h3>
            <p className="text-xs text-graphite/75">Full role simulation package & live expert hiring panel defense.</p>
          </div>
        </div>

        {/* Deliverable QA Test Simulator */}
        <div className="pt-8 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-crimson font-bold">
            FRIDAY REVIEW SIMULATOR — INTERACTIVE
          </div>
          <RedlineSheet />
        </div>
      </div>
    </section>
  );
};
