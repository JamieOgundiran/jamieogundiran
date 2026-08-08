/**
 * Projects are the one section with visual artifacts, so they get a real grid
 * rather than the single-column entry list the text sections use.
 */
export function ProjectGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 items-start gap-x-10 gap-y-14 max-md:grid-cols-1 max-md:gap-y-12">
      {children}
    </div>
  );
}
