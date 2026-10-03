import React from 'react';
import { Button } from '@/components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            ABOUT THE ACADEMY
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            A delivery firm built this, because we couldn't hire our way out of the problem.
          </h1>
        </div>

        {/* Narrative Body */}
        <div className="max-w-3xl space-y-6 text-sm text-[#3D352A] font-sans leading-relaxed">
          <p className="text-base text-[#171717] font-serif italic">
            Invicta-Tech is a Digital Design and Construction Advisory firm. We deliver coordinated BIM, construction documentation and digital delivery frameworks on aviation, giga-destination, hospitality, healthcare, tower and industrial programmes across the GCC.
          </p>

          <p>
            The parent firm's position is simple: <strong className="text-[#171717]">we don't just deliver BIM — we deliver control, predictability and measurable outcomes.</strong> Doing that requires people who can hold a discipline model through six revision cycles, reduce a clash report to the issues that matter, chair a room full of discipline leads, and write a BEP that survives contact with fifteen subcontractors.
          </p>

          <p>
            Those people are scarce. The market produces software operators faster than it produces professionals. So we built the Academy to produce the second kind — and we built it out of the thing we already had that nobody else does: live projects, working practitioners, and QA standards already in force.
          </p>
        </div>

        {/* Three Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#171717]/15 font-mono text-xs">
          <div className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
            <div className="text-[#7D2419] font-bold">WE TEACH THE JOB, NOT THE TOOL</div>
            <p className="text-[#4A4235] font-sans">Tools change every eighteen months. The responsibility a coordinator carries at a data drop does not.</p>
          </div>
          <div className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
            <div className="text-[#7D2419] font-bold">NOTHING THE PROJECT WOULDN'T ASK OF YOU</div>
            <p className="text-[#4A4235] font-sans">Every curriculum begins as a list of responsibilities from a real job description on live packages.</p>
          </div>
          <div className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
            <div className="text-[#7D2419] font-bold">WE REJECT WORK RATHER THAN DILUTE</div>
            <p className="text-[#4A4235] font-sans">A certificate that everyone passes is worth exactly what it costs to print.</p>
          </div>
        </div>

        {/* Relationship Context */}
        <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-4 shadow-sm">
          <h3 className="font-serif-editorial text-2xl text-[#171717]">The Relationship to Invicta-Tech</h3>
          <p className="text-xs text-[#3D352A] font-sans leading-relaxed max-w-3xl">
            The Academy is Invicta-Tech's training division. Faculty are drawn from our delivery teams and partner network across Saudi Arabia, the UAE, Qatar and Kuwait. Curricula are mapped to the same QA standards our project teams are held to. Training datasets are derived from real project packages and fully anonymised.
          </p>
          <div className="pt-2 font-mono text-xs text-[#7D2419] font-bold">
            Parent Firm Reference: Invicta-Tech Advisory
          </div>
        </div>
      </div>
    </div>
  );
};
