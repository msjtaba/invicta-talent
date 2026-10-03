'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, PERSISTENT_CTA } from '@/data/siteData';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // The menu remembers the path it was opened on, so navigating closes it.
  const [menuOpenedOn, setMenuOpenedOn] = useState<string | null>(null);
  const mobileMenuOpen = menuOpenedOn === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 px-6 md:px-12 bg-ivory border-b transition-shadow duration-250 ease-brand ${
          scrolled ? 'border-stone-light shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl h-full mx-auto flex gap-6 items-center justify-between">
          {/* Lockup */}
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-[28px] text-crimson leading-none">
                INVICTA-TALENT
              </span>
              <span className="w-1.5 h-1.5 bg-gold group-hover:bg-crimson transition-colors" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-bold tracking-[0.08em] uppercase transition-colors duration-150 py-2 ${
                    isActive ? 'text-crimson' : 'text-graphite hover:text-crimson'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button to={PERSISTENT_CTA.primary.href} size="sm" variant="primary">
              {PERSISTENT_CTA.primary.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpenedOn(mobileMenuOpen ? null : pathname)}
            className="lg:hidden text-graphite p-2"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X strokeWidth={1.5} className="w-6 h-6" /> : <Menu strokeWidth={1.5} className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-ivory text-graphite pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 max-w-lg mx-auto w-full">
              <span className="eyebrow text-crimson">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-display text-4xl text-graphite hover:text-crimson transition-colors leading-[1.1]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-8 border-t border-stone-light space-y-4">
                <Button to={PERSISTENT_CTA.primary.href} size="lg" variant="primary" className="w-full">
                  {PERSISTENT_CTA.primary.label}
                </Button>
                <Button to={PERSISTENT_CTA.secondary.href} size="md" variant="secondary" className="w-full">
                  {PERSISTENT_CTA.secondary.label}
                </Button>
              </div>
            </div>

            <div className="max-w-lg mx-auto w-full pt-8 text-xs text-graphite/75 border-t border-stone-light flex flex-col gap-2">
              <div>© 2026 Invicta-Talent</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
