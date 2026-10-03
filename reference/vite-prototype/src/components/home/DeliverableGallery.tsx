import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GRADUATE_ARTEFACTS } from '@/data/outcomeData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { FileText, CheckCircle2, Eye } from 'lucide-react';

export const DeliverableGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Coordination', 'ARC', 'MEP', 'Management'];

  const filteredArtefacts = selectedCategory === 'ALL'
    ? GRADUATE_ARTEFACTS
    : GRADUATE_ARTEFACTS.filter(a => a.discipline === selectedCategory);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171717]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
              05 — DELIVERABLE ARCHIVE
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717]">
              {GLOBAL_MICROCOPY.deliverablesHeadline}
            </h2>
            <p className="text-sm text-[#4A4235] font-sans max-w-xl font-medium">
              Anonymised capstone artefacts produced by candidates under live expert panel review. Work, not testimonials.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#7D2419] text-[#E8DDC8] border-[#7D2419] font-bold'
                    : 'bg-[#F7F2E8] text-[#171717] border-[#171717]/20 hover:border-[#7D2419]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtefacts.map((art) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#171717]/15 bg-[#F7F2E8] p-6 space-y-5 group hover:border-[#7D2419] transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#7F725F]">
                  <span className="text-[#7D2419] font-bold">{art.programCode}</span>
                  <span className="font-semibold">TIER {art.tier[0]}</span>
                </div>

                <div className="aspect-[16/10] bg-[#FFFDF9] border border-[#171717]/15 p-4 relative flex flex-col justify-between overflow-hidden bg-grid-pattern group-hover:border-[#7D2419] transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#4A4235] font-semibold">
                    <span>{art.artefactType.toUpperCase()}</span>
                    <span className="text-[#7D2419] font-bold">{art.status}</span>
                  </div>

                  <div className="my-auto text-center space-y-2 py-4">
                    <FileText className="w-8 h-8 text-[#7D2419] mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-mono text-[#171717] font-semibold leading-snug px-2">
                      {art.title}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#4A4235] pt-2 border-t border-[#171717]/10 font-medium">
                    <span>ANONYMISED DATASET</span>
                    <span className="flex items-center gap-1 text-[#7D2419] font-bold">
                      <Eye className="w-3 h-3 text-[#7D2419]" /> INSPECT
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#171717] font-bold uppercase">
                    BRIEF: {art.brief}
                  </div>
                  <blockquote className="text-xs italic text-[#4A4235] font-serif border-l-2 border-[#7D2419] pl-3 py-1">
                    {art.panelComment}
                  </blockquote>
                </div>
              </div>

              <div className="pt-3 border-t border-[#171717]/15 flex items-center justify-between text-xs font-mono text-[#4A4235]">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7D2419]" /> VERIFIED DELIVERABLE
                </span>
                <span className="text-[#7D2419] font-bold">{art.discipline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
