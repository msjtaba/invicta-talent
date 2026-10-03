import React from 'react';
import { Check } from 'lucide-react';
import { OutlineButton } from '@/components/ui/OutlineButton';

export const OutcomesSection: React.FC = () => {
  const roleOutcomes = [
    {
      code: 'IT-CBM',
      role: 'BIM Modeler',
      outcome: 'Produce discipline models to LOD 300–400 per project BEP, extract shop drawings, run self-QA, and survive revision cycles without breaking central model links.',
    },
    {
      code: 'IT-CBE',
      role: 'BIM Engineer',
      outcome: 'Validate engineering models against calculations and codes, extract automated QTO, run 4D Synchro schedules, and author model health reports.',
    },
    {
      code: 'IT-CBC',
      role: 'BIM Coordinator',
      outcome: 'Federate multi-discipline models from 20+ sub-consultants, triage 40,000 clashes to 400 real decisions, chair coordination meetings, and hold the line via BCF.',
    },
    {
      code: 'IT-CBMgr',
      role: 'BIM Manager',
      outcome: 'Deconstruct client EIR requirements, author ISO 19650 master BEPs, establish enterprise CDE governance, audit supply-chain capability, and report delivery risk.',
    },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
            YOU GRADUATE HAVING DONE THE JOB — NOT HAVING STUDIED IT.
          </h2>
          <p className="text-base text-graphite/75 font-sans font-medium">
            The certificate confirms you passed. The work shows what you can actually perform.
          </p>
        </div>

        {/* 4 outcome blocks — soft wine / white checkerboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roleOutcomes.map((item, idx) => {
            const dark = idx === 0 || idx === 3;
            return (
              <article
                key={item.code}
                className={`group relative overflow-hidden rounded-md p-8 lg:p-10 flex flex-col gap-6 transition-[transform,box-shadow] duration-250 ease-brand hover:-translate-y-1 hover:shadow-lg ${
                  dark
                    ? 'bg-linear-to-br from-crimson to-crimson-dark text-ivory border border-crimson-dark/40'
                    : 'bg-white text-graphite border border-stone-light'
                }`}
              >
                {/* Top rule that runs full width on hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-1 w-16 transition-[width] duration-500 ease-brand group-hover:w-full ${
                    dark ? 'bg-ivory-warm/50' : 'bg-crimson'
                  }`}
                />

                <div className="flex items-start justify-between gap-4">
                  <span className={`font-display text-6xl lg:text-7xl leading-none ${dark ? 'text-ivory-warm/60' : 'text-crimson'}`}>
                    0{idx + 1}
                  </span>
                  <span
                    className={`rounded-sm px-3 py-1.5 text-xs font-bold uppercase tracking-widest ${
                      dark ? 'bg-ivory/10 text-ivory' : 'bg-crimson text-white'
                    }`}
                  >
                    {item.code}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className={`font-display text-3xl lg:text-4xl leading-[1.1] ${dark ? 'text-ivory' : 'text-graphite'}`}>
                    {item.role}
                  </h3>
                  <span aria-hidden className={`block h-0.5 w-12 ${dark ? 'bg-ivory-warm/40' : 'bg-crimson/40'}`} />
                </div>

                <p className={`text-base leading-relaxed ${dark ? 'text-ivory-warm/85' : 'text-graphite/80'}`}>
                  {item.outcome}
                </p>

                <div
                  className={`mt-auto flex items-center gap-2 pt-5 border-t text-xs font-bold uppercase tracking-[0.18em] ${
                    dark ? 'border-ivory/15 text-ivory-warm' : 'border-stone-light text-crimson'
                  }`}
                >
                  <Check strokeWidth={2} className="w-4 h-4" />
                  Performed on graduation
                </div>
              </article>
            );
          })}
        </div>

        <div className="pt-4 flex justify-center">
          <OutlineButton to="/programs">Explore Our Programs</OutlineButton>
        </div>
      </div>
    </section>
  );
};
