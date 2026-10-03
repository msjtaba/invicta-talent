'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/data/insightData';
import { LearnMoreButton } from '@/components/ui/LearnMoreButton';
import { CtaButton } from '@/components/ui/CtaButton';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Inline Clash Report signup: validates the address and confirms in place, no redirect.
const ClashReportSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'invalid' | 'done'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(EMAIL_PATTERN.test(email.trim()) ? 'done' : 'invalid');
  };

  if (status === 'done') {
    return (
      <p role="status" className="border-[3px] border-crimson-deepest bg-white px-5 py-4 text-sm font-bold text-crimson-deepest">
        You&apos;re in. The next Clash Report lands in your inbox within the fortnight.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="w-full space-y-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="clash-report-email" className="sr-only">Email address</label>
        <input
          id="clash-report-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'invalid') setStatus('idle');
          }}
          aria-invalid={status === 'invalid'}
          aria-describedby={status === 'invalid' ? 'clash-report-error' : undefined}
          className="h-12 min-w-0 flex-1 rounded-none! border-[3px] border-crimson-deepest bg-white px-4 text-base text-graphite"
        />
        <button
          type="submit"
          className="h-12 shrink-0 cursor-pointer border-[3px] border-crimson-deepest bg-crimson px-6 text-sm font-bold uppercase tracking-[0.1em] text-ivory shadow-[4px_4px_0_var(--color-crimson-deepest)] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-crimson-deepest)] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Join The Clash Report
        </button>
      </div>
      {status === 'invalid' && (
        <p id="clash-report-error" role="alert" className="text-sm font-bold text-crimson">
          Enter a valid email address, e.g. name@company.com.
        </p>
      )}
    </form>
  );
};

export const InsightsHubPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Field Notes', 'Standards & Practice', 'Technology', 'Careers', 'Market & Region'];

  const filtered = activeCategory === 'ALL'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === activeCategory);

  const featured = ARTICLES_DATA[0];

  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-stone-light pb-8">
          <span className="eyebrow text-crimson">
            EDITORIAL PUBLICATION
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            Insights
          </h1>
          <p className="text-base text-graphite/75 font-sans leading-relaxed font-medium">
            Field notes, standards explainers and technology analysis from live GCC projects — written by the practitioners delivering them.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 text-xs border-b border-stone-light pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-sm border cursor-pointer transition-colors duration-150 ${
                activeCategory === cat
                  ? 'bg-crimson text-white border-crimson'
                  : 'bg-ivory-warm text-graphite border-transparent hover:border-crimson'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Large Editorial Layout) */}
        {activeCategory === 'ALL' && featured && (
          <div className="p-8 md:p-12 border border-stone-light bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md rounded-md">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-graphite/75">
                <span className="bg-crimson text-ivory px-2.5 py-0.5 font-bold uppercase">{featured.category}</span>
                <span className="font-semibold">{featured.readTime}</span>
                <span>·</span>
                <span className="font-semibold">{featured.date}</span>
              </div>

              <Link href={`/insights/${featured.slug}`} className="block group">
                <h2 className="font-display text-3xl sm:text-5xl text-graphite group-hover:text-crimson transition-colors leading-[1.1]">
                  {featured.title}
                </h2>
              </Link>

              <p className="text-sm text-graphite/75 font-sans leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="text-xs text-graphite/75 pt-2 font-semibold">
                By {featured.author} — <span className="italic">{featured.authorContext}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <LearnMoreButton to={`/insights/${featured.slug}`}>Read Full Field Note</LearnMoreButton>
            </div>
          </div>
        )}

        {/* Article Grid — editorial sheets: wine head rule, folio header, title-led */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art, i) => (
            <article
              key={art.slug}
              className="group relative flex flex-col border-t-4 border-crimson bg-white shadow-sm transition-[box-shadow,translate] duration-300 ease-brand hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between bg-ivory-warm/60 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em]">
                <span className="text-crimson">{art.category}</span>
                <span className="text-graphite/55">{art.readTime}</span>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-7 pt-6 pb-2">
                <span aria-hidden className="font-display text-sm text-crimson/40 tracking-[0.1em]">
                  N° {String(i + 1).padStart(2, '0')}
                </span>
                <Link href={`/insights/${art.slug}`} className="block">
                  <h3 className="font-display text-2xl text-graphite leading-[1.1] decoration-crimson decoration-2 underline-offset-4 group-hover:underline">
                    {art.title}
                  </h3>
                </Link>
                <p className="text-sm text-graphite/75 font-sans leading-relaxed">{art.excerpt}</p>
              </div>

              <div className="mx-7 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-stone-light py-5">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-graphite/55">{art.date}</span>
                <CtaButton to={`/insights/${art.slug}`}>Read Article</CtaButton>
              </div>
            </article>
          ))}
        </div>

        {/* Clash Report Newsletter — moderate brutalist: hard border, hard offset shadow */}
        <div className="border-[3px] border-crimson-deepest bg-ivory-warm p-8 md:p-10 shadow-[10px_10px_0_var(--color-crimson)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="inline-block bg-crimson-deepest px-2.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ivory">
              Fortnightly publication
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-crimson-deepest leading-[1.02]">
              Subscribe to The Clash Report
            </h3>
            <p className="text-base font-bold text-graphite/80">
              The friction points in AEC delivery, once a fortnight, from people on live projects.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ClashReportSignup />
          </div>
        </div>
      </div>
    </div>
  );
};
