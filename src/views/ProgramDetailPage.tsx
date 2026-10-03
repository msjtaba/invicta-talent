import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { PROGRAMS_DATA } from '@/data/programData';
import { CtaButton } from '@/components/ui/CtaButton';
import { SyllabusAccordion } from '@/components/programs/SyllabusAccordion';

const GLANCE = [
  ['Duration', '12 Weeks'],
  ['Expert sessions', '2 Sessions / Week'],
  ['Lab drills', '5 Days / Week'],
  ['Deliverables', '10 Graded Fridays'],
  ['Pass mark', '70% Overall'],
] as const;

export const ProgramDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const program = slug ? PROGRAMS_DATA[slug] : undefined;

  if (!program) {
    redirect("/programs");
  }

  return (
    <div className="py-12 px-6 md:px-12 bg-ivory text-graphite space-y-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Breadcrumb */}
        <div className="text-xs text-graphite/75 flex items-center gap-2 font-semibold">
          <Link href="/programs" className="hover:text-crimson">PROGRAMS</Link>
          <span>/</span>
          <span className="text-crimson font-bold">{program.code}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-stone-light pb-12">
          <div className="lg:col-span-8 space-y-6">
            <span className="eyebrow text-crimson">
              {program.eyebrow}
            </span>

            <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
              {program.h1}
            </h1>

            <p className="text-base sm:text-lg text-graphite/80 font-sans leading-relaxed font-medium">
              {program.sub}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
              <CtaButton to="/find-your-track">Apply for {program.code}</CtaButton>
              <CtaButton to="/admissions">Download Curriculum PDF</CtaButton>
            </div>
          </div>

          {/* Track at a glance */}
          <div className="lg:col-span-4 p-5 border border-stone-light bg-white shadow-sm rounded-md">
            <div className="text-xs text-crimson font-bold uppercase tracking-[0.18em] pb-3 border-b border-crimson/20">
              Track at a glance
            </div>
            <dl className="divide-y divide-stone-light/60">
              {GLANCE.map(([label, value], i) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-2.5 last:pb-0">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-graphite/55">{label}</dt>
                  <dd className={`text-sm font-bold text-right ${i === GLANCE.length - 1 ? 'text-crimson' : 'text-graphite'}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Who it's for */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">Who it&apos;s for</h2>
          <div className="squircle-frame overflow-hidden border border-stone-light/80 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm">
                <thead className="bg-ivory-warm/50 text-xs text-crimson font-bold uppercase tracking-[0.1em]">
                  <tr className="border-b border-crimson/25">
                    <th className="px-6 py-4 w-48">Tier</th>
                    <th className="px-6 py-4">Audience</th>
                    <th className="px-6 py-4">Entry Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-light/60 text-graphite">
                  {program.whoItIsFor.map((item) => (
                    <tr key={item.tier} className="transition-colors hover:bg-ivory-warm/50">
                      <td className="px-6 py-4 align-top font-bold text-crimson whitespace-nowrap">
                        {item.tierName} ({item.tier})
                      </td>
                      <td className="px-6 py-4 align-top">{item.audience}</td>
                      <td className="px-6 py-4 align-top text-graphite/80">{item.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* The job you'll be able to do — numbered list with a crimson accent line */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">The job you&apos;ll be able to do</h2>
          <p className="text-sm text-graphite/75 font-semibold">On the Monday after graduation, you will be able to perform these responsibilities:</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
            {program.jobOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-5 border-t border-stone-light py-6">
                <span className="font-display text-3xl text-crimson leading-none w-10 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="border-l-2 border-crimson/30 pl-5 text-base text-graphite leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Twelve weeks syllabus */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">Twelve weeks breakdown</h2>
          <SyllabusAccordion schedule={program.schedule} />
        </div>

        {/* Tools Covered & Apply CTA */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 pt-8 border-t border-stone-light">
          <div className="space-y-1 text-sm">
            <span className="text-graphite/75 font-bold uppercase">TOOLS EXAMINED:</span>
            <div className="text-base text-graphite font-bold">{program.tools.join(' · ')}</div>
          </div>
          <CtaButton to="/find-your-track" className="shrink-0">Apply for {program.code} Intake</CtaButton>
        </div>
      </div>
    </div>
  );
};
