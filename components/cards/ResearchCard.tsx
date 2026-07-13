import type { Research } from '@/lib/types';
import { formatDate } from '@/lib/format';
import { CardArrow } from '@/components/ui/CardArrow';

const shortDate: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };

export function ResearchCard({ research }: { research: Research }) {
  const period = `${formatDate(research.startDate, shortDate)} - ${formatDate(
    research.endDate,
    shortDate
  )}`;

  return (
    <a
      href={research.githubUrl}
      target="_blank"
      rel="noopener"
      className="group relative block cursor-pointer pt-8 text-inherit transition-all duration-300 hover:translate-x-[10px]"
    >
      <div className="mb-4 flex items-center justify-between text-[1.75rem] font-semibold">
        {research.title}
        <CardArrow />
      </div>
      <p className="mb-4 max-w-[80%] text-[1.1rem] leading-relaxed text-muted">
        {research.description}
      </p>
      <p className="text-[0.9rem] text-accent">{period}</p>
    </a>
  );
}
