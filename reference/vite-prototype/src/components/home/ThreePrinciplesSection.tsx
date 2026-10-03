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
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-12">
        <div className="border-b border-[#171717]/15 pb-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold">
            04 — THE THREE PRINCIPLES
          </span>
          <span className="text-xs font-mono text-[#7F725F]">ACADEMY PEDAGOGY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.num}
              className="p-8 border border-[#171717]/15 bg-[#F7F2E8] space-y-6 hover:border-[#7D2419] transition-all group relative overflow-hidden shadow-sm"
            >
              <div className="w-full h-1 bg-[#7D2419]/30 group-hover:bg-[#7D2419] transition-colors absolute top-0 left-0" />
              <div className="text-xs font-mono text-[#7D2419] font-bold">{p.num}</div>
              <h3 className="font-serif-editorial text-2xl font-semibold text-[#171717] tracking-wide group-hover:text-[#7D2419] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#4A4235] font-sans leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
