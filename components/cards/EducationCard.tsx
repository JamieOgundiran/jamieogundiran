import type { Education } from '@/lib/types';
import { formatDateRange } from '@/lib/format';
import { HighlightsList } from './HighlightsList';

export function EducationCard({ education }: { education: Education }) {
  const period = formatDateRange(education.startDate, education.endDate);

  return (
    <div className="relative pt-8 transition-all duration-300">
      <div className="mb-4 flex items-center justify-between text-[1.75rem] font-semibold">
        {education.degree}
      </div>
      <p className="mb-[0.35rem] text-[1.1rem] font-medium text-muted">
        {education.institution}
      </p>
      {education.location && (
        <p className="mb-3 text-[0.95rem] text-muted">{education.location}</p>
      )}
      {period && <p className="text-[0.9rem] text-accent">{period}</p>}
      <HighlightsList items={education.highlights} />
    </div>
  );
}
