'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Moves the currArch glow layers to follow the cursor.
const trackGlow = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

// Number-bar shades of the primary crimson, lightest (step 1) to darkest (step 5).
const BAR_SHADES = ['#C27A7A', '#A34646', '#841C1C', '#5A0505', '#350303'];

export const BuiltBackwardsSection: React.FC = () => {
  const steps = [
    { title: 'Job Responsibility', desc: 'Identify the exact package deliverable expected by client EIR.' },
    { title: 'Role Definition', desc: 'Determine the specific competency and authority required.' },
    { title: 'Technical Workflow', desc: 'Execute discipline modeling, federation & rule checks.' },
    { title: 'Deliverable Output', desc: 'Produce QA-checked drawing sheet or BCF issue matrix.' },
    { title: 'Panel Assessment', desc: 'Defend decisions before practising GCC project leads.' },
  ];

  return (
    <section className="py-16 lg:py-32 px-6 md:px-12 bg-ivory-warm text-graphite border-b border-stone-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Header */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-graphite leading-[1.1]">
            WE DON&apos;T START WITH THE SOFTWARE.
          </h2>
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-crimson leading-[1.1]">
            We start with the responsibility.
          </p>
          <p className="text-base text-graphite/75 leading-relaxed font-sans font-medium">
            Every curriculum is engineered backwards from real job descriptions on GCC projects. We define what the role must deliver on a live package, then build the workflows, drills, software tools, and panel assessments required to execute it.
          </p>
        </div>

        {/* Right step stack — currArch cards */}
        <div className="lg:col-span-7 space-y-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseMove={trackGlow}
              className="curr-arch"
              style={{ '--bar': BAR_SHADES[idx] } as React.CSSProperties}
            >
              <div aria-hidden className="curr-arch__glow" style={{ left: 'var(--x)', top: 'var(--y)' }} />
              <div aria-hidden className="curr-arch__border-glow" style={{ left: 'var(--x)', top: 'var(--y)' }} />
              <h3 className="curr-arch__title">
                <span className="text-xs text-graphite/50 tracking-[0.18em]">0{idx + 1}</span>
                {step.title}
              </h3>
              <p className="curr-arch__body">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
