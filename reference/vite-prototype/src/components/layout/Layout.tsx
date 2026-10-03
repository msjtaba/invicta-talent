import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { TrustStrip } from './TrustStrip';
import { CookieNotice } from '@/components/common/CookieNotice';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#E8DDC8] text-[#171717] selection:bg-[#7D2419] selection:text-[#E8DDC8]">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <TrustStrip />
      <Footer />
      <CookieNotice />
    </div>
  );
};
