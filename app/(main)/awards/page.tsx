import type { Metadata } from 'next';
import { getAwards } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { EntryList } from '@/components/cards/EntryList';
import { AchievementCard } from '@/components/cards/AchievementCard';

export const metadata: Metadata = {
  title: 'Awards',
};

export default function AwardsPage() {
  return (
    <Reveal>
      <h1 className="mb-16">Awards</h1>
      <EntryList>
        {getAwards().map((award) => (
          <AchievementCard key={award.id} achievement={award} />
        ))}
      </EntryList>
    </Reveal>
  );
}
