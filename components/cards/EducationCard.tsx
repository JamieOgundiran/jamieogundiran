import Image from 'next/image';
import type { Education } from '@/lib/types';
import { formatDateRange } from '@/lib/format';
import { EntryHeader } from './EntryHeader';
import { HighlightsList } from './HighlightsList';

export function EducationCard({ education }: { education: Education }) {
  const period = formatDateRange(education.startDate, education.endDate);
  const subtitle = [education.institution, education.location]
    .filter(Boolean)
    .join(' · ');

  return (
    <article>
      <EntryHeader
        title={
          <span className="inline-flex items-center gap-2.5">
            {education.logo && (
              <Image
                src={education.logo}
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-[30px] shrink-0 object-contain"
              />
            )}
            {education.degree}
          </span>
        }
        meta={period}
      />
      {subtitle && <p className="mt-4 text-[0.95rem] text-muted">{subtitle}</p>}
      <HighlightsList items={education.highlights} />
    </article>
  );
}
