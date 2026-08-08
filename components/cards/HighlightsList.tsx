import { FormattedText } from '@/components/ui/FormattedText';

export function HighlightsList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 text-[0.95rem] text-muted marker:text-border">
      {items.map((item) => (
        <li key={item}>
          <FormattedText text={item} />
        </li>
      ))}
    </ul>
  );
}
