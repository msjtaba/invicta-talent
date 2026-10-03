import React from 'react';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const CertificationPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            CERTIFICATION FRAMEWORK
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {GLOBAL_MICROCOPY.certificationHeadline}
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            Most training certificates confirm attendance. Ours confirms that a panel of practising professionals reviewed your work against the standards their own projects are held to, and accepted it.
          </p>
        </div>

        {/* Passing Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 p-8 border border-stone-light bg-white space-y-6 shadow-sm rounded-md">
            <h2 className="font-display text-2xl text-graphite border-b border-stone-light pb-4 leading-[1.1]">
              What You Must Clear
            </h2>
            <ul className="space-y-4 text-xs text-graphite">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span className="font-medium">Minimum 85% attendance in lab drills and expert sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span className="font-medium">All ten weekly Friday deliverables submitted and QA-reviewed</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span className="font-medium">Capstone simulation accepted by expert practitioner panel</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span className="font-medium">Certification exam passed — written theory + timed practical</span>
              </li>
              <li className="flex items-center gap-3 text-crimson font-bold">
                <ShieldAlert className="w-4 h-4 text-crimson" />
                <span>70% overall pass mark (no component below 60%). Distinction at 85%+.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 p-8 border border-stone-light bg-white space-y-6 shadow-sm rounded-md">
            <h2 className="font-display text-2xl text-graphite border-b border-stone-light pb-4 leading-[1.1]">
              Grade Weighting Model
            </h2>
            <div className="space-y-4 text-xs">
              <div className="flex justify-between p-3 bg-ivory-warm border border-stone-light rounded-md">
                <span className="text-graphite font-semibold">Weekly Deliverables (10×)</span>
                <span className="text-crimson font-bold">30%</span>
              </div>
              <div className="flex justify-between p-3 bg-ivory-warm border border-stone-light rounded-md">
                <span className="text-graphite font-semibold">Checkpoint Assessments (×2)</span>
                <span className="text-crimson font-bold">15%</span>
              </div>
              <div className="flex justify-between p-3 bg-ivory-warm border border-stone-light rounded-md">
                <span className="text-graphite font-semibold">Capstone Project Simulation</span>
                <span className="text-crimson font-bold">30%</span>
              </div>
              <div className="flex justify-between p-3 bg-ivory-warm border border-stone-light rounded-md">
                <span className="text-graphite font-semibold">Certification Exam & Defense</span>
                <span className="text-crimson font-bold">25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Credential Mockup section */}
        <div className="p-8 border border-stone-light bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm rounded-md">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-3xl text-graphite leading-[1.1]">The Digital Credential</h3>
            <p className="text-sm text-graphite/75 font-sans leading-relaxed">
              A digital certificate carrying a unique verification ID, tier designation (F / P / A), specialisation, and capstone project reference — plus the portfolio of real-workflow deliverables you produced along the way.
            </p>
            <p className="text-xs text-crimson font-bold">
              Curricula mapped to ISO 19650-1 and -2 competencies.
            </p>
          </div>
          <div className="lg:col-span-5 p-6 bg-ivory-warm border border-stone-light text-xs space-y-4 shadow-sm rounded-md">
            <div className="flex justify-between text-graphite/75 border-b border-stone-light pb-2 font-semibold">
              <span>INVICTA-TALENT</span>
              <span className="text-crimson font-bold">VERIFIED</span>
            </div>
            <div className="text-sm text-graphite font-bold">[HOLDER NAME]</div>
            <div className="text-xs text-graphite/75 font-semibold">IT-CBC · CERTIFIED BIM COORDINATOR (PROFESSIONAL TIER)</div>
            <div className="text-[10px] text-crimson font-bold">VERIFICATION ID: IT-CBC-202601</div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button to="/verify" variant="primary" size="lg">
            Verify a Credential
          </Button>
        </div>
      </div>
    </div>
  );
};
