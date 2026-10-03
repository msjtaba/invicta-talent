'use client';

import React, { useState } from 'react';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { X } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto z-40 max-w-sm bg-graphite border border-ivory/12 rounded-md p-4 text-ivory shadow-lg text-xs flex items-start gap-3">
      <p className="leading-relaxed flex-1 text-stone-light">
        {GLOBAL_MICROCOPY.cookieNotice}
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="text-stone-light hover:text-gold p-0.5 transition-colors"
        aria-label="Dismiss notice"
      >
        <X strokeWidth={1.5} className="w-4 h-4" />
      </button>
    </div>
  );
};
