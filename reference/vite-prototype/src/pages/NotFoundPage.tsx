import React from 'react';
import { Button } from '@/components/ui/Button';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] min-h-[75vh] flex flex-col justify-center text-center font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#7D2419] bg-[#FFFDF9] px-3 py-1 border border-[#7D2419]">
          <AlertTriangle className="w-4 h-4 text-[#7D2419]" />
          <span>404 — UNRESOLVED ROUTE</span>
        </div>

        <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
          {GLOBAL_MICROCOPY.notFoundTitle}
        </h1>

        <p className="text-base text-[#4A4235] font-medium leading-relaxed">
          {GLOBAL_MICROCOPY.notFoundSub}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button to="/programs" variant="primary" size="md">
            Programs
          </Button>
          <Button to="/insights" variant="outline" size="md" className="border-[#171717] text-[#171717]">
            Insights
          </Button>
          <Button to="/find-your-track" variant="secondary" size="md" className="border-[#171717] text-[#171717]">
            Find Your Track
          </Button>
        </div>
      </div>
    </div>
  );
};
