'use client';

import React, { useState } from 'react';
import { NEWSLETTER_DATA } from '@/data/insightData';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const ClashReportPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-ivory text-graphite min-h-[85vh] flex flex-col justify-center font-sans">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="eyebrow text-crimson">
            FORTNIGHTLY NEWSLETTER
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-graphite leading-[1.1]">
            {NEWSLETTER_DATA.name}
          </h1>
          <p className="text-base text-graphite/75 font-medium max-w-xl mx-auto">
            {NEWSLETTER_DATA.positioning}
          </p>
        </div>

        {/* Five Segments List */}
        <div className="space-y-4">
          <h2 className="text-xs text-crimson font-bold uppercase tracking-wider text-center">
            FIVE STANDING SEGMENTS EVERY FORTNIGHT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {NEWSLETTER_DATA.segments.map((seg) => (
              <div key={seg.name} className="p-5 border border-stone-light bg-white space-y-2 shadow-sm rounded-md">
                <span className="text-xs text-crimson font-bold block">{seg.name}</span>
                <p className="text-xs text-graphite/75 font-sans">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Form */}
        <div className="p-8 border-2 border-crimson bg-white space-y-6 shadow-lg rounded-md">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="subscribe-email" className="block text-[13px] text-graphite font-bold uppercase tracking-[0.1em] text-center">
                Enter your work email to subscribe
              </label>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 h-12 bg-white border border-stone-light rounded-sm px-4 text-base text-graphite"
                  id="subscribe-email"
                  required
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-[13px] text-graphite/75 text-center">
                {NEWSLETTER_DATA.subscribeMicrocopy}
              </p>
            </form>
          ) : (
            <div className="text-center space-y-3 py-4">
              <CheckCircle2 className="w-8 h-8 text-crimson mx-auto" />
              <div className="font-display text-2xl text-graphite leading-[1.1]">You're subscribed to The Clash Report.</div>
              <p className="text-xs text-graphite/75">The next issue will arrive in your inbox next fortnight.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
