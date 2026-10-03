import React from 'react';
import { EMPLOYER_DATA } from '@/data/employerData';
import { Button } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';

export const EmployersPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            CORPORATE & COHORT TRAINING
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {EMPLOYER_DATA.headline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            {EMPLOYER_DATA.lead}
          </p>
        </div>

        {/* What We Offer */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">What we offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMPLOYER_DATA.services.map((serv) => (
              <div key={serv.title} className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-3 hover:border-[#7D2419] transition-colors shadow-sm">
                <span className="text-xs font-mono text-[#7D2419] font-bold block uppercase">{serv.title}</span>
                <p className="text-xs text-[#4A4235] font-sans leading-relaxed">{serv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Starts & Audit Request CTA */}
        <div className="p-8 border-2 border-[#7D2419] bg-[#FFFDF9] space-y-6 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7D2419] font-bold uppercase">
            <ShieldCheck className="w-5 h-5 text-[#7D2419]" />
            <span>2-HOUR CAPABILITY REVIEW</span>
          </div>

          <h3 className="font-serif-editorial text-3xl text-[#171717]">How it starts</h3>
          <p className="text-sm text-[#3D352A] font-sans max-w-3xl leading-relaxed">
            {EMPLOYER_DATA.auditProcess}
          </p>

          <div className="pt-4 border-t border-[#171717]/15">
            <Button to="/contact" variant="primary" size="lg">
              {EMPLOYER_DATA.cta} →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
