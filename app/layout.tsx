import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Outfit, Syne } from 'next/font/google';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
export { metadata, viewport } from './seo';

import './globals.css';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes on <html>/<body>
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="ambientOrb ambientOrbA" aria-hidden />
        <div className="ambientOrb ambientOrbB" aria-hidden />
        {children}
        <Navbar />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
