import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import localFont from 'next/font/local';
import { Layout } from '@/components/layout/Layout';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const arial = localFont({
  src: [
    { path: '../fonts/arial/ARIALMTLIGHT.woff', weight: '300', style: 'normal' },
    { path: '../fonts/arial/ARIALMTLIGHTITALIC.woff', weight: '300', style: 'italic' },
    { path: '../fonts/arial/arialmt.woff', weight: '400', style: 'normal' },
    { path: '../fonts/arial/ARIALMTITALIC.woff', weight: '400', style: 'italic' },
    { path: '../fonts/arial/ARIALMTMEDIUM.woff', weight: '500', style: 'normal' },
    { path: '../fonts/arial/ARIALMTMEDIUMITALIC.woff', weight: '500', style: 'italic' },
    { path: '../fonts/arial/ARIALBOLDMT.woff', weight: '700', style: 'normal' },
    { path: '../fonts/arial/ARIALBOLDITALICMT.woff', weight: '700', style: 'italic' },
  ],
  variable: '--font-arial',
  fallback: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: 'Invicta-Talent — Trained on Real Projects',
    template: '%s — Invicta-Talent',
  },
  description:
    'Role-based BIM certification taught by practitioners currently delivering aviation, giga-project, hospitality and healthcare programmes across the GCC.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${anton.variable} ${arial.variable}`}>
      <body className="bg-ivory text-graphite font-sans antialiased overflow-x-hidden min-h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
