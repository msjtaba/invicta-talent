import React from 'react';
import { FACULTY_MEMBERS } from '@/data/facultyData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { Button } from '@/components/ui/Button';

export const FacultyPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            EXPERT FACULTY
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {GLOBAL_MICROCOPY.facultyHeadline}
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            Our faculty are not full-time educators. They are practising BIM managers, coordinators and engineers delivering aviation, giga-destination, hospitality and healthcare programmes across the GCC right now. They teach two sessions a week between project commitments — which is exactly why the material is current.
          </p>
        </div>

        {/* Section: Why Practitioners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-stone-light bg-white shadow-sm rounded-md">
          <div className="space-y-3">
            <span className="text-xs text-crimson font-bold uppercase">WHY PRACTITIONERS, NOT PROFESSORS</span>
            <p className="text-xs text-graphite/80 font-sans leading-relaxed">
              A full-time educator teaches the version of BIM that existed when they left practice. Our faculty teach the version that is causing them problems this month. The material moves because the projects move.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-xs text-crimson font-bold uppercase">CONTINUITY IS THE POINT</span>
            <p className="text-xs text-graphite/80 font-sans leading-relaxed">
              The same expert pool sets capstone challenges, runs desk-crits, sits on certification panels and conducts mock interviews. You are assessed by the people who hire for these roles.
            </p>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((fac) => (
            <div
              key={fac.id}
              className="p-8 border border-stone-light bg-white space-y-6 flex flex-col justify-between shadow-sm hover:border-crimson transition-colors rounded-md"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-graphite/75 border-b border-stone-light pb-3 font-semibold">
                  <span className="text-crimson font-bold">{fac.region}</span>
                  <span>{fac.experienceYears} YEARS EXP</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-graphite leading-[1.1]">
                    {fac.roleTitle}
                  </h2>
                  <div className="text-xs text-graphite/75 font-semibold mt-1">
                    {fac.projectType}
                  </div>
                </div>

                <p className="text-xs text-graphite/80 font-sans leading-relaxed">
                  {fac.expertiseSummary}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-light text-[11px]">
                <div className="text-crimson font-bold">{fac.teachingScope}</div>
                <div className="text-graphite/75 font-semibold">{fac.panelRole}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Button to="/find-your-track" variant="primary" size="lg">
            See Which Faculty Teach Your Track
          </Button>
        </div>
      </div>
    </div>
  );
};
