import React from 'react';
import { Button } from '@/components/ui/Button';
import { GLOBAL_MICROCOPY } from '@/data/siteData';
import { AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-ivory text-graphite min-h-[75vh] flex flex-col justify-center text-center font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 text-xs text-crimson bg-white px-3 py-1 border border-crimson rounded-md">
          <AlertTriangle className="w-4 h-4 text-crimson" />
          <span>404 — UNRESOLVED ROUTE</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
          {GLOBAL_MICROCOPY.notFoundTitle}
        </h1>

        <p className="text-base text-graphite/75 font-medium leading-relaxed">
          {GLOBAL_MICROCOPY.notFoundSub}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button to="/programs" variant="primary" size="md">
            Programs
          </Button>
          <Button to="/insights" variant="secondary" size="md" >
            Insights
          </Button>
          <Button to="/find-your-track" variant="secondary" size="md" >
            Find Your Track
          </Button>
        </div>
      </div>
    </div>
  );
};
