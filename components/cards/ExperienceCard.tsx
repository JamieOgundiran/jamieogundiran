import Image from 'next/image';
import type { WorkExperience } from '@/lib/types';
import { formatDateRange } from '@/lib/format';
import { EntryHeader } from './EntryHeader';
import { HighlightsList } from './HighlightsList';

export function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const period = formatDateRange(experience.startDate, experience.endDate);
  const subtitle = [experience.role, experience.location].filter(Boolean).join(' · ');

  const name = experience.url ? (
    <a
      href={experience.url}
      target="_blank"
      rel="noopener"
      className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
    >
      {experience.company}
    </a>
  ) : (
    experience.company
  );

  return (
    <article>
      <EntryHeader
        title={
          <span className="inline-flex items-center gap-2.5">
            {experience.logo && (
              /* Decorative: the company name next to it already labels the link. */
              <Image
                src={experience.logo}
                alt=""
                /* The source is a square canvas with a wide mark, so the box has
                   to be taller than the mark's apparent height to match the text. */
                width={30}
                height={30}
                className="h-[30px] w-[30px] shrink-0 object-contain"
              />
            )}
            {name}
          </span>
        }
        meta={period}
      />
      {subtitle && <p className="mt-4 text-[0.95rem] text-muted">{subtitle}</p>}
      <HighlightsList items={experience.highlights} />
    </article>
  );
}
