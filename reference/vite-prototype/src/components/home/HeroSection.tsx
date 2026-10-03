import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { RotatingLine } from '@/components/ui/RotatingLine';
import { PERSISTENT_CTA, TRUST_STRIP_ITEMS } from '@/data/siteData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-12 pb-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] overflow-hidden border-b border-[#171717]/15 bg-grid-pattern">
      {/* Background linework geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <circle cx="500" cy="500" r="400" stroke="#171717" strokeWidth="0.5" strokeDasharray="8 4" />
          <circle cx="500" cy="500" r="250" stroke="#7D2419" strokeWidth="1" />
          <path d="M100 500 H900 M500 100 V900" stroke="#171717" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Top Metadata / Eyebrow */}
      <div className="max-w-[1536px] mx-auto w-full z-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#171717]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#7D2419]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7D2419] font-mono">
              THE TRAINING DIVISION OF INVICTA-TECH
            </span>
          </div>
          <RotatingLine />
        </div>
      </div>

      {/* Main Narrative Hero Content */}
      <div className="max-w-[1536px] mx-auto w-full z-10 my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#171717] tracking-tight"
          >
            The people who deliver Saudi Arabia's giga-projects <br />
            <span className="italic font-light text-[#7D2419]">now teach the roles</span> that build them.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#3D352A] font-sans max-w-2xl leading-relaxed"
          >
            Four role certifications. Three career tiers. Twelve weeks. Every exercise runs on data derived from real projects, every session is taught by someone who was on a live project that week — and the panel that certifies you is the panel that hires for these roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button to={PERSISTENT_CTA.primary.href} size="lg" variant="primary">
              {PERSISTENT_CTA.primary.label}
            </Button>
            <Button to="/programs" size="lg" variant="outline" className="border-[#171717] text-[#171717] hover:bg-[#171717]/10">
              See the Programs
            </Button>
          </motion.div>
        </div>

        {/* Abstract Architectural Linework Visual */}
        <div className="lg:col-span-4 z-10">
          <div className="relative aspect-square w-full border-2 border-[#171717] bg-[#F7F2E8] p-6 flex flex-col justify-between overflow-hidden shadow-lg">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#171717] font-bold tracking-widest border-b border-[#171717]/15 pb-2">
              <span>FEDERATED_GEOMETRY_01</span>
              <span className="text-[#7D2419]">ISO 19650</span>
            </div>

            <div className="my-auto py-6 flex items-center justify-center">
              <svg className="w-full h-48" viewBox="0 0 200 200" fill="none">
                <rect x="20" y="20" width="160" height="160" stroke="#171717" strokeWidth="1" strokeDasharray="4 2" />
                <path d="M20 20 L180 180 M180 20 L20 180" stroke="#171717" strokeWidth="0.5" opacity="0.4" />
                <rect x="50" y="50" width="100" height="100" stroke="#7D2419" strokeWidth="2" />
                <circle cx="100" cy="100" r="30" stroke="#171717" strokeWidth="1.5" />
                <path d="M100 20 V180 M20 100 H180" stroke="#7D2419" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>

            <div className="text-[10px] font-mono text-[#171717] font-semibold flex justify-between pt-2 border-t border-[#171717]/15">
              <span>PROVENANCE: INVICTA-TECH ADVISORY</span>
              <span className="text-[#7D2419]">LIVE DATA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Strip */}
      <div className="max-w-[1536px] mx-auto w-full z-10 pt-6 border-t border-[#171717]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#3D352A]">
        <div className="uppercase tracking-wider text-[#171717] font-bold">PROJECT SECTORS:</div>
        <div className="flex flex-wrap items-center gap-3">
          {TRUST_STRIP_ITEMS.map((sector, i) => (
            <span key={sector} className="flex items-center gap-2 font-medium">
              <span className="text-[#171717]">{sector}</span>
              {i < TRUST_STRIP_ITEMS.length - 1 && <span className="text-[#7D2419] font-bold">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
