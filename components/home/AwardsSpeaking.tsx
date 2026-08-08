import Link from 'next/link';
import type { Achievement } from '@/lib/types';
import { getAwards, getSpeaking } from '@/lib/data/portfolio';
import { formatDate } from '@/lib/format';

const yearOnly: Intl.DateTimeFormatOptions = { year: 'numeric' };

/** Venues are stored as "City, Country"; the city alone is enough here. */
function city(location?: string) {
  return location ? location.split(',')[0].trim() : '';
}

function Column({
  label,
  href,
  items,
  meta,
}: {
  label: string;
  href: string;
  items: Achievement[];
  meta: (item: Achievement) => string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <p className="eyebrow text-accent">{label}</p>
        <Link
          href={href}
          className="eyebrow text-accent transition-colors hover:text-foreground"
        >
          All
        </Link>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-baseline justify-between gap-5 border-b border-border py-[0.6rem] last:border-b-0"
        >
          <span className="text-[0.92rem] leading-snug text-foreground">
            {item.linkedinUrl ? (
              <a
                href={item.linkedinUrl}
                target="_blank"
                rel="noopener"
                className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </span>
          <span className="eyebrow shrink-0 whitespace-nowrap text-accent">
            {meta(item)}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AwardsSpeaking() {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-md:grid-cols-1">
      <Column
        label="Awards"
        href="/awards"
        items={getAwards()}
        meta={(item) => formatDate(item.date, yearOnly)}
      />
      <Column
        label="Speaking & judging"
        href="/speaking"
        items={getSpeaking()}
        meta={(item) => city(item.location) || formatDate(item.date, yearOnly)}
      />
    </div>
  );
}
