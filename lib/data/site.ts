/**
 * Single source of truth for identity and links, so the nav, intro and footer
 * can never drift apart.
 */
export const site = {
  name: 'Jamie Ogundiran',
  title: 'AI engineer · working toward robotics',
  image: '/images/jamie_profile.jpeg',
  email: 'jamieogundiran@gmail.com',
};

/** Header nav — deliberately kept to two entries. */
export const navLinks = [
  { href: '/', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

/**
 * The footer carries the detail pages too. They are reachable from the
 * homepage sections, but without a footer entry they would be unreachable from
 * anywhere else on the site.
 */
export const footerLinks = [
  ...navLinks,
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: "Things I've built" },
  { href: '/awards', label: 'Awards' },
  { href: '/speaking', label: 'Speaking' },
];

export const socialLinks = [
  { href: 'https://www.linkedin.com/in/jamie-ogundiran-874aa3230/', label: 'LinkedIn' },
  { href: 'https://github.com/JamieOgun', label: 'GitHub' },
  { href: 'https://x.com/JamieOgundiran', label: 'Twitter' },
  { href: `mailto:${site.email}`, label: 'Email' },
];
