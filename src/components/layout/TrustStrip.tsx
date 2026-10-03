import React from 'react';
import { TRUST_STRIP_ITEMS, TRUST_COMPLIANCE_TEXT } from '@/data/siteData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-ivory-warm border-t border-b border-stone-light py-10 px-6 md:px-12 text-center text-graphite">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Project Sectors */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base text-graphite tracking-widest uppercase font-semibold">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              <span className="hover:text-crimson transition-colors">{item}</span>
              {index < TRUST_STRIP_ITEMS.length - 1 && (
                <span className="text-gold font-bold">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ISO & Compliance Technical Statement */}
        <p className="text-xs md:text-sm text-graphite/75 tracking-wider uppercase font-sans max-w-4xl mx-auto border-t border-stone-light pt-4 font-medium">
          {TRUST_COMPLIANCE_TEXT}
        </p>
      </div>
    </section>
  );
};
