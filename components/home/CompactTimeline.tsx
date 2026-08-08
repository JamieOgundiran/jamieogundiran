import Image from 'next/image';
import { getFeaturedEducation, getFeaturedExperience } from '@/lib/data/portfolio';
import { formatYearRange, getSortableDate } from '@/lib/format';

type Row = {
  id: string;
  main: string;
  sub: string;
  period: string;
  logo?: string;
  url?: string;
  endDate: string;
};

/**
 * Work and study interleaved on one spine. The homepage only needs the shape of
 * the path — /experience carries the bullets for anyone who wants them.
 */
export function CompactTimeline() {
  const rows: Row[] = [
    ...getFeaturedExperience().map((item) => ({
      id: item.id,
      main: item.company,
      sub: item.role,
      period: formatYearRange(item.startDate, item.endDate),
      logo: item.logo,
      url: item.url,
      endDate: item.endDate,
    })),
    ...getFeaturedEducation().map((item) => ({
      id: item.id,
      main: item.institution,
      sub: item.degree,
      period: formatYearRange(item.startDate, item.endDate),
      logo: item.logo,
      endDate: item.endDate,
    })),
  ].sort((a, b) => getSortableDate(b).getTime() - getSortableDate(a).getTime());

  return (
    <div className="flex flex-col">
      {rows.map(({ id, main, sub, period, logo, url }) => (
        <div
          key={id}
          className="grid grid-cols-[1.75rem_1fr_auto] items-center gap-x-4 border-b border-border py-4 last:border-b-0 max-sm:grid-cols-[1.75rem_1fr] max-sm:gap-y-1"
        >
          <span className="flex h-7 w-7 items-center justify-center">
            {logo && (
              <Image
                src={logo}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            )}
          </span>

          <p className="text-[0.98rem] leading-snug">
            <span className="font-semibold text-foreground">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
                >
                  {main}
                </a>
              ) : (
                main
              )}
            </span>{' '}
            <span className="text-muted">— {sub}</span>
          </p>

          <span className="eyebrow whitespace-nowrap text-accent max-sm:col-start-2">
            {period}
          </span>
        </div>
      ))}
    </div>
  );
}
