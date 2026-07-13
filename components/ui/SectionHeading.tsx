export function SectionHeading({
  highlight,
  rest,
}: {
  highlight: string;
  rest: string;
}) {
  const words = [highlight, rest]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .split(' ');

  return (
    <h1 className="mb-10">
      <span className="px-[0.2rem] font-bold">{words[0]}</span>
      {words.length > 1 ? ` ${words.slice(1).join(' ')}` : null}
    </h1>
  );
}
