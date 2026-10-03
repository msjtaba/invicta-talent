'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TOOL_CERTIFICATES } from '@/data/toolData';
import { OutlineButton } from '@/components/ui/OutlineButton';

// `tools` accordion from components.md: collapsed panels show only the tool name;
// clicking one expands it and closes whichever was open.
export const ToolCertificatesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(TOOL_CERTIFICATES[0]?.id ?? null);

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-light pb-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
              ONE TOOL. TWO TO SIX WEEKS. SAME STANDARD.
            </h2>
            <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
              Not everyone needs a career change. Sometimes a project needs you to be genuinely good at Navisworks, Revizto or Solibri by next quarter.
            </p>
          </div>
          <OutlineButton to="/tool-certificates" className="shrink-0">Explore All 8 Tool Courses</OutlineButton>
        </div>

        <div className="tools">
          {TOOL_CERTIFICATES.map((tool) => {
            const open = openId === tool.id;
            const panelId = `tool-panel-${tool.id}`;
            return (
              <div key={tool.id} className="tools__panel" data-open={open}>
                <button
                  type="button"
                  className="tools__trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : tool.id)}
                >
                  <span className="tools__label">{tool.name}</span>
                </button>

                {open && (
                  <div id={panelId} className="tools__content space-y-4">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-widest">
                      <span className="text-crimson">{tool.duration}</span>
                      <span className="text-graphite/60">{tool.levels}</span>
                      {tool.streams && <span className="text-graphite/60">{tool.streams}</span>}
                    </div>
                    <p className="font-sans text-lg text-graphite leading-relaxed max-w-xl">{tool.focus}</p>
                    <Link
                      href={tool.roleLink.href}
                      className="inline-block pt-3 border-t border-crimson/15 text-sm font-bold text-crimson hover:text-crimson-dark transition-colors"
                    >
                      {tool.roleLink.name} →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
