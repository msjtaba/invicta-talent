import React from 'react';
import { FOOTER_DATA } from '@/data/siteData';
import { Button } from '@/components/ui/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-[1536px] mx-auto w-full space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            DIRECTORY & CONTACT ROUTING
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            Talk to us
          </h1>
          <p className="text-base text-[#4A4235] font-sans font-medium">
            Three distinct routes. Connect directly with the right department.
          </p>
        </div>

        {/* Three Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Route 1: Candidates */}
          <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#7D2419] font-bold block uppercase">01 / CANDIDATES</span>
              <h2 className="font-serif-editorial text-2xl text-[#171717]">Candidate Admissions</h2>
              <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                Not sure which programme fits? Take the track diagnostic first; it answers most of it in three minutes.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-[#171717]/15 font-mono text-xs">
              <a href="mailto:admissions@invicta-talent.com" className="text-[#171717] hover:text-[#7D2419] block font-bold">
                admissions@invicta-talent.com
              </a>
              <Button to="/find-your-track" variant="primary" size="sm" className="w-full">
                Take Diagnostic First →
              </Button>
            </div>
          </div>

          {/* Route 2: Employers */}
          <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#7D2419] font-bold block uppercase">02 / EMPLOYERS</span>
              <h2 className="font-serif-editorial text-2xl text-[#171717]">Corporate & Cohorts</h2>
              <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                Team training, capability audits, standards enablement, and early graduate pipeline access.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-[#171717]/15 font-mono text-xs">
              <a href="mailto:employers@invicta-talent.com" className="text-[#171717] hover:text-[#7D2419] block font-bold">
                employers@invicta-talent.com
              </a>
              <Button to="/for-employers" variant="outline" size="sm" className="w-full border-[#171717] text-[#171717]">
                Request Capability Audit →
              </Button>
            </div>
          </div>

          {/* Route 3: Practitioners */}
          <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#7D2419] font-bold block uppercase">03 / PRACTITIONERS</span>
              <h2 className="font-serif-editorial text-2xl text-[#171717]">Faculty & Teaching</h2>
              <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                Delivering BIM on a GCC programme and interested in teaching two expert sessions a week?
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-[#171717]/15 font-mono text-xs">
              <a href="mailto:faculty@invicta-talent.com" className="text-[#171717] hover:text-[#7D2419] block font-bold">
                faculty@invicta-talent.com
              </a>
              <Button to="/faculty" variant="outline" size="sm" className="w-full border-[#171717] text-[#171717]">
                Meet Current Faculty →
              </Button>
            </div>
          </div>
        </div>

        {/* Regional Phone & Campus Information */}
        <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] font-mono text-xs grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
          <div>
            <span className="text-[#7D2419] font-bold uppercase block text-[10px] mb-1">INDIA REGION</span>
            <div className="text-[#171717] font-semibold">{FOOTER_DATA.col4.india.join(' · ')}</div>
          </div>
          <div>
            <span className="text-[#7D2419] font-bold uppercase block text-[10px] mb-1">SAUDI ARABIA REGION</span>
            <div className="text-[#171717] font-semibold">{FOOTER_DATA.col4.saudi.join(' · ')}</div>
          </div>
          <div>
            <span className="text-[#7D2419] font-bold uppercase block text-[10px] mb-1">ACADEMY CAMPUS</span>
            <div className="text-[#171717] font-semibold">{FOOTER_DATA.col4.campus}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
