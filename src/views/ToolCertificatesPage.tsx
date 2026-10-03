import React from 'react';
import { TOOL_CERTIFICATES } from '@/data/toolData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { ToolCertificateGrid } from '@/components/tools/ToolCertificateGrid';

export const ToolCertificatesPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            TOOL CERTIFICATE HUB
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {GLOBAL_MICROCOPY.toolCertificatesHeadline}
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            Not everyone needs a career change. Sometimes a project needs you to be genuinely good at Navisworks, Revizto or Solibri by next quarter. Tool certificates run the Academy format at smaller scale: one expert session a week, daily offline practice labs, a timed practical exam and a mini-project.
          </p>
        </div>

        {/* 8 tool cards, 4 per row; details open in a floating window */}
        <ToolCertificateGrid tools={TOOL_CERTIFICATES} />

        {/* Conceptual Note */}
        <div className="p-8 border border-stone-light bg-ivory-warm text-xs text-graphite/75 space-y-2 rounded-md">
          <div className="text-crimson font-bold uppercase">STACKING PROTOCOL</div>
          <p>
            Complete a role programme and you receive embedded tool certificates for every tool examined within it. Tool certificates taken separately count toward nothing but your capability — they do not substitute for a role certification, and we won't pretend otherwise.
          </p>
        </div>
      </div>
    </div>
  );
};
