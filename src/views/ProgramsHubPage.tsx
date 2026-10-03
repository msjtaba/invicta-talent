import React from 'react';
import { PROGRAMS_DATA } from '@/data/programData';
import { LearnMoreButton } from '@/components/ui/LearnMoreButton';

const TIERS = ['Foundation', 'Professional', 'Advanced'];

export const ProgramsHubPage: React.FC = () => {
  const programs = Object.values(PROGRAMS_DATA);

  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hub Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            PROGRAMME CATALOGUE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            FOUR ROLES. NOT FOUR COURSES.
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            The Academy certifies four distinct BIM roles across three career tiers. Each programme runs twelve weeks on data derived from real project packages, under senior GCC practitioner review.
          </p>
        </div>

        {/* 4 Program Catalogue Entries */}
        <div className="space-y-8">
          {programs.map((prog) => (
            <div
              key={prog.code}
              className="p-8 md:p-10 border border-stone-light bg-white hover:border-crimson transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm rounded-md"
            >
              <div className="lg:col-span-8 space-y-4">
                {/* Meta line: code badge, then duration and tiers split by thin wine rules */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-bold uppercase tracking-[0.12em]">
                  <span className="rounded-sm bg-crimson px-2.5 py-1 text-ivory">{prog.code}</span>
                  <span aria-hidden className="h-4 w-px bg-crimson/25" />
                  <span className="text-crimson">12 Weeks</span>
                  <span aria-hidden className="h-4 w-px bg-crimson/25" />
                  <span className="flex flex-wrap items-center gap-x-2 text-graphite/70">
                    {TIERS.map((tier, i) => (
                      <React.Fragment key={tier}>
                        {i > 0 && <span aria-hidden className="size-1 rounded-full bg-crimson/40" />}
                        <span>{tier}</span>
                      </React.Fragment>
                    ))}
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-graphite leading-[1.1]">
                  {prog.title}
                </h2>

                <p className="text-sm text-graphite/75 font-sans leading-relaxed max-w-3xl">
                  {prog.sub}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-graphite">
                  <span className="flex items-center gap-1.5 bg-ivory-warm px-3 py-1.5 border border-stone-light font-semibold rounded-md">
                    Tools: {prog.tools.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Trial of button-1 (components.md) in place of the standard buttons */}
              <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
                <LearnMoreButton to={`/programs/${prog.slug}`}>Explore {prog.code} Track</LearnMoreButton>
                <LearnMoreButton to="/find-your-track">Check Eligibility</LearnMoreButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
