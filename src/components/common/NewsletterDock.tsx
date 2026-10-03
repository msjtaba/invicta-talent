'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NEWSLETTER_DATA } from '@/data/insightData';

// Floating `newsletter` card, bottom-right on every page. Closing tucks it into a
// ribbon on the right edge; the ribbon itself can't be dismissed.
// Hidden on the Insights hub, which has its own inline Clash Report signup.
export const NewsletterDock: React.FC = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  if (pathname === '/insights') return null;

  return (
    <div className="fixed bottom-6 right-0 z-50 flex items-end pointer-events-none">
      <AnimatePresence initial={false} mode="wait">
        {expanded ? (
          <motion.aside
            key="panel"
            aria-label={NEWSLETTER_DATA.name}
            initial={{ x: '110%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '110%', opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="pointer-events-auto mr-6 mb-2"
          >
            <div className="newsletter relative max-w-[calc(100vw-3rem)]">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 z-10 p-1 text-graphite hover:text-crimson transition-colors"
                aria-label="Collapse newsletter"
              >
                <X strokeWidth={2} className="w-5 h-5" />
              </button>

              <span className="newsletter__title pr-8">{NEWSLETTER_DATA.name}</span>
              {subscribed ? (
                <p className="newsletter__content font-bold">You&apos;re on the list. The next issue lands in your inbox.</p>
              ) : (
                <>
                  <p className="newsletter__content">
                    Field notes from live GCC projects — clashes, coordination calls and the decisions behind them. Every fortnight.
                  </p>
                  <form className="newsletter__form" onSubmit={handleSubmit}>
                    <input
                      required
                      type="email"
                      aria-label="Email address"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="newsletter__button">
                      Subscribe
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.aside>
        ) : (
          <motion.button
            key="ribbon"
            type="button"
            onClick={() => setExpanded(true)}
            aria-label={`Open ${NEWSLETTER_DATA.name} newsletter`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="pointer-events-auto bg-crimson text-white border-2 border-l-0 border-graphite px-2.5 py-4 shadow-lg hover:bg-crimson-dark transition-colors [writing-mode:vertical-rl] rotate-180 font-bold uppercase tracking-[0.18em] text-xs cursor-pointer"
          >
            {NEWSLETTER_DATA.name}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
