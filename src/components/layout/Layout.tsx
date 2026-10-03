import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { TrustStrip } from './TrustStrip';
import { CookieNotice } from '@/components/common/CookieNotice';
import { NewsletterDock } from '@/components/common/NewsletterDock';
import { MotionProvider } from '@/components/common/MotionProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-ivory text-graphite">
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <TrustStrip />
        <Footer />
        <CookieNotice />
        <NewsletterDock />
      </div>
    </MotionProvider>
  );
};
