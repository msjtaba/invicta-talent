import React from 'react';
import { OutlineButton } from '@/components/ui/OutlineButton';

export const CertificationSection: React.FC = () => {
  const weightings = [
    { component: 'Weekly Deliverables', weight: '30%', desc: '10 graded role deliverables reviewed against QA standards' },
    { component: 'Checkpoint Assessments (×2)', weight: '15%', desc: 'End of Month 1 & Month 2 written + practical evaluation' },
    { component: 'Capstone Simulation', weight: '30%', desc: 'Full role simulation accepted by live expert panel' },
    { component: 'Certification Exam & Defense', weight: '25%', desc: 'Written theory + practical exam + live panel defense' },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory-warm text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
            A CERTIFICATE THAT MEANS SOMETHING BECAUSE IT IS HARD TO GET.
          </h2>
          <p className="text-base text-graphite/75 font-sans font-medium">
            70% overall pass mark with no single component below 60%. Distinction awarded at 85%+ overall.
          </p>
        </div>

        {/* Requirements & Weightings Grid */}
        {/* Label sits in its own row so Passing Standards centres on the weighting boxes alone. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4 items-center">
          {/* Left Minimum Standards */}
          <div className="lg:col-span-5 lg:row-start-2 mb-8 lg:mb-0 p-8 lg:p-10 border border-stone-light bg-white space-y-6 shadow-sm rounded-md">
            <h3 className="font-display text-3xl text-graphite border-b border-stone-light pb-4 leading-[1.1]">
              Passing Standards
            </h3>
            <ul className="space-y-5 text-base text-graphite">
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 shrink-0 bg-crimson" />
                <span className="text-graphite font-medium">85% minimum attendance requirement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 shrink-0 bg-crimson" />
                <span className="text-graphite font-medium">10 weekly graded deliverables submitted</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 shrink-0 bg-crimson" />
                <span className="text-graphite font-medium">2 formal checkpoint assessments passed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 shrink-0 bg-crimson" />
                <span className="text-graphite font-medium">Capstone accepted by live expert panel</span>
              </li>
              <li className="flex items-center gap-3 text-crimson font-bold">
                <span className="w-2.5 h-2.5 shrink-0 bg-crimson" />
                <span>70% overall pass mark (no unit &lt; 60%)</span>
              </li>
            </ul>
          </div>

          {/* Right Grade Weighting Grid */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 text-sm text-crimson uppercase tracking-wider font-bold">
            ASSESSMENT WEIGHTING BREAKDOWN
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weightings.map((w) => (
                <div key={w.component} className="p-7 lg:p-8 border border-stone-light bg-white space-y-3 shadow-sm rounded-md">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-base text-graphite font-bold">{w.component}</span>
                    <span className="font-display text-4xl text-crimson leading-[1.1]">{w.weight}</span>
                  </div>
                  <p className="text-sm text-graphite/75 font-sans leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-light">
          <OutlineButton to="/verify">Verify a Credential</OutlineButton>
        </div>
      </div>
    </section>
  );
};
