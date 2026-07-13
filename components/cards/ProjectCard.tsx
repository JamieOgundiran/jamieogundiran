import Image from 'next/image';
import type { Project } from '@/lib/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener"
      className="group block cursor-pointer bg-transparent"
    >
      <div className="relative h-[240px] overflow-hidden rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 after:absolute after:inset-0 after:rounded-[12px] after:bg-black/40 after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] group-hover:after:opacity-100 max-[576px]:h-[180px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 350px"
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="bg-transparent px-2 pt-5">
        <h3 className="mb-[0.6rem] text-[1.4rem] font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="text-[0.9rem] leading-normal text-muted">
          {project.description}
        </p>
      </div>
    </a>
  );
}
