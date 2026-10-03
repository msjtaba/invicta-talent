import React from 'react';
import { FACULTY_MEMBERS } from '@/data/facultyData';
import { Button } from '@/components/ui/Button';

export const FacultySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory-warm text-graphite border-b border-stone-light rounded-md">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-light pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="eyebrow text-crimson">
              08 — PRACTITIONER FACULTY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
              TAUGHT BY PEOPLE WHO WERE ON SITE THIS WEEK
            </h2>
            <p className="text-sm text-graphite/75 font-sans leading-relaxed font-medium">
              Our faculty are not full-time educators. They are practising BIM managers, coordinators and engineers delivering aviation, giga-destination, hospitality and healthcare programmes across the GCC right now.
            </p>
          </div>
          <Button to="/faculty" variant="secondary" size="sm" >
            Meet the Faculty
          </Button>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((fac) => (
            <div
              key={fac.id}
              className="p-8 border border-stone-light bg-white space-y-6 hover:border-crimson transition-all flex flex-col justify-between shadow-sm rounded-md"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-graphite/75 border-b border-stone-light pb-3">
                  <span className="text-crimson font-bold">{fac.region}</span>
                  <span className="font-semibold">{fac.experienceYears} YEARS EXP</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-graphite leading-[1.1]">
                    {fac.roleTitle}
                  </h3>
                  <div className="text-xs text-graphite/75 font-semibold mt-1">
                    {fac.projectType}
                  </div>
                </div>

                <p className="text-xs text-graphite/75 font-sans leading-relaxed">
                  {fac.expertiseSummary}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-light text-[11px]">
                <div className="text-crimson font-bold">{fac.teachingScope}</div>
                <div className="text-graphite/75 font-medium">{fac.panelRole}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
