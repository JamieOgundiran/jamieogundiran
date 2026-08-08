import type { Metadata } from 'next';
import { getFeaturedProjects } from '@/lib/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectGrid } from '@/components/cards/ProjectGrid';
import { ProjectCard } from '@/components/cards/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <Reveal>
      <h1 className="mb-16">Things I&apos;ve built</h1>
      <ProjectGrid>
        {getFeaturedProjects().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </Reveal>
  );
}
