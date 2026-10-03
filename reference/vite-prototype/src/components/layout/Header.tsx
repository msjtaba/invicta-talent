import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, PERSISTENT_CTA } from '@/data/siteData';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#E8DDC8]/95 backdrop-blur-md border-b border-[#171717]/15 py-3.5 shadow-sm'
            : 'bg-[#E8DDC8]/80 backdrop-blur-sm py-5 border-b border-[#171717]/10'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Lockup */}
          <Link to="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-editorial text-xl md:text-2xl font-semibold text-[#171717] tracking-wider">
                INVICTA TALENT
              </span>
              <span className="w-1.5 h-1.5 bg-[#7D2419] rounded-full group-hover:bg-[#5C1910] transition-colors" />
            </div>
            <span className="text-[10px] tracking-widest text-[#7F725F] uppercase font-sans -mt-1 hidden sm:block">
              INVICTA-TECH TALENT ACADEMY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-xs tracking-wider uppercase transition-colors duration-200 py-1 font-medium ${
                    isActive ? 'text-[#7D2419] font-bold' : 'text-[#171717]/80 hover:text-[#7D2419]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7D2419]"
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#171717] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#E8DDC8] text-[#171717] pt-24 px-8 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 max-w-lg mx-auto w-full">
              <span className="text-xs uppercase tracking-widest text-[#7D2419] font-bold block">
                NAVIGATION
              </span>
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="font-serif-editorial text-3xl font-normal text-[#171717] hover:text-[#7D2419] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-8 border-t border-[#171717]/15 space-y-4">
                <Button to={PERSISTENT_CTA.primary.href} size="lg" variant="primary" className="w-full">
                  {PERSISTENT_CTA.primary.label}
                </Button>
                <Button to={PERSISTENT_CTA.secondary.href} size="md" variant="outline" className="w-full border-[#171717] text-[#171717]">
                  {PERSISTENT_CTA.secondary.label}
                </Button>
              </div>
            </div>

            <div className="max-w-lg mx-auto w-full pt-8 text-xs text-[#171717]/60 border-t border-[#171717]/10 flex flex-col gap-2">
              <div>The training division of Invicta-Tech</div>
              <div>© 2026 Invicta-Tech Talent Academy</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
