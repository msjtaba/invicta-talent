import React from 'react';
import { Button } from '@/components/ui/Button';

export const CertificationSection: React.FC = () => {
  const weightings = [
    { component: 'Weekly Deliverables', weight: '30%', desc: '10 graded role deliverables reviewed against QA standards' },
    { component: 'Checkpoint Assessments (×2)', weight: '15%', desc: 'End of Month 1 & Month 2 written + practical evaluation' },
    { component: 'Capstone Simulation', weight: '30%', desc: 'Full role simulation accepted by live expert panel' },
    { component: 'Certification Exam & Defense', weight: '25%', desc: 'Written theory + practical exam + live panel defense' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F2E8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            10 — CERTIFICATION ARCHITECTURE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
            A CERTIFICATE THAT MEANS SOMETHING BECAUSE IT IS HARD TO GET.
          </h2>
          <p className="text-base text-[#4A4235] font-sans font-medium">
            70% overall pass mark with no single component below 60%. Distinction awarded at 85%+ overall.
          </p>
        </div>

        {/* Requirements & Weightings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Minimum Standards */}
          <div className="lg:col-span-5 p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 shadow-sm">
            <h3 className="font-serif-editorial text-2xl text-[#171717] border-b border-[#171717]/15 pb-4">
              Passing Standards
            </h3>
            <ul className="space-y-4 text-xs font-mono text-[#171717]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#7D2419]" />
                <span className="text-[#171717] font-medium">85% minimum attendance requirement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#7D2419]" />
                <span className="text-[#171717] font-medium">10 weekly graded deliverables submitted</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#7D2419]" />
                <span className="text-[#171717] font-medium">2 formal checkpoint assessments passed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#7D2419]" />
                <span className="text-[#171717] font-medium">Capstone accepted by live expert panel</span>
              </li>
              <li className="flex items-center gap-3 text-[#7D2419] font-bold">
                <span className="w-2 h-2 bg-[#7D2419]" />
                <span>70% overall pass mark (no unit &lt; 60%)</span>
              </li>
            </ul>
          </div>

          {/* Right Grade Weighting Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#7D2419] uppercase tracking-wider font-bold mb-2">
              ASSESSMENT WEIGHTING BREAKDOWN
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weightings.map((w) => (
                <div key={w.component} className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-[#171717] font-bold">{w.component}</span>
                    <span className="font-serif-editorial text-3xl font-semibold text-[#7D2419]">{w.weight}</span>
                  </div>
                  <p className="text-xs text-[#4A4235] font-sans">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#171717]/15">
          <Button to="/certification" variant="primary" size="md">
            View Full Certification Framework →
          </Button>
          <Button to="/verify" variant="outline" size="md" className="border-[#171717] text-[#171717] hover:bg-[#171717]/10">
            Verify a Credential →
          </Button>
        </div>
      </div>
    </section>
  );
};
