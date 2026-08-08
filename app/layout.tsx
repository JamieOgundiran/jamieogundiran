import type { Metadata } from 'next';
import { Lora, Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/motion/MotionProvider';

// Both are variable fonts, so neither needs an explicit weight.
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jamie Ogundiran',
    template: '%s · Jamie Ogundiran',
  },
  description:
    "Jamie Ogundiran — Award-winning AI builder and four-time hackathon winner, building culturally aware AI systems and agent infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var stored=localStorage.getItem('theme');var theme=stored==='light'||stored==='dark'?stored:'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(error){document.documentElement.dataset.theme='light';document.documentElement.style.colorScheme='light';}})();`}
        </Script>
        <Nav />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
