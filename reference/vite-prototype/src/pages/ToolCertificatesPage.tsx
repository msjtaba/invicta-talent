import React from 'react';
import { TOOL_CERTIFICATES } from '@/data/toolData';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { Button } from '@/components/ui/Button';

export const ToolCertificatesPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            TOOL CERTIFICATE HUB
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.toolCertificatesHeadline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            Not everyone needs a career change. Sometimes a project needs you to be genuinely good at Navisworks, Revizto or Solibri by next quarter. Tool certificates run the Academy format at smaller scale: one expert session a week, daily offline practice labs, a timed practical exam and a mini-project.
          </p>
        </div>

        {/* 8 Tool Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOOL_CERTIFICATES.map((tool) => (
            <div
              key={tool.id}
              className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 hover:border-[#7D2419] transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[#7F725F] border-b border-[#171717]/10 pb-3">
                  <span className="text-[#7D2419] font-bold text-sm">{tool.name}</span>
                  <span className="font-semibold">{tool.duration} · {tool.levels}</span>
                </div>

                <p className="text-sm font-serif-editorial italic text-[#171717]">
                  "{tool.oneLiner}"
                </p>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#7D2419] font-bold uppercase block">TASKS YOU WILL BE ABLE TO PERFORM:</span>
                  <ul className="space-y-1.5 text-xs text-[#3D352A] font-sans">
                    {tool.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7D2419] font-mono font-bold">•</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#171717]/15 flex justify-between items-center text-xs font-mono">
                <span className="text-[#4A4235] font-semibold">Role Track: {tool.roleLink.name}</span>
                <Button to="/find-your-track" variant="primary" size="sm">
                  Enroll in {tool.name} →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Note */}
        <div className="p-8 border border-[#171717]/15 bg-[#F7F2E8] font-mono text-xs text-[#4A4235] space-y-2">
          <div className="text-[#7D2419] font-bold uppercase">STACKING PROTOCOL</div>
          <p>
            Complete a role programme and you receive embedded tool certificates for every tool examined within it. Tool certificates taken separately count toward nothing but your capability — they do not substitute for a role certification, and we won't pretend otherwise.
          </p>
        </div>
      </div>
    </div>
  );
};
