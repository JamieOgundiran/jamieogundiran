import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatedBackground } from '@/components/layout/AnimatedBackground';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/motion/MotionProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jamie Ogundiran',
    template: '%s · Jamie Ogundiran',
  },
  description:
    'Jamie Ogundiran — Founder @ Stealth. Building the business context layer for AI agents. 4x hackathon winner, judge, speaker, and panelist at AI events across Europe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AnimatedBackground />
        <Nav />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
