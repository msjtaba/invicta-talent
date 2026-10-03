import React from 'react';
import { TRUST_STRIP_ITEMS, TRUST_COMPLIANCE_TEXT } from '@/data/siteData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#E8DDC8] border-t border-b border-[#171717]/15 py-10 px-6 md:px-12 text-center font-mono text-[#171717]">
      <div className="max-w-[1536px] mx-auto space-y-4">
        {/* Project Sectors */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-[#171717] tracking-widest uppercase font-semibold">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              <span className="hover:text-[#7D2419] transition-colors">{item}</span>
              {index < TRUST_STRIP_ITEMS.length - 1 && (
                <span className="text-[#7D2419] font-bold">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ISO & Compliance Technical Statement */}
        <p className="text-[11px] md:text-xs text-[#5C5243] tracking-wider uppercase font-sans max-w-4xl mx-auto border-t border-[#171717]/10 pt-4 font-medium">
          {TRUST_COMPLIANCE_TEXT}
        </p>
      </div>
    </section>
  );
};
