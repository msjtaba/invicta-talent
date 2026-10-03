import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES_DATA } from '@/data/insightData';
import { Button } from '@/components/ui/Button';

export const InsightsHubPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Field Notes', 'Standards & Practice', 'Technology', 'Careers', 'Market & Region'];

  const filtered = activeCategory === 'ALL'
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === activeCategory);

  const featured = ARTICLES_DATA[0];

  return (
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] space-y-16">
      <div className="max-w-[1536px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-[#171717]/15 pb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            EDITORIAL PUBLICATION
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            Insights
          </h1>
          <p className="text-base text-[#4A4235] font-sans leading-relaxed font-medium">
            Field notes, standards explainers and technology analysis from live GCC projects — written by the practitioners delivering them.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 font-mono text-xs border-b border-[#171717]/15 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 cursor-pointer transition-colors ${
                activeCategory === cat
                  ? 'bg-[#7D2419] text-[#E8DDC8] font-bold'
                  : 'bg-[#FFFDF9] border border-[#171717]/15 text-[#171717] hover:border-[#7D2419]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Large Editorial Layout) */}
        {activeCategory === 'ALL' && featured && (
          <div className="p-8 md:p-12 border border-[#171717]/20 bg-[#FFFDF9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#4A4235]">
                <span className="bg-[#7D2419] text-[#E8DDC8] px-2.5 py-0.5 font-bold uppercase">{featured.category}</span>
                <span className="font-semibold">{featured.readTime}</span>
                <span>·</span>
                <span className="font-semibold">{featured.date}</span>
              </div>

              <Link to={`/insights/${featured.slug}`} className="block group">
                <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#171717] group-hover:text-[#7D2419] transition-colors leading-tight">
                  {featured.title}
                </h2>
              </Link>

              <p className="text-sm text-[#4A4235] font-sans leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="text-xs font-mono text-[#4A4235] pt-2 font-semibold">
                By {featured.author} — <span className="italic">{featured.authorContext}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Button to={`/insights/${featured.slug}`} variant="primary" size="md">
                Read Full Field Note →
              </Button>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <div
              key={art.slug}
              className="p-8 border border-[#171717]/15 bg-[#FFFDF9] space-y-6 flex flex-col justify-between hover:border-[#7D2419] transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[#4A4235] border-b border-[#171717]/10 pb-3 font-semibold">
                  <span className="text-[#7D2419] font-bold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <Link to={`/insights/${art.slug}`} className="block group">
                  <h3 className="font-serif-editorial text-2xl text-[#171717] group-hover:text-[#7D2419] transition-colors">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#4A4235] font-sans leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#171717]/15 flex justify-between items-center text-xs font-mono">
                <span className="text-[#4A4235] font-semibold">{art.date}</span>
                <Link to={`/insights/${art.slug}`} className="text-[#7D2419] font-bold hover:underline">
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clash Report Newsletter Banner */}
        <div className="p-8 border border-[#7D2419] bg-[#FFFDF9] text-[#171717] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#7D2419] uppercase font-bold tracking-widest">FORTNIGHTLY PUBLICATION</span>
            <h3 className="font-serif-editorial text-3xl text-[#171717]">Subscribe to The Clash Report</h3>
            <p className="text-xs text-[#4A4235] font-sans">The friction points in AEC delivery, once a fortnight, from people on live projects.</p>
          </div>
          <Button to="/newsletter" variant="primary" size="md" className="shrink-0">
            Subscribe Free →
          </Button>
        </div>
      </div>
    </div>
  );
};
