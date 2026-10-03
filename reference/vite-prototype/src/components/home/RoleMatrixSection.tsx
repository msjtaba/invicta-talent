import React, { useState } from 'react';
import { ROLE_MATRIX, MatrixCellDetail } from '@/data/matrixData';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export const RoleMatrixSection: React.FC = () => {
  const [activeCell, setActiveCell] = useState<MatrixCellDetail | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F2E8] text-[#171717] border-b border-[#171717]/15 bg-grid-pattern relative">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            06 — ROLE COMPETENCY MATRIX
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
            FOUR ROLES. THREE TIERS.
          </h2>
          <p className="text-base text-[#4A4235] font-sans font-medium">
            No generic classroom. Select your current level to inspect the exact entry requirements, tools, capstone brief, and outcome responsibilities.
          </p>
        </div>

        {/* 4x3 Grid Table (Desktop View) */}
        <div className="hidden lg:block border border-[#171717]/20 bg-[#E8DDC8] shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-[#DFCFA8]/60 border-b border-[#171717]/20 font-mono text-xs text-[#171717]">
            <div className="p-4 border-r border-[#171717]/15 font-bold uppercase tracking-wider text-[#7D2419]">
              ROLE / TIER MATRIX
            </div>
            <div className="p-4 border-r border-[#171717]/15 font-bold uppercase tracking-wider text-center">
              FOUNDATION (F)
            </div>
            <div className="p-4 border-r border-[#171717]/15 font-bold uppercase tracking-wider text-center">
              PROFESSIONAL (P)
            </div>
            <div className="p-4 font-bold uppercase tracking-wider text-center">
              ADVANCED (A)
            </div>
          </div>

          {/* Matrix Rows */}
          {ROLE_MATRIX.map((row) => (
            <div key={row.code} className="grid grid-cols-4 border-b border-[#171717]/15 last:border-b-0">
              {/* Role Title Column */}
              <div className="p-6 border-r border-[#171717]/15 bg-[#F2E5CE]/50 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#7D2419] font-bold block">{row.code}</span>
                  <h3 className="font-serif-editorial text-2xl font-semibold text-[#171717] mt-1">
                    {row.roleName}
                  </h3>
                </div>
                <a
                  href={`/programs/${row.slug}`}
                  className="text-xs font-mono text-[#7D2419] font-bold hover:underline flex items-center gap-1 mt-4 transition-colors"
                >
                  View Track Details <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Foundation Cell */}
              <div
                onClick={() => setActiveCell(row.foundation)}
                className={`p-6 border-r border-[#171717]/15 cursor-pointer transition-all ${
                  activeCell?.code === row.foundation.code
                    ? 'bg-[#7D2419] text-[#E8DDC8] font-medium shadow-md'
                    : 'bg-[#FFFDF9] hover:bg-[#F7F2E8] hover:border-[#7D2419]'
                }`}
              >
                <div className={`flex justify-between text-[10px] font-mono mb-2 ${activeCell?.code === row.foundation.code ? 'text-[#E8DDC8]/80' : 'text-[#7F725F]'}`}>
                  <span>FOUNDATION</span>
                  <span className={activeCell?.code === row.foundation.code ? 'text-[#E8DDC8]' : 'text-[#7D2419] font-bold'}>INSPECT →</span>
                </div>
                <p className={`text-xs font-sans leading-relaxed ${activeCell?.code === row.foundation.code ? 'text-[#E8DDC8]' : 'text-[#171717]'}`}>
                  {row.foundation.audience}
                </p>
              </div>

              {/* Professional Cell */}
              <div
                onClick={() => setActiveCell(row.professional)}
                className={`p-6 border-r border-[#171717]/15 cursor-pointer transition-all ${
                  activeCell?.code === row.professional.code
                    ? 'bg-[#7D2419] text-[#E8DDC8] font-medium shadow-md'
                    : 'bg-[#FFFDF9] hover:bg-[#F7F2E8] hover:border-[#7D2419]'
                }`}
              >
                <div className={`flex justify-between text-[10px] font-mono mb-2 ${activeCell?.code === row.professional.code ? 'text-[#E8DDC8]/80' : 'text-[#7F725F]'}`}>
                  <span>PROFESSIONAL</span>
                  <span className={activeCell?.code === row.professional.code ? 'text-[#E8DDC8]' : 'text-[#7D2419] font-bold'}>INSPECT →</span>
                </div>
                <p className={`text-xs font-sans leading-relaxed ${activeCell?.code === row.professional.code ? 'text-[#E8DDC8]' : 'text-[#171717]'}`}>
                  {row.professional.audience}
                </p>
              </div>

              {/* Advanced Cell */}
              <div
                onClick={() => setActiveCell(row.advanced)}
                className={`p-6 cursor-pointer transition-all ${
                  activeCell?.code === row.advanced.code
                    ? 'bg-[#7D2419] text-[#E8DDC8] font-medium shadow-md'
                    : 'bg-[#FFFDF9] hover:bg-[#F7F2E8] hover:border-[#7D2419]'
                }`}
              >
                <div className={`flex justify-between text-[10px] font-mono mb-2 ${activeCell?.code === row.advanced.code ? 'text-[#E8DDC8]/80' : 'text-[#7F725F]'}`}>
                  <span>ADVANCED</span>
                  <span className={activeCell?.code === row.advanced.code ? 'text-[#E8DDC8]' : 'text-[#7D2419] font-bold'}>INSPECT →</span>
                </div>
                <p className={`text-xs font-sans leading-relaxed ${activeCell?.code === row.advanced.code ? 'text-[#E8DDC8]' : 'text-[#171717]'}`}>
                  {row.advanced.audience}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-6">
          {ROLE_MATRIX.map((row) => (
            <div key={row.code} className="border border-[#171717]/15 bg-[#FFFDF9] p-5 space-y-4 shadow-sm">
              <div className="border-b border-[#171717]/10 pb-3">
                <span className="text-xs font-mono text-[#7D2419] font-bold">{row.code}</span>
                <h3 className="font-serif-editorial text-2xl font-semibold text-[#171717]">
                  {row.roleName}
                </h3>
              </div>
              <div className="space-y-3">
                {[row.foundation, row.professional, row.advanced].map((cell) => (
                  <button
                    key={cell.code}
                    onClick={() => setActiveCell(cell)}
                    className="w-full text-left p-4 bg-[#F7F2E8] border border-[#171717]/15 hover:border-[#7D2419] transition-colors"
                  >
                    <div className="flex justify-between text-xs font-mono text-[#7D2419] font-bold mb-1">
                      <span>{cell.tier.toUpperCase()} TIER</span>
                      <span>INSPECT</span>
                    </div>
                    <div className="text-xs text-[#171717]">{cell.audience}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Cell Editorial Panel */}
        <AnimatePresence>
          {activeCell && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="border-2 border-[#7D2419] bg-[#FFFDF9] p-8 relative space-y-6 text-[#171717] shadow-2xl"
            >
              <button
                onClick={() => setActiveCell(null)}
                className="absolute top-6 right-6 text-[#171717]/60 hover:text-[#7D2419] p-1"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap items-center gap-4 border-b border-[#171717]/15 pb-4">
                <span className="bg-[#7D2419] text-[#E8DDC8] text-xs font-mono font-bold px-3 py-1">
                  {activeCell.code}
                </span>
                <span className="font-serif-editorial text-2xl text-[#171717]">
                  {activeCell.role} — <span className="italic">{activeCell.tier} Tier</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
                <div className="space-y-2">
                  <span className="font-mono text-[#7D2419] font-bold uppercase block text-[10px]">AUDIENCE</span>
                  <p className="text-[#171717]">{activeCell.audience}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[#7D2419] font-bold uppercase block text-[10px]">ENTRY REQUIREMENT</span>
                  <p className="text-[#171717]">{activeCell.entryRequirement}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[#7D2419] font-bold uppercase block text-[10px]">ROLE OUTCOME</span>
                  <p className="text-[#171717]">{activeCell.roleOutcome}</p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[#7D2419] font-bold uppercase block text-[10px]">CAPSTONE BRIEF</span>
                  <p className="text-[#171717]">{activeCell.capstoneSummary}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#171717]/15">
                <div className="flex items-center gap-2 font-mono text-xs text-[#4A4235]">
                  <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                  <span>Tools: {activeCell.tools.join(' · ')}</span>
                </div>
                <Button to="/find-your-track" variant="primary" size="sm">
                  Apply for {activeCell.code} →
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
