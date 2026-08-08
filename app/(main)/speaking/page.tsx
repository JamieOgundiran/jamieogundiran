import type { Metadata } from 'next';
import { getSpeaking } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { EntryList } from '@/components/cards/EntryList';
import { AchievementCard } from '@/components/cards/AchievementCard';

export const metadata: Metadata = {
  title: 'Speaking',
};

export default function SpeakingPage() {
  return (
    <Reveal>
      <h1 className="mb-16">Speaking</h1>
      <EntryList>
        {getSpeaking().map((appearance) => (
          <AchievementCard key={appearance.id} achievement={appearance} />
        ))}
      </EntryList>
    </Reveal>
  );
}
