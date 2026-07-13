import type { Metadata } from 'next';
import { getFeaturedAchievements } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AchievementCard } from '@/components/cards/AchievementCard';

export const metadata: Metadata = {
  title: 'Achievements',
};

export default function AchievementsPage() {
  return (
    <Reveal>
      <section className="mb-[120px]">
        <SectionHeading highlight="RECENT" rest="ACHIEVEMENTS" />
        <div className="flex flex-col gap-8">
          {getFeaturedAchievements().map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
