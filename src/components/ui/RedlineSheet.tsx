'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Layers, RefreshCw } from 'lucide-react';

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
    <div className="border border-ivory/12 bg-black-soft rounded-md p-6 text-ivory relative overflow-hidden text-xs">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-ivory/12">
        <div>
          <span className="text-stone-light block text-[10px] tracking-widest uppercase">DELIVERABLE QA INSPECTOR</span>
          <span className="text-sm font-sans font-semibold tracking-wide text-ivory">
            PROJECT_PKG_TERMINAL_WING_SEC_B.DWG
          </span>
        </div>
        <div className="flex items-center gap-1 bg-graphite p-1 border border-ivory/12">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`px-2.5 py-1 text-[11px] font-sans tracking-wider transition-all ${
                step === s.id
                  ? 'bg-crimson text-white font-bold rounded-sm'
                  : 'text-stone-light hover:text-gold'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Simulated Drawing Sheet */}
      <div className="relative aspect-[16/9] w-full bg-graphite-deep border border-ivory/12 p-6 flex flex-col justify-between overflow-hidden">
        {/* Title Block Metadata */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-[10px] text-stone-light uppercase tracking-widest">DISCIPLINE: STRUCTURAL / MEP</div>
            <div className="text-xs text-ivory font-bold">DRAWING NO: GCC-AV-SEC-402</div>
            <div className="text-[10px] text-stone-light">SCALE 1:50 | LOD 350 MODEL EXTRACT</div>
          </div>
          <div className="text-right space-y-1">
            <div className="text-[10px] text-stone-light">STAGE: FRIDAY REVIEW</div>
            <div className="text-xs text-gold font-bold">STATUS: {step.toUpperCase()}</div>
          </div>
        </div>

        {/* Vector Linework Mockup */}
        <div className="relative my-4 h-48 w-full flex items-center justify-center">
          <svg className="w-full h-full opacity-60" viewBox="0 0 500 200" fill="none">
            {/* Grid & Section Linework */}
            <path d="M50 30 H450 M50 100 H450 M50 170 H450" stroke="#F3EDE2" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M100 20 V180 M250 20 V180 M400 20 V180" stroke="#F3EDE2" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Concrete Slab & Beam Outlines */}
            <rect x="80" y="50" width="340" height="20" fill="#F3EDE2" fillOpacity="0.1" stroke="#F3EDE2" strokeWidth="1.5" />
            <rect x="180" y="70" width="40" height="60" stroke="#F3EDE2" strokeWidth="1.5" />
            <rect x="280" y="70" width="40" height="60" stroke="#F3EDE2" strokeWidth="1.5" />

            {/* Ductwork */}
            <path d="M90 110 H410" stroke="#8C877E" strokeWidth="8" strokeLinecap="square" />
            
            {/* Animated Redline Annotation overlay when in redline/review */}
            {(step === 'redline' || step === 'review') && (
              <motion.g
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Red Annotation cloud */}
                <circle cx="200" cy="110" r="35" stroke="#C49A52" strokeWidth="2" strokeDasharray="6 3" fill="#6B0606" fillOpacity="0.35" />
                <path d="M235 110 L280 140 H340" stroke="#C49A52" strokeWidth="1.5" />
                <text x="285" y="135" fill="#F3EDE2" fontSize="10" fontFamily="Arial, sans-serif">REV-02: INSUFFICIENT HEADROOM (CLASH)</text>
              </motion.g>
            )}

            {/* Resolved state in Revision / Accepted */}
            {(step === 'revision' || step === 'accepted') && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <path d="M90 140 H410" stroke="#C49A52" strokeWidth="6" strokeLinecap="square" />
                <text x="285" y="155" fill="#F3EDE2" fontSize="10" fontFamily="Arial, sans-serif">ROUTED BELOW BEAM PENETRATION (VERIFIED)</text>
              </motion.g>
            )}
          </svg>
        </div>

        {/* Bottom Status stamp */}
        <div className="flex items-center justify-between pt-3 border-t border-ivory/12">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-stone-light" />
            <span className="text-[11px] text-stone-light uppercase font-sans">
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
                <span className="inline-flex items-center gap-1.5 bg-crimson text-white px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ACCEPTED
                </span>
              ) : step === 'redline' ? (
                <span className="inline-flex items-center gap-1.5 bg-crimson/40 border border-gold text-ivory px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
                  <AlertTriangle className="w-3.5 h-3.5 text-gold" /> REDLINE ISSUED
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-ivory/8 text-stone-light px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase">
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
