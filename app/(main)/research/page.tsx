import type { Metadata } from 'next';
import { getFeaturedResearch } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResearchCard } from '@/components/cards/ResearchCard';

export const metadata: Metadata = {
  title: 'Research',
};

export default function ResearchPage() {
  return (
    <Reveal>
      <section className="mb-[120px]">
        <SectionHeading highlight="RECENT" rest="RESEARCH" />
        <div className="flex flex-col gap-8">
          {getFeaturedResearch().map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
