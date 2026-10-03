import React from 'react';
import { OutlineButton } from '@/components/ui/OutlineButton';
import { GLOBAL_MICROCOPY, PERSISTENT_CTA } from '@/data/siteData';

// design-2 §5.6 — Crimson pattern closing CTA.
export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-linear-to-br from-crimson-deepest to-crimson text-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 relative">
        <h2 className="font-display text-[42px] lg:text-[64px] leading-[1.05] text-ivory">
          {GLOBAL_MICROCOPY.nextCohortHeadline}
        </h2>

        <p className="text-lg lg:text-xl text-ivory/90 max-w-2xl mx-auto leading-[1.6]">
          {GLOBAL_MICROCOPY.nextCohortSub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <OutlineButton to={PERSISTENT_CTA.primary.href} tone="dark">
            {PERSISTENT_CTA.primary.label}
          </OutlineButton>
          <OutlineButton to={PERSISTENT_CTA.contact.href} tone="dark">
            {PERSISTENT_CTA.contact.label}
          </OutlineButton>
        </div>
      </div>
    </section>
  );
};
