export function SectionHeading({
  highlight,
  rest,
}: {
  highlight: string;
  rest: string;
}) {
  return (
    <h1 className="mb-10">
      <span className="px-[0.2rem] font-bold text-accent">{highlight}</span>
      <br />
      {rest}
    </h1>
  );
}
