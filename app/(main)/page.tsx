import { getFeaturedProjects } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { Intro } from '@/components/layout/Intro';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGrid } from '@/components/cards/ProjectGrid';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { NowNote } from '@/components/home/NowNote';
import { CompactTimeline } from '@/components/home/CompactTimeline';
import { AwardsSpeaking } from '@/components/home/AwardsSpeaking';

/**
 * Each section deliberately takes a different shape — strip, log, entry list,
 * timeline, two columns. The uniform reverse-chronological list is what made
 * the page read as a CV.
 */
export default function HomePage() {
  return (
    <>
      <Reveal>
        <Intro />
      </Reveal>

      <Reveal>
        <section className="mt-28">
          <SectionHeading title="What I'm working on" />
          <NowNote />
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-28">
          <SectionHeading title="Things I've built" />
          <ProjectGrid>
            {getFeaturedProjects(4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectGrid>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-28">
          <SectionHeading title="Path" />
          <CompactTimeline />
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-28">
          <AwardsSpeaking />
        </section>
      </Reveal>
    </>
  );
}
