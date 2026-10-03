import React from 'react';
import { ADMISSIONS_DATA } from '@/data/employerData';
import { Button } from '@/components/ui/Button';

export const AdmissionsPage: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            ADMISSIONS & INTAKE PROCESS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {ADMISSIONS_DATA.headline}
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            {ADMISSIONS_DATA.sub}
          </p>
        </div>

        {/* The 5-Step Process */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ADMISSIONS_DATA.steps.map((s) => (
              <div key={s.step} className="p-6 border border-stone-light bg-white space-y-3 shadow-sm rounded-md">
                <span className="text-xs text-crimson font-bold block">{s.step}</span>
                <h3 className="font-display text-xl text-graphite leading-[1.1]">{s.title}</h3>
                <p className="text-xs text-graphite/75 font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expectation Notice */}
        <div className="p-6 border-l-4 border-crimson bg-white font-sans text-xs text-graphite space-y-2 shadow-sm rounded-md">
          <div className="text-crimson font-bold uppercase">WHAT'S EXPECTED OF YOU</div>
          <p className="font-medium">{ADMISSIONS_DATA.expectation}</p>
        </div>

        {/* Fees and Intakes Table */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">Fees and Intakes</h2>
          <div className="border border-stone-light bg-white overflow-x-auto shadow-sm rounded-md">
            <table className="w-full text-left font-sans text-xs">
              <thead className="bg-ivory-warm/50 text-crimson font-bold uppercase border-b border-stone-light rounded-md">
                <tr>
                  <th className="p-4 border-r border-stone-light">Programme</th>
                  <th className="p-4 border-r border-stone-light">Duration</th>
                  <th className="p-4 border-r border-stone-light">Next Intake</th>
                  <th className="p-4">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/10 text-graphite">
                {ADMISSIONS_DATA.feeTable.map((row, i) => (
                  <tr key={i} className="hover:bg-ivory-warm">
                    <td className="p-4 font-bold border-r border-stone-light">{row.program}</td>
                    <td className="p-4 border-r border-stone-light">{row.duration}</td>
                    <td className="p-4 border-r border-stone-light">{row.nextIntake}</td>
                    <td className="p-4 text-crimson font-bold">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-graphite leading-[1.1]">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADMISSIONS_DATA.faqs.map((faq, i) => (
              <div key={i} className="p-6 border border-stone-light bg-white space-y-2 shadow-sm rounded-md">
                <div className="font-display text-xl text-graphite leading-[1.1]">{faq.q}</div>
                <p className="text-xs text-graphite/75 font-sans leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 text-center">
          <Button to="/find-your-track" variant="primary" size="lg">
            Start Application Diagnostic
          </Button>
        </div>
      </div>
    </div>
  );
};
