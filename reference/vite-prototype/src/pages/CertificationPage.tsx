import React from 'react';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const CertificationPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            CERTIFICATION FRAMEWORK
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {GLOBAL_MICROCOPY.certificationHeadline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            Most training certificates confirm attendance. Ours confirms that a panel of practising professionals reviewed your work against the standards their own projects are held to, and accepted it.
          </p>
        </div>

        {/* Passing Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 shadow-sm">
            <h2 className="font-serif-editorial text-2xl text-[#171717] border-b border-[#171717]/15 pb-4">
              What You Must Clear
            </h2>
            <ul className="space-y-4 text-xs font-mono text-[#171717]">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                <span className="font-medium">Minimum 85% attendance in lab drills and expert sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                <span className="font-medium">All ten weekly Friday deliverables submitted and QA-reviewed</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                <span className="font-medium">Capstone simulation accepted by expert practitioner panel</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#7D2419]" />
                <span className="font-medium">Certification exam passed — written theory + timed practical</span>
              </li>
              <li className="flex items-center gap-3 text-[#7D2419] font-bold">
                <ShieldAlert className="w-4 h-4 text-[#7D2419]" />
                <span>70% overall pass mark (no component below 60%). Distinction at 85%+.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 shadow-sm">
            <h2 className="font-serif-editorial text-2xl text-[#171717] border-b border-[#171717]/15 pb-4">
              Grade Weighting Model
            </h2>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between p-3 bg-[#F7F2E8] border border-[#171717]/15">
                <span className="text-[#171717] font-semibold">Weekly Deliverables (10×)</span>
                <span className="text-[#7D2419] font-bold">30%</span>
              </div>
              <div className="flex justify-between p-3 bg-[#F7F2E8] border border-[#171717]/15">
                <span className="text-[#171717] font-semibold">Checkpoint Assessments (×2)</span>
                <span className="text-[#7D2419] font-bold">15%</span>
              </div>
              <div className="flex justify-between p-3 bg-[#F7F2E8] border border-[#171717]/15">
                <span className="text-[#171717] font-semibold">Capstone Project Simulation</span>
                <span className="text-[#7D2419] font-bold">30%</span>
              </div>
              <div className="flex justify-between p-3 bg-[#F7F2E8] border border-[#171717]/15">
                <span className="text-[#171717] font-semibold">Certification Exam & Defense</span>
                <span className="text-[#7D2419] font-bold">25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Credential Mockup section */}
        <div className="p-8 border border-[#171717]/15 bg-[#FFFDF9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif-editorial text-3xl text-[#171717]">The Digital Credential</h3>
            <p className="text-sm text-[#4A4235] font-sans leading-relaxed">
              A digital certificate carrying a unique verification ID, tier designation (F / P / A), specialisation, and capstone project reference — plus the portfolio of real-workflow deliverables you produced along the way.
            </p>
            <p className="text-xs font-mono text-[#7D2419] font-bold">
              Curricula mapped to ISO 19650-1 and -2 competencies.
            </p>
          </div>
          <div className="lg:col-span-5 p-6 bg-[#F7F2E8] border border-[#171717]/20 font-mono text-xs space-y-4 shadow-sm">
            <div className="flex justify-between text-[#4A4235] border-b border-[#171717]/15 pb-2 font-semibold">
              <span>INVICTA-TECH TALENT ACADEMY</span>
              <span className="text-[#7D2419] font-bold">VERIFIED</span>
            </div>
            <div className="text-sm text-[#171717] font-bold">[HOLDER NAME]</div>
            <div className="text-xs text-[#4A4235] font-semibold">ITTA-CBC · CERTIFIED BIM COORDINATOR (PROFESSIONAL TIER)</div>
            <div className="text-[10px] text-[#7D2419] font-bold">VERIFICATION ID: ITTA-CBC-202601</div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button to="/verify" variant="primary" size="lg">
            Verify a Credential →
          </Button>
        </div>
      </div>
    </div>
  );
};
