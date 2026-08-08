import type { Achievement } from '@/lib/types';
import { FormattedText } from '@/components/ui/FormattedText';
import { EntryHeader } from './EntryHeader';
import { HighlightsList } from './HighlightsList';

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const subtitle = [achievement.subtitle, achievement.location]
    .filter(Boolean)
    .join(' · ');

  return (
    <article>
      <EntryHeader
        title={
          achievement.linkedinUrl ? (
            <a
              href={achievement.linkedinUrl}
              target="_blank"
              rel="noopener"
              className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
            >
              {achievement.title}
            </a>
          ) : (
            achievement.title
          )
        }
        meta={achievement.period}
      />
      {subtitle && <p className="mt-4 text-[0.95rem] text-muted">{subtitle}</p>}
      {achievement.description && (
        <p className="mt-3 text-[0.95rem] text-muted">
          <FormattedText text={achievement.description} />
        </p>
      )}
      <HighlightsList items={achievement.highlights} />
    </article>
  );
}
