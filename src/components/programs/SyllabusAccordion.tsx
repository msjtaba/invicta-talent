'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { ProgramDetail, ScheduleWeek } from '@/data/programData';

const MONTHS = [
  { key: 'month1', label: 'Month 1', weeks: 'Weeks 1–4', theme: 'Foundations and tool mastery' },
  { key: 'month2', label: 'Month 2', weeks: 'Weeks 5–8', theme: 'Production workflows on real projects' },
  { key: 'month3', label: 'Month 3', weeks: 'Weeks 9–12', theme: 'Capstone simulation and certification' },
] as const;

// The data has no week titles: the lead clause of `youCover` becomes the title, the rest the description.
const splitWeek = (week: ScheduleWeek) => {
  const match = week.youCover.match(/^(.+?)(?:; |\. | — |: )(.+)$/);
  if (!match) return { title: week.youCover.replace(/\.$/, ''), description: '' };
  const rest = match[2].trim();
  return { title: match[1], description: rest.charAt(0).toUpperCase() + rest.slice(1) };
};

// Twelve-week syllabus as three month dropdowns. Only one month is open at a time; the first starts open.
export const SyllabusAccordion: React.FC<{ schedule: ProgramDetail['schedule'] }> = ({ schedule }) => {
  const [openKey, setOpenKey] = useState<string | null>('month1');

  return (
    <div className="squircle-frame overflow-hidden border border-stone-light bg-white shadow-sm">
      {MONTHS.map((month, i) => {
        const isOpen = openKey === month.key;
        const panelId = `syllabus-${month.key}`;
        return (
          <section key={month.key} className={i > 0 ? 'border-t border-stone-light' : undefined}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenKey(isOpen ? null : month.key)}
                className={`group flex w-full items-center gap-6 px-6 py-5 text-left cursor-pointer transition-colors md:px-8 ${
                  isOpen ? 'bg-ivory-warm/50' : 'hover:bg-ivory-warm/40'
                }`}
              >
                <span className="flex-1 space-y-1">
                  <span className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-display text-2xl text-graphite leading-[1.1]">{month.label}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-crimson">{month.weeks}</span>
                  </span>
                  <span className="block text-sm text-graphite/70">{month.theme}</span>
                </span>
                <span
                  aria-hidden
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-brand ${
                    isOpen
                      ? 'rotate-45 border-crimson bg-crimson text-ivory'
                      : 'border-crimson/30 text-crimson group-hover:border-crimson'
                  }`}
                >
                  <Plus className="size-4" strokeWidth={2} />
                </span>
              </button>
            </h3>

            {/* grid-rows 0fr → 1fr gives a smooth height animation without measuring. */}
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-400 ease-brand ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <ol className="divide-y divide-stone-light/70 border-t border-stone-light/70 px-6 md:px-8">
                  {schedule[month.key].map((week) => {
                    const { title, description } = splitWeek(week);
                    return (
                      <li key={week.week} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-crimson sm:pt-0.5">
                          Week {String(week.week).padStart(2, '0')}
                        </span>
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-graphite leading-snug">{title}</h4>
                          {description && <p className="text-sm text-graphite/75 leading-relaxed">{description}</p>}
                          <p className="text-sm text-graphite/60 italic leading-relaxed">
                            <span className="not-italic font-bold text-crimson/80">Expert sessions: </span>
                            {week.expertSessions}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
