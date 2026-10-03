import React from 'react';
import { FACULTY_MEMBERS } from '@/data/facultyData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { Button } from '@/components/ui/Button';

export const FacultyPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            EXPERT FACULTY
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.facultyHeadline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            Our faculty are not full-time educators. They are practising BIM managers, coordinators and engineers delivering aviation, giga-destination, hospitality and healthcare programmes across the GCC right now. They teach two sessions a week between project commitments — which is exactly why the material is current.
          </p>
        </div>

        {/* Section: Why Practitioners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-[#171717]/15 bg-[#FFFDF9] shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#7D2419] font-bold uppercase">WHY PRACTITIONERS, NOT PROFESSORS</span>
            <p className="text-xs text-[#3D352A] font-sans leading-relaxed">
              A full-time educator teaches the version of BIM that existed when they left practice. Our faculty teach the version that is causing them problems this month. The material moves because the projects move.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#7D2419] font-bold uppercase">CONTINUITY IS THE POINT</span>
            <p className="text-xs text-[#3D352A] font-sans leading-relaxed">
              The same expert pool sets capstone challenges, runs desk-crits, sits on certification panels and conducts mock interviews. You are assessed by the people who hire for these roles.
            </p>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((fac) => (
            <div
              key={fac.id}
              className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 flex flex-col justify-between shadow-sm hover:border-[#7D2419] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[#7F725F] border-b border-[#171717]/10 pb-3 font-semibold">
                  <span className="text-[#7D2419] font-bold">{fac.region}</span>
                  <span>{fac.experienceYears} YEARS EXP</span>
                </div>

                <div>
                  <h2 className="font-serif-editorial text-2xl font-semibold text-[#171717]">
                    {fac.roleTitle}
                  </h2>
                  <div className="text-xs font-mono text-[#7F725F] font-semibold mt-1">
                    {fac.projectType}
                  </div>
                </div>

                <p className="text-xs text-[#3D352A] font-sans leading-relaxed">
                  {fac.expertiseSummary}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#171717]/15 font-mono text-[11px]">
                <div className="text-[#7D2419] font-bold">{fac.teachingScope}</div>
                <div className="text-[#4A4235] font-semibold">{fac.panelRole}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Button to="/find-your-track" variant="primary" size="lg">
            See Which Faculty Teach Your Track →
          </Button>
        </div>
      </div>
    </div>
  );
};
