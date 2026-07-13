import type { Achievement } from '@/lib/types';
import { CardArrow } from '@/components/ui/CardArrow';
import { FormattedText } from '@/components/ui/FormattedText';
import { HighlightsList } from './HighlightsList';

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const body = (
    <>
      <div className="mb-4 flex items-center justify-between text-[1.75rem] font-semibold">
        {achievement.title}
        {achievement.linkedinUrl && <CardArrow />}
      </div>
      {achievement.subtitle && (
        <p className="mb-[0.35rem] text-[1.1rem] font-medium text-muted">
          {achievement.subtitle}
        </p>
      )}
      {achievement.location && (
        <p className="mb-3 text-[0.95rem] text-muted">{achievement.location}</p>
      )}
      {achievement.description && (
        <p className="mb-4 max-w-[80%] text-[1.1rem] leading-relaxed text-muted">
          <FormattedText text={achievement.description} />
        </p>
      )}
      <HighlightsList items={achievement.highlights} />
      {achievement.period && (
        <p className="text-[0.9rem] text-accent">{achievement.period}</p>
      )}
    </>
  );

  if (achievement.linkedinUrl) {
    return (
      <a
        href={achievement.linkedinUrl}
        target="_blank"
        rel="noopener"
        className="group relative block cursor-pointer pt-8 text-inherit transition-all duration-300 hover:translate-x-[10px]"
      >
        {body}
      </a>
    );
  }

  return (
    <div className="relative pt-8 transition-all duration-300">
      {body}
    </div>
  );
}
