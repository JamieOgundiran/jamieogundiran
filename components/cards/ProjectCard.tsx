import Image from 'next/image';
import type { Project } from '@/lib/types';
import { FormattedText } from '@/components/ui/FormattedText';
import { EntryHeader } from './EntryHeader';

export function ProjectCard({ project }: { project: Project }) {
  const name = project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener"
      className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
    >
      {project.name}
    </a>
  ) : (
    project.name
  );

  return (
    <article className="flex flex-col gap-5">
      {project.image && (
        /* Thumbnails are screenshots and photos of differing sizes, so a fixed
           aspect box with object-cover keeps the grid on a common rhythm. */
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 460px"
            className="object-cover"
          />
        </div>
      )}

      <div>
        {/* Projects carry no date, so the right-hand slot names the kind of work. */}
        <EntryHeader title={name} meta={project.category} />
        <p className="mt-4 text-[0.95rem] text-muted">
          <FormattedText text={project.description} />
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <p className="eyebrow mt-3 text-accent">{project.technologies.join(' · ')}</p>
        )}
      </div>
    </article>
  );
}
