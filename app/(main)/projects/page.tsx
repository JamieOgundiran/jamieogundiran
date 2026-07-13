import type { Metadata } from 'next';
import { getFeaturedProjects } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/cards/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <Reveal>
      <section className="mb-[120px]">
        <SectionHeading highlight="RECENT" rest="PROJECTS" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 max-lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-md:gap-6 max-[576px]:grid-cols-1">
          {getFeaturedProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
