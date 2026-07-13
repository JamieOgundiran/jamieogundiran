'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/achievements', label: 'Achievements' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative z-[2] flex items-center justify-center bg-transparent p-8 max-md:p-4">
      <nav className="relative">
        <div className="relative flex items-center gap-6 rounded-lg bg-background px-8 py-4 max-md:flex-wrap max-md:justify-center max-md:gap-4 max-md:px-4 max-md:py-3 max-[480px]:flex-col">
          <ul className="m-0 flex list-none gap-12 max-md:flex-wrap max-md:justify-center max-md:gap-6 max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-4">
          {links.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block py-3 text-base font-medium text-foreground transition-colors hover:text-accent max-md:py-2 max-md:text-sm ${
                    active ? 'text-accent' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
