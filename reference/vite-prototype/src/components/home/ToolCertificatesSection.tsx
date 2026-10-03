import React from 'react';
import { TOOL_CERTIFICATES } from '@/data/toolData';
import { Button } from '@/components/ui/Button';

export const ToolCertificatesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] border-b border-[#171717]/15 bg-grid-pattern">
      <div className="max-w-[1536px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171717]/15 pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
              11 — TOOL CERTIFICATION HUB
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717]">
              ONE TOOL. TWO TO SIX WEEKS. SAME STANDARD.
            </h2>
            <p className="text-sm text-[#4A4235] font-sans leading-relaxed font-medium">
              Not everyone needs a career change. Sometimes a project needs you to be genuinely good at Navisworks, Revizto or Solibri by next quarter.
            </p>
          </div>
          <Button to="/tool-certificates" variant="outline" size="sm" className="border-[#171717] text-[#171717] hover:bg-[#171717]/10">
            Explore All 8 Tool Courses →
          </Button>
        </div>

        {/* 8 Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOL_CERTIFICATES.map((tool) => (
            <div
              key={tool.id}
              className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-4 hover:border-[#7D2419] transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#7F725F]">
                  <span className="text-[#7D2419] font-bold">{tool.duration}</span>
                  <span className="font-semibold">{tool.levels}</span>
                </div>
                <h3 className="font-serif-editorial text-2xl font-semibold text-[#171717]">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                  {tool.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-[#171717]/15 text-[11px] font-mono text-[#7D2419] font-bold">
                {tool.roleLink.name} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
