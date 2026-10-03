'use client';

import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import type { ToolCertificate } from '@/data/toolData';
import { CtaButton } from '@/components/ui/CtaButton';

// Compact tool cards; clicking one opens its full details in a native <dialog>
// (Esc, focus trapping and the dimmed backdrop come from the browser).
export const ToolCertificateGrid: React.FC<{ tools: ToolCertificate[] }> = ({ tools }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Kept after closing so the content stays put while the close animation runs.
  const [tool, setTool] = useState<ToolCertificate | null>(null);

  const openTool = (next: ToolCertificate) => {
    // Render the new content before the dialog starts animating in.
    flushSync(() => setTool(next));
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
        {tools.map((t) => {
          const weeks = t.duration.match(/\d+/)?.[0] ?? t.duration;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => openTool(t)}
              aria-haspopup="dialog"
              className="group relative flex h-full min-h-60 flex-col overflow-hidden border border-stone-light bg-white text-left cursor-pointer transition-[border-color,box-shadow] duration-300 ease-brand hover:border-crimson/30 hover:shadow-md"
            >
              {/* Short wine rule along the top edge that runs full width on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0.5 w-10 bg-crimson transition-[width] duration-500 ease-brand group-hover:w-full"
              />

              {/* Oversized week count, set into the card like a watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 bottom-8 font-display text-[9rem] leading-none text-crimson/[0.07] transition-[color,translate] duration-500 ease-brand group-hover:-translate-y-1 group-hover:text-crimson/[0.13]"
              >
                {weeks}
              </span>

              <span className="relative flex-1 space-y-3 px-6 pt-7">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-graphite/50">
                  {t.levels.replace(/ \/ /g, ' · ')}
                </span>
                <span className="block font-display text-3xl text-graphite leading-[1.05]">{t.name}</span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-crimson">{t.duration}</span>
              </span>

              {/* Footer strip: wine fill sweeps in from the left on hover */}
              <span className="relative mt-6 flex items-center justify-between overflow-hidden border-t border-stone-light px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-graphite/70 transition-colors duration-300 group-hover:text-ivory">
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-crimson transition-transform duration-400 ease-brand group-hover:scale-x-100"
                />
                <span className="relative">View details</span>
                <ArrowRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="relative size-4 transition-transform duration-300 ease-brand group-hover:translate-x-1"
                />
              </span>
            </button>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="tool-dialog-title"
        onClick={(e) => e.target === e.currentTarget && close()}
        className="tool-dialog"
      >
        {tool && (
          <div className="relative space-y-6 p-7 md:p-9">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full p-1.5 text-graphite/60 cursor-pointer transition-colors hover:bg-ivory-warm hover:text-crimson"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-3 pr-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.12em]">
                <span className="rounded-sm bg-crimson px-2 py-0.5 text-ivory">{tool.duration}</span>
                <span className="text-graphite/70">{tool.levels}</span>
                {tool.streams && <span className="text-graphite/60">{tool.streams}</span>}
              </div>
              <h2 id="tool-dialog-title" className="font-display text-4xl text-graphite leading-[1.1]">
                {tool.name}
              </h2>
              <p className="text-base italic text-graphite/80">&ldquo;{tool.oneLiner}&rdquo;</p>
            </div>

            <div className="space-y-1 border-t border-stone-light pt-5">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-crimson">Focus</span>
              <p className="text-sm text-graphite">{tool.focus}</p>
            </div>

            <div className="space-y-3">
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-crimson">
                Tasks you will be able to perform
              </span>
              <ul className="space-y-2 text-sm text-graphite/85">
                {tool.outcomes.map((out) => (
                  <li key={out} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-crimson" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-t border-stone-light pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-graphite/75">
                Role track:{' '}
                <Link href={tool.roleLink.href} className="font-bold text-crimson hover:underline">
                  {tool.roleLink.name}
                </Link>
              </span>
              <CtaButton to="/find-your-track" className="shrink-0">Enroll in {tool.name}</CtaButton>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
};
