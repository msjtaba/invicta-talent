'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ROLE_MATRIX, MatrixCellDetail } from '@/data/matrixData';
import { OutlineButton } from '@/components/ui/OutlineButton';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const TIERS = [
  { key: 'foundation', label: 'Foundation (F)' },
  { key: 'professional', label: 'Professional (P)' },
  { key: 'advanced', label: 'Advanced (A)' },
] as const;

// Frame → header → panel → key/value table, after the `table` component in components.md.
export const RoleMatrixSection: React.FC = () => {
  const [activeCell, setActiveCell] = useState<MatrixCellDetail | null>(null);
  const panelRef = useRef<HTMLElement>(null);

  // While the panel is open: a click outside it (other than on another cell) or Esc closes it.
  useEffect(() => {
    if (!activeCell) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element;
      if (panelRef.current?.contains(target) || target.closest('[data-matrix-cell]')) return;
      setActiveCell(null);
    };
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setActiveCell(null);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeCell]);

  // Applied to the <td>, not the button, so the hover fills the cell edge to edge.
  const cellClasses = (cell: MatrixCellDetail) =>
    activeCell?.code === cell.code
      ? 'bg-crimson text-ivory'
      : 'bg-white text-graphite hover:bg-ivory-warm';

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory-warm text-graphite border-b border-stone-light relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
            FOUR ROLES. THREE TIERS.
          </h2>
          <p className="text-base text-graphite/75 font-sans font-medium">
            No generic classroom. Select your current level to inspect the exact entry requirements, tools, capstone brief, and outcome responsibilities.
          </p>
        </div>

        {/* Frame */}
        <div className="squircle-frame border border-stone-light bg-ivory p-1.5 shadow-sm">
          {/* Frame header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3">
            <div className="text-sm font-bold text-graphite">Role / Tier Matrix</div>
            <span className="rounded-sm border border-stone-light px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-crimson">
              4 roles × 3 tiers
            </span>
          </div>

          {/* Frame panel — desktop table */}
          <div className="hidden lg:block squircle-panel overflow-hidden border border-stone-light bg-white">
            {/* h-px + h-full lets the cell buttons stretch to the full row height. */}
            <table className="h-px w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-stone-light [&>:not(:last-child)]:border-r *:border-ivory/15">
                  <th className="w-64 bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-ivory">
                    Role
                  </th>
                  {TIERS.map((t) => (
                    <th key={t.key} className="bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-ivory">
                      {t.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROLE_MATRIX.map((row) => (
                  <tr
                    key={row.code}
                    className="border-b border-stone-light last:border-b-0 [&>:not(:last-child)]:border-r *:border-stone-light"
                  >
                    <td className="bg-crimson px-5 py-4 align-top">
                      <span className="text-[11px] text-ivory-warm/75 font-bold block">{row.code}</span>
                      <h3 className="font-display text-2xl text-ivory mt-1 leading-[1.1]">{row.roleName}</h3>
                      <Link
                        href={`/programs/${row.slug}`}
                        className="text-xs text-ivory-warm font-bold hover:underline inline-flex items-center gap-1 mt-3"
                      >
                        View Track Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                    {TIERS.map((t) => {
                      const cell = row[t.key];
                      const active = activeCell?.code === cell.code;
                      return (
                        <td key={t.key} className={`h-full p-0 align-top transition-colors ${cellClasses(cell)}`}>
                          <button
                            data-matrix-cell
                            onClick={() => setActiveCell(cell)}
                            aria-pressed={active}
                            className="block h-full w-full px-5 py-4 text-left cursor-pointer"
                          >
                            <span className={`flex justify-between text-[11px] mb-2 font-bold ${active ? 'text-ivory/80' : 'text-graphite/60'}`}>
                              <span>{cell.code}</span>
                              <span className={active ? 'text-ivory' : 'text-crimson'}>INSPECT →</span>
                            </span>
                            <span className="block text-sm leading-relaxed">{cell.audience}</span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Frame panels — mobile: one key/value table per role */}
          <div className="lg:hidden space-y-3">
            {ROLE_MATRIX.map((row) => (
              <div key={row.code} className="squircle-panel overflow-hidden border border-stone-light bg-white">
                <div className="border-b border-stone-light bg-crimson px-4 py-3">
                  <span className="text-xs text-ivory-warm/75 font-bold">{row.code}</span>
                  <h3 className="font-display text-2xl text-ivory leading-[1.1]">{row.roleName}</h3>
                </div>
                <table className="h-px w-full border-collapse text-left">
                  <tbody>
                    {TIERS.map((t) => {
                      const cell = row[t.key];
                      return (
                        <tr
                          key={t.key}
                          className="border-b border-stone-light last:border-b-0 [&>:not(:last-child)]:border-r *:border-stone-light"
                        >
                          <th className="w-28 bg-crimson px-3 py-2 text-xs font-bold uppercase tracking-wider text-ivory align-top">
                            {cell.tier}
                          </th>
                          <td className={`h-full p-0 transition-colors ${cellClasses(cell)}`}>
                            <button
                              data-matrix-cell
                              onClick={() => setActiveCell(cell)}
                              className="block h-full w-full px-3 py-2 text-left text-sm"
                            >
                              {cell.audience}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Selected cell detail — side panel over the page, from the right edge */}
        <AnimatePresence>
          {activeCell && (
            <>
              {/* Visual dim only: clicks pass through so another cell can be picked directly. */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none fixed inset-0 z-60 bg-crimson-deepest/20"
              />
              <motion.aside
                ref={panelRef}
                role="dialog"
                aria-label={`${activeCell.role} — ${activeCell.tier} tier`}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="fixed inset-y-0 right-0 z-70 flex w-full max-w-md flex-col bg-ivory text-graphite shadow-lg"
              >
                <div className="bg-crimson px-7 pt-7 pb-6 text-ivory">
                  <div className="flex items-start justify-between gap-4">
                    <span className="border border-ivory/40 px-2.5 py-0.5 text-xs font-bold tracking-[0.14em]">{activeCell.code}</span>
                    <button
                      type="button"
                      onClick={() => setActiveCell(null)}
                      className="-m-1 p-1 text-ivory/70 cursor-pointer transition-colors hover:text-ivory"
                      aria-label="Close details"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                  <h3 className="mt-5 font-display text-3xl leading-[1.05]">{activeCell.role}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ivory-warm/80">{activeCell.tier} tier</p>
                </div>

                {/* Keyed so the body fades when switching cells while open */}
                <motion.div
                  key={activeCell.code}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 overflow-y-auto px-7"
                >
                  <dl className="divide-y divide-crimson/10">
                    {[
                      ['Audience', activeCell.audience],
                      ['Entry requirement', activeCell.entryRequirement],
                      ['Role outcome', activeCell.roleOutcome],
                      ['Capstone brief', activeCell.capstoneSummary],
                    ].map(([label, value]) => (
                      <div key={label} className="space-y-1.5 py-5">
                        <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-crimson">{label}</dt>
                        <dd className="text-sm leading-relaxed text-graphite">{value}</dd>
                      </div>
                    ))}
                    <div className="space-y-2 py-5">
                      <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-crimson">Tools</dt>
                      <dd className="flex flex-wrap gap-2">
                        {activeCell.tools.map((tool) => (
                          <span key={tool} className="bg-ivory-warm px-2.5 py-1 text-xs font-bold text-crimson-deepest">
                            {tool}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </motion.div>

                <div className="border-t border-crimson/15 bg-ivory-warm/60 px-7 py-5">
                  <OutlineButton to="/find-your-track">Apply for {activeCell.code}</OutlineButton>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
