/**
 * Title on the left, date on the right, with the rule underneath both. The rule
 * belongs to the entry rather than sitting between entries, so EntryList
 * separates them with whitespace alone.
 */
export function EntryHeader({
  title,
  meta,
}: {
  title: React.ReactNode;
  meta?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3 max-sm:flex-col max-sm:items-start max-sm:gap-1">
      <h3>{title}</h3>
      {meta && <span className="eyebrow shrink-0 text-accent">{meta}</span>}
    </div>
  );
}
