import React from 'react';
import { OutlineButton } from '@/components/ui/OutlineButton';

export const PrimaryDiagnosticCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-crimson text-ivory">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.1]">
            Not sure where you sit?
          </h2>
          <p className="text-lg text-ivory/90 max-w-xl leading-[1.6]">
            Answer eight questions and get a specific role and tier recommendation — with an honest read on any gap you&apos;d need to close first.
          </p>
        </div>

        <OutlineButton to="/find-your-track" tone="dark" className="shrink-0">
          Take the three-minute track diagnostic
        </OutlineButton>
      </div>
    </section>
  );
};
