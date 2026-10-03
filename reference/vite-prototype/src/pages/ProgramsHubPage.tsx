import React from 'react';
import { PROGRAMS_DATA } from '@/data/programData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const ProgramsHubPage: React.FC = () => {
  const programs = Object.values(PROGRAMS_DATA);

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Hub Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            PROGRAMME CATALOGUE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            FOUR ROLES. NOT FOUR COURSES.
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            The Academy certifies four distinct BIM roles across three career tiers. Each programme runs twelve weeks on data derived from real project packages, under senior GCC practitioner review.
          </p>
        </div>

        {/* 4 Program Catalogue Entries */}
        <div className="space-y-8">
          {programs.map((prog) => (
            <div
              key={prog.code}
              className="p-8 md:p-10 border border-[#171717]/15 bg-[#FFFDF9] hover:border-[#7D2419] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#7D2419] font-bold">
                  <span>{prog.code}</span>
                  <span>·</span>
                  <span className="text-[#4A4235]">12 WEEKS</span>
                  <span>·</span>
                  <span className="text-[#4A4235]">FOUNDATION / PROFESSIONAL / ADVANCED</span>
                </div>

                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
                  {prog.title}
                </h2>

                <p className="text-sm text-[#4A4235] font-sans leading-relaxed max-w-3xl">
                  {prog.sub}
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-[#171717]">
                  <span className="flex items-center gap-1.5 bg-[#F7F2E8] px-3 py-1.5 border border-[#171717]/10 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7D2419]" />
                    Capstone: {prog.capstone.title}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#F7F2E8] px-3 py-1.5 border border-[#171717]/10 font-semibold">
                    Tools: {prog.tools.join(' · ')}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                <Button to={`/programs/${prog.slug}`} variant="primary" size="md" className="w-full">
                  Explore {prog.code} Track →
                </Button>
                <Button to="/find-your-track" variant="outline" size="md" className="w-full border-[#171717] text-[#171717]">
                  Check Eligibility
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
