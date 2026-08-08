'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { navLinks, site } from '@/lib/data/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="page-shell flex items-center justify-between gap-10 py-8 max-md:flex-col max-md:items-start max-md:gap-5 max-md:py-6">
      <Link href="/" className="font-heading text-[1.25rem] font-bold tracking-tight">
        {site.name}
      </Link>

      <nav className="flex items-center gap-8 max-md:flex-wrap max-md:gap-x-6 max-md:gap-y-3">
        {navLinks.map(({ href, label }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`eyebrow ${
                active
                  ? 'text-foreground underline decoration-1 underline-offset-[6px]'
                  : 'text-accent hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
