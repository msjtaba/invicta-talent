'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GRADUATE_ARTEFACTS } from '@/data/outcomeData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { FileText, ShieldCheck, Award } from 'lucide-react';

export const DeliverableGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Coordination', 'ARC', 'MEP', 'Management'];

  const filteredArtefacts = selectedCategory === 'ALL'
    ? GRADUATE_ARTEFACTS
    : GRADUATE_ARTEFACTS.filter(a => a.discipline === selectedCategory);

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-light pb-8">
          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-5xl text-graphite leading-[1.1]">
              {GLOBAL_MICROCOPY.deliverablesHeadline}
            </h2>
            <p className="text-base text-graphite/75 font-sans max-w-xl font-medium">
              Anonymised capstone artefacts produced by candidates under live expert panel review. Work, not testimonials.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm border cursor-pointer transition-colors duration-150 ${
                  selectedCategory === cat
                    ? 'bg-crimson text-white border-crimson'
                    : 'bg-ivory-warm text-graphite border-transparent hover:border-crimson'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* delArch cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtefacts.map((art) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="del-arch"
            >
              <div className="del-arch__top">
                <div className="del-arch__notch" />
                <div className="del-arch__icons">
                  <span className="del-arch__code">{art.programCode}</span>
                  <span className="del-arch__badges" aria-hidden>
                    <FileText strokeWidth={1.5} />
                    <ShieldCheck strokeWidth={1.5} />
                    {art.status === 'Passed with Distinction' && <Award strokeWidth={1.5} />}
                  </span>
                </div>
                <div className="mt-auto px-4 pb-4 pt-10 space-y-2">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-ivory-warm">
                    {art.artefactType}
                  </span>
                  <p className="text-sm text-ivory/90 leading-snug">{art.brief}</p>
                </div>
              </div>

              <div className="del-arch__bottom">
                <span className="del-arch__title">{art.title}</span>
                <blockquote className="mt-3 text-sm italic text-graphite/70 border-l-2 border-crimson/40 pl-3">
                  {art.panelComment}
                </blockquote>
                <div className="del-arch__row">
                  <div className="del-arch__item">
                    <span className="del-arch__big">{art.tier}</span>
                    <span className="del-arch__small">Tier</span>
                  </div>
                  <div className="del-arch__item">
                    <span className="del-arch__big">{art.discipline}</span>
                    <span className="del-arch__small">Discipline</span>
                  </div>
                  <div className="del-arch__item">
                    <span className="del-arch__big">{art.status === 'Accepted' ? 'Accepted' : 'Distinction'}</span>
                    <span className="del-arch__small">Panel</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
