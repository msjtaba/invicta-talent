import React from 'react';
import { ADMISSIONS_DATA } from '@/data/employerData';
import { Button } from '@/components/ui/Button';

export const AdmissionsPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            ADMISSIONS & INTAKE PROCESS
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {ADMISSIONS_DATA.headline}
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            {ADMISSIONS_DATA.sub}
          </p>
        </div>

        {/* The 5-Step Process */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ADMISSIONS_DATA.steps.map((s) => (
              <div key={s.step} className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-3 shadow-sm">
                <span className="text-xs font-mono text-[#7D2419] font-bold block">{s.step}</span>
                <h3 className="font-serif-editorial text-xl text-[#171717]">{s.title}</h3>
                <p className="text-xs text-[#4A4235] font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expectation Notice */}
        <div className="p-6 border-l-4 border-[#7D2419] bg-[#FFFDF9] font-sans text-xs text-[#171717] space-y-2 shadow-sm">
          <div className="font-mono text-[#7D2419] font-bold uppercase">WHAT'S EXPECTED OF YOU</div>
          <p className="font-medium">{ADMISSIONS_DATA.expectation}</p>
        </div>

        {/* Fees and Intakes Table */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">Fees and Intakes</h2>
          <div className="border border-[#171717]/15 bg-[#FFFDF9] overflow-x-auto shadow-sm">
            <table className="w-full text-left font-sans text-xs">
              <thead className="bg-[#DFCFA8]/50 font-mono text-[#7D2419] font-bold uppercase border-b border-[#171717]/15">
                <tr>
                  <th className="p-4 border-r border-[#171717]/10">Programme</th>
                  <th className="p-4 border-r border-[#171717]/10">Duration</th>
                  <th className="p-4 border-r border-[#171717]/10">Next Intake</th>
                  <th className="p-4">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#171717]/10 text-[#171717]">
                {ADMISSIONS_DATA.feeTable.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F7F2E8]">
                    <td className="p-4 font-mono font-bold border-r border-[#171717]/10">{row.program}</td>
                    <td className="p-4 border-r border-[#171717]/10">{row.duration}</td>
                    <td className="p-4 border-r border-[#171717]/10">{row.nextIntake}</td>
                    <td className="p-4 font-mono text-[#7D2419] font-bold">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="font-serif-editorial text-3xl text-[#171717]">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADMISSIONS_DATA.faqs.map((faq, i) => (
              <div key={i} className="p-6 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
                <div className="font-serif-editorial text-xl text-[#171717]">{faq.q}</div>
                <p className="text-xs text-[#4A4235] font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 text-center">
          <Button to="/find-your-track" variant="primary" size="lg">
            Start Application Diagnostic →
          </Button>
        </div>
      </div>
    </div>
  );
};
