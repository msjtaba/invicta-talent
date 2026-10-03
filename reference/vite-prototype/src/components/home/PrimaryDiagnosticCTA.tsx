import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const PrimaryDiagnosticCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#5C1910] text-[#E8DDC8] border-b border-[#E8DDC8]/20 relative overflow-hidden">
      {/* Background linework */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-grid-pattern" />

      <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10 relative">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8DDC8]/80 uppercase tracking-widest bg-[#7D2419] px-3 py-1">
            <Compass className="w-3.5 h-3.5 text-[#E8DDC8]" />
            <span>3-MINUTE ASSESSMENT</span>
          </div>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#E8DDC8]">
            Not sure where you sit?
          </h2>
          <p className="text-base text-[#E8DDC8]/80 font-sans max-w-xl">
            Answer eight questions and get a specific role and tier recommendation — with an honest read on any gap you'd need to close first.
          </p>
        </div>

        <Link
          to="/find-your-track"
          className="group inline-flex items-center gap-4 bg-[#E8DDC8] text-[#171717] px-8 py-5 text-base font-medium font-sans hover:bg-[#F3F1EC] transition-all shadow-xl hover:shadow-2xl cursor-pointer"
        >
          <span className="font-semibold tracking-wide group-hover:text-[#7D2419] transition-colors">
            Take the three-minute track diagnostic
          </span>
          <ArrowRight className="w-5 h-5 text-[#7D2419] transition-transform duration-300 group-hover:translate-x-3" />
        </Link>
      </div>
    </section>
  );
};
