import type { WorkExperience } from '@/lib/types';
import { formatDateRange } from '@/lib/format';
import { HighlightsList } from './HighlightsList';

export function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const period = formatDateRange(experience.startDate, experience.endDate);

  return (
    <div className="relative border-t border-border pt-8 transition-all duration-300">
      <div className="mb-4 flex items-center justify-between text-[1.75rem] font-semibold">
        {experience.company}
      </div>
      <p className="mb-[0.35rem] text-[1.1rem] font-medium text-muted">
        {experience.role}
      </p>
      {experience.location && (
        <p className="mb-3 text-[0.95rem] text-muted">{experience.location}</p>
      )}
      {period && <p className="text-[0.9rem] text-accent">{period}</p>}
      <HighlightsList items={experience.highlights} />
    </div>
  );
}
