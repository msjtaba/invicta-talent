import React, { useState } from 'react';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { X } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-[#171717] border border-[#E8DDC8]/20 p-4 text-[#E8DDC8] shadow-xl text-xs flex items-start gap-3">
      <p className="leading-relaxed flex-1 text-[#B9AD99]">
        {GLOBAL_MICROCOPY.cookieNotice}
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="text-[#B9AD99] hover:text-[#E8DDC8] p-0.5"
        aria-label="Dismiss notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
