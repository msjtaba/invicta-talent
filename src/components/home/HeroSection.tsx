'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OutlineButton } from '@/components/ui/OutlineButton';
import { RotatingLine } from '@/components/ui/RotatingLine';
import { PERSISTENT_CTA, TRUST_STRIP_ITEMS } from '@/data/siteData';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] as const },
});

// Photo hero: the monitors sit on the left of the image, so copy starts ~40% in from the left.
export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-12 pb-16 px-6 md:px-12 bg-crimson-deepest text-ivory overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      />
      {/* Darken only the right side so the text reads and the monitors stay clear. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-crimson-deepest/60 via-crimson-deepest/70 lg:from-transparent lg:via-crimson-deepest/45 to-crimson-deepest/90 pointer-events-none"
      />

      {/* Top line */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex justify-end border-b border-ivory/12 pb-4 lg:pl-[40%]">
          <RotatingLine />
        </div>
      </div>

      {/* Main Narrative Hero Content */}
      <div className="max-w-7xl mx-auto w-full z-10 my-auto py-12">
        <div className="lg:ml-[40%] space-y-8">
          <motion.h1
            {...reveal()}
            className="font-display text-[44px] lg:text-[72px] leading-none tracking-[0.01em] text-ivory"
          >
            The people who deliver Saudi Arabia&apos;s giga-projects{' '}
            <span className="text-gold">now teach the roles</span> that build them.
          </motion.h1>

          <motion.p
            {...reveal(0.1)}
            className="text-lg lg:text-xl text-ivory/90 max-w-2xl leading-[1.6]"
          >
            Four role certifications. Three career tiers. Twelve weeks. Every exercise runs on data derived from real projects, every session is taught by someone who was on a live project that week — and the panel that certifies you is the panel that hires for these roles.
          </motion.p>

          <motion.div {...reveal(0.2)} className="flex flex-wrap items-center gap-4 pt-4">
            <OutlineButton to={PERSISTENT_CTA.primary.href} tone="dark">
              {PERSISTENT_CTA.primary.label}
            </OutlineButton>
            <OutlineButton to="/programs" tone="dark">
              See the Programs
            </OutlineButton>
          </motion.div>
        </div>
      </div>

      {/* Proof Strip */}
      <div className="max-w-7xl mx-auto w-full z-10 pt-6 border-t border-ivory/12 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm uppercase tracking-[0.18em] text-ivory font-bold">Project sectors</div>
        <div className="flex flex-wrap items-center gap-3 text-[13px] md:text-sm">
          {TRUST_STRIP_ITEMS.map((sector, i) => (
            <span key={sector} className="flex items-center gap-3 uppercase tracking-[0.1em] text-stone-light">
              {sector}
              {i < TRUST_STRIP_ITEMS.length - 1 && <span className="text-gold">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
