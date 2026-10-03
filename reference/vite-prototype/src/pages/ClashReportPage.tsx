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
    <div className="py-16 px-6 md:px-12 bg-[#E8DDC8] text-[#171717] min-h-[85vh] flex flex-col justify-center font-sans">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7D2419] font-mono font-bold block">
            FORTNIGHTLY NEWSLETTER
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-normal text-[#171717]">
            {NEWSLETTER_DATA.name}
          </h1>
          <p className="text-base text-[#4A4235] font-medium max-w-xl mx-auto">
            {NEWSLETTER_DATA.positioning}
          </p>
        </div>

        {/* Five Segments List */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-[#7D2419] font-bold uppercase tracking-wider text-center">
            FIVE STANDING SEGMENTS EVERY FORTNIGHT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {NEWSLETTER_DATA.segments.map((seg) => (
              <div key={seg.name} className="p-5 border border-[#171717]/15 bg-[#FFFDF9] space-y-2 shadow-sm">
                <span className="text-xs font-mono text-[#7D2419] font-bold block">{seg.name}</span>
                <p className="text-xs text-[#4A4235] font-sans">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Form */}
        <div className="p-8 border-2 border-[#7D2419] bg-[#FFFDF9] space-y-6 shadow-xl">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm font-mono text-[#171717] font-bold uppercase text-center">
                ENTER YOUR WORK EMAIL TO SUBSCRIBE
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 bg-[#F7F2E8] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] font-mono focus:outline-none focus:border-[#7D2419]"
                  required
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe Free →
                </Button>
              </div>
              <p className="text-[11px] font-mono text-[#4A4235] text-center">
                {NEWSLETTER_DATA.subscribeMicrocopy}
              </p>
            </form>
          ) : (
            <div className="text-center space-y-3 py-4">
              <CheckCircle2 className="w-8 h-8 text-[#7D2419] mx-auto" />
              <div className="font-serif-editorial text-2xl text-[#171717]">You're subscribed to The Clash Report.</div>
              <p className="text-xs font-mono text-[#4A4235]">The next issue will arrive in your inbox next fortnight.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
