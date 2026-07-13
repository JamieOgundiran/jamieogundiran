export function CardArrow() {
  return (
    <svg
      className="h-6 w-6 transition-all duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px] group-hover:text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
