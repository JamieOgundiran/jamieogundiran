import Link from 'next/link';
import { footerLinks, site, socialLinks } from '@/lib/data/site';

const linkClass = 'text-[0.95rem] text-muted transition-colors hover:text-foreground';

export function Footer() {
  return (
    <footer className="page-shell">
      <div className="flex justify-between gap-12 border-t border-border pb-10 pt-12 max-sm:flex-col max-sm:gap-10">
        <span className="font-heading text-[1.15rem] font-bold tracking-tight">{site.name}</span>

        <div className="flex gap-20 max-sm:gap-12">
          <ul className="flex flex-col gap-3">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('mailto:')
                    ? {}
                    : { target: '_blank', rel: 'noopener' })}
                  className={linkClass}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="pb-12 text-[0.85rem] text-accent">
        &copy; {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
