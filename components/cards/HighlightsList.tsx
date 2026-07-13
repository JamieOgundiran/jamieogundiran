export function HighlightsList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="mb-6 ml-5 mt-4 list-disc text-base leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
