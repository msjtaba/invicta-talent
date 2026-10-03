import React from 'react';
import { EMPLOYER_DATA } from '@/data/employerData';
import { LearnMoreButton } from '@/components/ui/LearnMoreButton';

export const EmployersPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            CORPORATE & COHORT TRAINING
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {EMPLOYER_DATA.headline}
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            {EMPLOYER_DATA.lead}
          </p>
        </div>

        {/* What We Offer */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMPLOYER_DATA.services.map((serv) => (
              <div key={serv.title} className="p-8 border border-crimson-deepest/40 bg-white space-y-3 rounded-md shadow-[3px_3px_0_rgba(107,6,6,0.35)] transition-[translate,box-shadow,border-color] duration-200 hover:-translate-x-px hover:-translate-y-px hover:border-crimson-deepest/60 hover:shadow-[4px_4px_0_rgba(107,6,6,0.45)]">
                <span className="text-xs text-crimson font-bold block uppercase">{serv.title}</span>
                <p className="text-xs text-graphite/75 font-sans leading-relaxed">{serv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Starts & Audit Request CTA */}
        <div className="p-8 border-2 border-crimson bg-white space-y-6 shadow-md rounded-md">
          <h3 className="font-display text-3xl text-graphite leading-[1.1]">How it starts</h3>
          <p className="text-sm text-graphite/80 font-sans max-w-3xl leading-relaxed">
            {EMPLOYER_DATA.auditProcess}
          </p>

          <div className="pt-4 border-t border-stone-light">
            <LearnMoreButton to="/contact">{EMPLOYER_DATA.cta}</LearnMoreButton>
          </div>
        </div>
      </div>
    </div>
  );
};
