import React from 'react';
import { motion } from 'framer-motion';

export const BuiltBackwardsSection: React.FC = () => {
  const steps = [
    { title: 'Job Responsibility', desc: 'Identify the exact package deliverable expected by client EIR.' },
    { title: 'Role Definition', desc: 'Determine the specific competency and authority required.' },
    { title: 'Technical Workflow', desc: 'Execute discipline modeling, federation & rule checks.' },
    { title: 'Deliverable Output', desc: 'Produce QA-checked drawing sheet or BCF issue matrix.' },
    { title: 'Panel Assessment', desc: 'Defend decisions before practising GCC project leads.' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F2E8] text-[#171717] border-b border-[#171717]/15 bg-grid-pattern">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Header */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            03 — CURRICULUM ARCHITECTURE
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] leading-tight">
            WE DON'T START WITH THE SOFTWARE.
          </h2>
          <p className="text-xl font-serif-editorial italic text-[#7D2419]">
            We start with the responsibility.
          </p>
          <p className="text-sm text-[#4A4235] leading-relaxed font-sans font-medium">
            Every curriculum is engineered backwards from real job descriptions on GCC projects. We define what the role must deliver on a live package, then build the workflows, drills, software tools, and panel assessments required to execute it.
          </p>
        </div>

        {/* Right Step Inversion Stack */}
        <div className="lg:col-span-7 space-y-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 border border-[#171717]/15 bg-[#FFFDF9] flex items-center justify-between gap-6 hover:border-[#7D2419] transition-colors group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-[#7D2419] font-bold">0{idx + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#171717] group-hover:text-[#7D2419] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4A4235] font-sans mt-0.5">{step.desc}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#7F725F] uppercase tracking-widest hidden sm:block">
                INVERTED_STEP
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
