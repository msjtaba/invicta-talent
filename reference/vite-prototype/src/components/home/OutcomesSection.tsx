import React from 'react';
import { Button } from '@/components/ui/Button';

export const OutcomesSection: React.FC = () => {
  const roleOutcomes = [
    {
      code: 'ITTA-CBM',
      role: 'BIM Modeler',
      outcome: 'Produce discipline models to LOD 300–400 per project BEP, extract shop drawings, run self-QA, and survive revision cycles without breaking central model links.',
    },
    {
      code: 'ITTA-CBE',
      role: 'BIM Engineer',
      outcome: 'Validate engineering models against calculations and codes, extract automated QTO, run 4D Synchro schedules, and author model health reports.',
    },
    {
      code: 'ITTA-CBC',
      role: 'BIM Coordinator',
      outcome: 'Federate multi-discipline models from 20+ sub-consultants, triage 40,000 clashes to 400 real decisions, chair coordination meetings, and hold the line via BCF.',
    },
    {
      code: 'ITTA-CBMgr',
      role: 'BIM Manager',
      outcome: 'Deconstruct client EIR requirements, author ISO 19650 master BEPs, establish enterprise CDE governance, audit supply-chain capability, and report delivery risk.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            09 — ROLE CAPABILITY OUTCOMES
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
            YOU GRADUATE HAVING DONE THE JOB — NOT HAVING STUDIED IT.
          </h2>
          <p className="text-base text-[#4A4235] font-sans font-medium">
            The certificate confirms you passed. The work shows what you can actually perform.
          </p>
        </div>

        {/* 4 Outcome Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roleOutcomes.map((item) => (
            <div
              key={item.code}
              className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-4 hover:border-[#7D2419] transition-colors shadow-sm"
            >
              <div className="flex justify-between items-center text-xs font-mono text-[#7D2419] font-bold">
                <span>{item.code}</span>
                <span>GRADUATION CAPABILITY</span>
              </div>
              <h3 className="font-serif-editorial text-2xl text-[#171717]">
                {item.role}
              </h3>
              <p className="text-sm text-[#4A4235] font-sans leading-relaxed">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <Button to="/outcomes" variant="outline" size="md" className="border-[#171717] text-[#171717] hover:bg-[#171717]/10">
            View All Graduate Capstone Artefacts →
          </Button>
        </div>
      </div>
    </section>
  );
};
