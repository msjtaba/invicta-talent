import React from 'react';
import Link from 'next/link';
import { FOOTER_DATA } from '@/data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-crimson-deepest text-ivory pt-16 lg:pt-24 pb-12 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-ivory/12">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="font-display text-[28px] text-ivory leading-[1.1]">
            {FOOTER_DATA.col1.title}
          </div>
          <p className="text-sm text-stone-light leading-[1.6]">
            {FOOTER_DATA.col1.desc}
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="text-xs tracking-[0.18em] text-gold font-bold uppercase border-b border-ivory/12 pb-2">
            {FOOTER_DATA.col2.title}
          </div>
          <ul className="space-y-3 text-sm text-stone-light">
            {FOOTER_DATA.col2.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div className="text-xs tracking-[0.18em] text-gold font-bold uppercase border-b border-ivory/12 pb-2">
            {FOOTER_DATA.col3.title}
          </div>
          <ul className="space-y-3 text-sm text-stone-light">
            {FOOTER_DATA.col3.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4 text-xs">
          <div className="text-xs tracking-[0.18em] text-gold font-bold uppercase border-b border-ivory/12 pb-2">
            {FOOTER_DATA.col4.title}
          </div>
          <div className="space-y-3 text-sm text-stone-light">
            <div>
              <span className="text-ivory font-bold block text-[11px] tracking-[0.1em] uppercase">Email</span>
              <a href={`mailto:${FOOTER_DATA.col4.email}`} className="hover:text-gold transition-colors">
                {FOOTER_DATA.col4.email}
              </a>
            </div>
            <div>
              <span className="text-ivory font-bold block text-[11px] tracking-[0.1em] uppercase">India</span>
              {FOOTER_DATA.col4.india.join(' · ')}
            </div>
            <div>
              <span className="text-ivory font-bold block text-[11px] tracking-[0.1em] uppercase">Saudi Arabia</span>
              {FOOTER_DATA.col4.saudi.join(' · ')}
            </div>
            <div>
              <span className="text-ivory font-bold block text-[11px] tracking-[0.1em] uppercase">Campus</span>
              {FOOTER_DATA.col4.campus}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-light">
        <div>{FOOTER_DATA.bottom.copyright}</div>
        <div className="flex gap-4 font-medium">
          {FOOTER_DATA.bottom.links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-center md:text-right max-w-md text-xs">
          {FOOTER_DATA.bottom.disclaimer}
        </div>
      </div>
    </footer>
  );
};
