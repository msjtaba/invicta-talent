import React from 'react';
import { Button } from '@/components/ui/Button';
import { PERSISTENT_CTA, GLOBAL_MICROCOPY } from '@/data/siteData';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#5C1910] text-[#E8DDC8] relative overflow-hidden border-t border-[#E8DDC8]/20">
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 relative">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E8DDC8]/80 font-mono font-medium block">
          12 — INTAKE ADMISSIONS
        </span>

        <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl font-normal leading-tight text-[#E8DDC8]">
          {GLOBAL_MICROCOPY.nextCohortHeadline}
        </h2>

        <p className="text-base sm:text-lg text-[#E8DDC8]/90 font-sans max-w-2xl mx-auto leading-relaxed">
          {GLOBAL_MICROCOPY.nextCohortSub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button to={PERSISTENT_CTA.primary.href} size="lg" variant="primary" className="bg-[#E8DDC8] text-[#171717] hover:bg-[#F3F1EC] border-[#E8DDC8]">
            {PERSISTENT_CTA.primary.label}
          </Button>
          <Button to={PERSISTENT_CTA.contact.href} size="lg" variant="outline" className="border-[#E8DDC8]/40 text-[#E8DDC8] hover:bg-[#E8DDC8]/10">
            {PERSISTENT_CTA.contact.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
