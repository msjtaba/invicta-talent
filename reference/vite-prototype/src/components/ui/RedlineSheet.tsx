import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, FileCheck, Layers, RefreshCw } from 'lucide-react';

export const RedlineSheet: React.FC = () => {
  const [step, setStep] = useState<'draft' | 'review' | 'redline' | 'revision' | 'accepted'>('draft');

  const steps = [
    { id: 'draft', label: '01 DRAFT' },
    { id: 'review', label: '02 REVIEW' },
    { id: 'redline', label: '03 REDLINE' },
    { id: 'revision', label: '04 REVISION' },
    { id: 'accepted', label: '05 ACCEPTED' },
  ] as const;

  return (
    <div className="border border-[#E8DDC8]/15 bg-[#0B0B0A] p-6 text-[#E8DDC8] relative overflow-hidden font-mono text-xs">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#E8DDC8]/10">
        <div>
          <span className="text-[#B9AD99] block text-[10px] tracking-widest uppercase">DELIVERABLE QA INSPECTOR</span>
          <span className="text-sm font-sans font-semibold tracking-wide text-[#E8DDC8]">
            PROJECT_PKG_TERMINAL_WING_SEC_B.DWG
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#171717] p-1 border border-[#E8DDC8]/10">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`px-2.5 py-1 text-[11px] font-sans tracking-wider transition-all ${
                step === s.id
                  ? 'bg-[#7D2419] text-[#E8DDC8] font-medium'
                  : 'text-[#B9AD99] hover:text-[#E8DDC8]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Drawing Sheet */}
      <div className="relative aspect-[16/9] w-full bg-[#12161A] border border-[#E8DDC8]/20 p-6 flex flex-col justify-between overflow-hidden bg-grid-pattern">
        {/* Title Block Metadata */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-[10px] text-[#B9AD99] uppercase tracking-widest">DISCIPLINE: STRUCTURAL / MEP</div>
            <div className="text-xs text-[#E8DDC8] font-bold">DRAWING NO: GCC-AV-SEC-402</div>
            <div className="text-[10px] text-[#B9AD99]">SCALE 1:50 | LOD 350 MODEL EXTRACT</div>
          </div>
          <div className="text-right space-y-1">
            <div className="text-[10px] text-[#B9AD99]">STAGE: FRIDAY REVIEW</div>
            <div className="text-xs text-[#7D2419] font-bold">STATUS: {step.toUpperCase()}</div>
          </div>
        </div>

        {/* Vector Linework Mockup */}
        <div className="relative my-4 h-48 w-full flex items-center justify-center">
          <svg className="w-full h-full opacity-60" viewBox="0 0 500 200" fill="none">
            {/* Grid & Section Linework */}
            <path d="M50 30 H450 M50 100 H450 M50 170 H450" stroke="#E8DDC8" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M100 20 V180 M250 20 V180 M400 20 V180" stroke="#E8DDC8" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Concrete Slab & Beam Outlines */}
            <rect x="80" y="50" width="340" height="20" fill="#E8DDC8" fillOpacity="0.1" stroke="#E8DDC8" strokeWidth="1.5" />
            <rect x="180" y="70" width="40" height="60" stroke="#E8DDC8" strokeWidth="1.5" />
            <rect x="280" y="70" width="40" height="60" stroke="#E8DDC8" strokeWidth="1.5" />

            {/* Ductwork */}
            <path d="M90 110 H410" stroke="#5B7C99" strokeWidth="8" strokeLinecap="square" />
            
            {/* Animated Redline Annotation overlay when in redline/review */}
            {(step === 'redline' || step === 'review') && (
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Red Annotation cloud */}
                <circle cx="200" cy="110" r="35" stroke="#7D2419" strokeWidth="2" strokeDasharray="6 3" fill="#7D2419" fillOpacity="0.15" />
                <path d="M235 110 L280 140 H340" stroke="#7D2419" strokeWidth="1.5" />
                <text x="285" y="135" fill="#E8DDC8" fontSize="10" fontFamily="sans-serif">REV-02: INSUFFICIENT HEADROOM (CLASH)</text>
              </motion.g>
            )}

            {/* Resolved state in Revision / Accepted */}
            {(step === 'revision' || step === 'accepted') && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <path d="M90 140 H410" stroke="#7D2419" strokeWidth="6" strokeLinecap="square" />
                <text x="285" y="155" fill="#E8DDC8" fontSize="10" fontFamily="sans-serif">ROUTED BELOW BEAM PENETRATION (VERIFIED)</text>
              </motion.g>
            )}
          </svg>
        </div>

        {/* Bottom Status stamp */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8DDC8]/10">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#B9AD99]" />
            <span className="text-[11px] text-[#B9AD99] uppercase font-sans">
              INVICTA-TECH QA STAMP
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center gap-2"
            >
              {step === 'accepted' ? (
                <span className="inline-flex items-center gap-1.5 bg-[#7D2419] text-[#E8DDC8] px-3 py-1 text-xs font-sans font-semibold tracking-widest uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ACCEPTED
                </span>
              ) : step === 'redline' ? (
                <span className="inline-flex items-center gap-1.5 bg-[#7D2419]/20 border border-[#7D2419] text-[#E8DDC8] px-3 py-1 text-xs font-sans font-semibold tracking-widest uppercase">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#B63824]" /> REDLINE ISSUED
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-[#171717] border border-[#E8DDC8]/20 text-[#B9AD99] px-3 py-1 text-xs font-sans tracking-widest uppercase">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> IN PROGRESS ({step})
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
