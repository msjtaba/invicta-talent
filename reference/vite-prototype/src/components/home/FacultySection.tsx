import React from 'react';
import { FACULTY_MEMBERS } from '@/data/facultyData';
import { Button } from '@/components/ui/Button';

export const FacultySection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F2E8] text-[#171717] border-b border-[#171717]/15 bg-grid-pattern">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171717]/15 pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
              08 — PRACTITIONER FACULTY
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
              TAUGHT BY PEOPLE WHO WERE ON SITE THIS WEEK
            </h2>
            <p className="text-sm text-[#4A4235] font-sans leading-relaxed font-medium">
              Our faculty are not full-time educators. They are practising BIM managers, coordinators and engineers delivering aviation, giga-destination, hospitality and healthcare programmes across the GCC right now.
            </p>
          </div>
          <Button to="/faculty" variant="outline" size="sm" className="border-[#171717] text-[#171717] hover:bg-[#171717]/10">
            Meet the Faculty →
          </Button>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((fac) => (
            <div
              key={fac.id}
              className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 hover:border-[#7D2419] transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[#7F725F] border-b border-[#171717]/10 pb-3">
                  <span className="text-[#7D2419] font-bold">{fac.region}</span>
                  <span className="font-semibold">{fac.experienceYears} YEARS EXP</span>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#171717]">
                    {fac.roleTitle}
                  </h3>
                  <div className="text-xs font-mono text-[#7F725F] font-semibold mt-1">
                    {fac.projectType}
                  </div>
                </div>

                <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                  {fac.expertiseSummary}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#171717]/15 font-mono text-[11px]">
                <div className="text-[#7D2419] font-bold">{fac.teachingScope}</div>
                <div className="text-[#4A4235] font-medium">{fac.panelRole}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
