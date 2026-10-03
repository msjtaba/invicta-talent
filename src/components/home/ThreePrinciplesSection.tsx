import React from 'react';

export const ThreePrinciplesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'LEARN THROUGH PROJECT',
      desc: 'You work on a dataset derived from a real GCC project package — airport terminal wing, hospitality tower, hospital block. Every exercise is anchored to live project deliverables.',
    },
    {
      num: '02',
      title: 'WORK LIKE THE ROLE',
      desc: 'You do not complete textbook exercises. You receive scope packages, BEP extracts, and deadline schedules, surviving weekly redline revision cycles under senior practitioner review.',
    },
    {
      num: '03',
      title: 'LEAVE WITH PROOF',
      desc: 'You leave with a verified portfolio of technical deliverables and an anonymised capstone accepted by a hiring panel — evidence that survives any reference check.',
    },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="border-b border-stone-light pb-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-crimson font-bold">
            04 — THE THREE PRINCIPLES
          </span>
          <span className="text-xs text-graphite/75">ACADEMY PEDAGOGY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.num}
              className="p-8 border border-stone-light bg-ivory-warm space-y-6 hover:border-crimson transition-all group relative overflow-hidden shadow-sm rounded-md"
            >
              <div className="w-full h-1 bg-crimson/30 group-hover:bg-crimson transition-colors absolute top-0 left-0" />
              <div className="text-xs text-crimson font-bold">{p.num}</div>
              <h3 className="font-display text-2xl text-graphite group-hover:text-crimson transition-colors leading-[1.1]">
                {p.title}
              </h3>
              <p className="text-sm text-graphite/75 font-sans leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
