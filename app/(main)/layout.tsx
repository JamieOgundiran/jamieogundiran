import { ProfileCard } from '@/components/layout/ProfileCard';
import { Reveal } from '@/components/motion/Reveal';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] max-lg:flex-col">
      <aside className="sticky top-0 flex h-screen w-[400px] flex-col items-center self-start overflow-y-auto p-8 max-lg:static max-lg:order-first max-lg:h-auto max-lg:w-full max-lg:self-auto max-lg:pb-4 max-md:p-4">
        <Reveal>
          <ProfileCard />
        </Reveal>
      </aside>
      <main className="w-[calc(100%-400px)] p-8 max-lg:w-full max-lg:p-6">
        {children}
      </main>
    </div>
  );
}
