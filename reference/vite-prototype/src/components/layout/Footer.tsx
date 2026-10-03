import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_DATA } from '@/data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DFCFA8]/40 text-[#171717] border-t border-[#171717]/15 pt-16 pb-12 px-6 md:px-12 font-sans">
      <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#171717]/15">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="font-serif-editorial text-2xl font-semibold tracking-wider text-[#171717]">
            {FOOTER_DATA.col1.title}
          </div>
          <p className="text-xs text-[#4A4235] leading-relaxed">
            {FOOTER_DATA.col1.desc}
          </p>
          <div className="text-[11px] text-[#7D2419] font-mono uppercase tracking-wider font-bold pt-2">
            The training division of Invicta-Tech
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#171717] font-bold uppercase border-b border-[#171717]/15 pb-2">
            {FOOTER_DATA.col2.title}
          </div>
          <ul className="space-y-2.5 text-xs text-[#4A4235]">
            {FOOTER_DATA.col2.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="hover:text-[#7D2419] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#171717] font-bold uppercase border-b border-[#171717]/15 pb-2">
            {FOOTER_DATA.col3.title}
          </div>
          <ul className="space-y-2.5 text-xs text-[#4A4235]">
            {FOOTER_DATA.col3.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="hover:text-[#7D2419] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4 font-mono text-xs">
          <div className="text-xs tracking-widest text-[#171717] font-bold uppercase border-b border-[#171717]/15 pb-2">
            {FOOTER_DATA.col4.title}
          </div>
          <div className="space-y-3 text-[#4A4235]">
            <div>
              <span className="text-[#171717] font-bold block text-[10px] uppercase">Email</span>
              <a href={`mailto:${FOOTER_DATA.col4.email}`} className="hover:text-[#7D2419] transition-colors">
                {FOOTER_DATA.col4.email}
              </a>
            </div>
            <div>
              <span className="text-[#171717] font-bold block text-[10px] uppercase">India</span>
              {FOOTER_DATA.col4.india.join(' · ')}
            </div>
            <div>
              <span className="text-[#171717] font-bold block text-[10px] uppercase">Saudi Arabia</span>
              {FOOTER_DATA.col4.saudi.join(' · ')}
            </div>
            <div>
              <span className="text-[#171717] font-bold block text-[10px] uppercase">Campus</span>
              {FOOTER_DATA.col4.campus}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Disclaimer */}
      <div className="max-w-[1536px] mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#4A4235]">
        <div>{FOOTER_DATA.bottom.copyright}</div>
        <div className="flex gap-4 font-medium">
          {FOOTER_DATA.bottom.links.map((l) => (
            <Link key={l.href} to={l.href} className="hover:text-[#7D2419]">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="text-center md:text-right max-w-md text-[10px] font-mono">
          {FOOTER_DATA.bottom.disclaimer}
        </div>
      </div>
    </footer>
  );
};
