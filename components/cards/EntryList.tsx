/**
 * Owns the vertical rhythm between entries. Each entry draws its own rule under
 * its title, so entries here are separated by space rather than by a divider.
 */
export function EntryList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-10">{children}</div>;
}
