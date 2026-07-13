import { FormattedText } from '@/components/ui/FormattedText';

export function HighlightsList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="mb-6 ml-5 mt-4 list-disc text-base leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="mb-2">
          <FormattedText text={item} />
        </li>
      ))}
    </ul>
  );
}
