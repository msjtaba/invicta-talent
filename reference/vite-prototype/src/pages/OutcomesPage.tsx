import React, { useState } from 'react';
import { GRADUATE_ARTEFACTS } from '@/data/outcomeData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { FileText, CheckCircle2 } from 'lucide-react';

export const OutcomesPage: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('ALL');

  const filtered = selectedDiscipline === 'ALL'
    ? GRADUATE_ARTEFACTS
    : GRADUATE_ARTEFACTS.filter(a => a.discipline === selectedDiscipline);

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            GRADUATE OUTCOMES & PORTFOLIO ARCHIVE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.outcomesHeadline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            Anyone can publish a quote from a happy student. Here is the work instead: anonymised capstone deliverables from graduating cohorts — model views, drawing sheets, clash matrices, QTO reports, coordination reports and BEP extracts.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between font-mono text-xs border-b border-[#171717]/15 pb-4">
          <span className="text-[#4A4235] font-bold">FILTER CAPSTONE ARTEFACTS:</span>
          <div className="flex gap-2">
            {['ALL', 'Coordination', 'ARC', 'STR', 'MEP', 'Management'].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDiscipline(d)}
                className={`px-3 py-1 cursor-pointer transition-colors font-semibold ${
                  selectedDiscipline === d ? 'bg-[#7D2419] text-[#E8DDC8]' : 'bg-[#FFFDF9] border border-[#171717]/15 text-[#171717]'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <div key={art.id} className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-[#7F725F]">
                  <span className="text-[#7D2419] font-bold">{art.programCode}</span>
                  <span className="font-semibold">{art.tier} Tier</span>
                </div>

                <div className="aspect-[16/10] bg-[#F7F2E8] border border-[#171717]/15 p-4 flex flex-col justify-between bg-grid-pattern">
                  <div className="flex justify-between text-[10px] font-mono text-[#4A4235] font-semibold">
                    <span>{art.artefactType.toUpperCase()}</span>
                    <span className="text-[#7D2419] font-bold">{art.status}</span>
                  </div>
                  <div className="my-auto text-center space-y-2 py-2">
                    <FileText className="w-8 h-8 text-[#7D2419] mx-auto" />
                    <div className="text-xs font-mono text-[#171717] font-semibold">{art.title}</div>
                  </div>
                  <div className="text-[10px] font-mono text-[#4A4235] text-center pt-2 border-t border-[#171717]/10 font-semibold">
                    DERIVED & ANONYMISED PROJECT DATASET
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#171717] font-bold">BRIEF: {art.brief}</div>
                  <blockquote className="text-xs italic text-[#4A4235] font-serif border-l-2 border-[#7D2419] pl-3 py-1">
                    {art.panelComment}
                  </blockquote>
                </div>
              </div>

              <div className="pt-3 border-t border-[#171717]/15 flex items-center justify-between text-xs font-mono text-[#4A4235]">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7D2419]" /> PANEL ACCEPTED
                </span>
                <span className="text-[#7D2419] font-bold">{art.discipline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
