import Image from 'next/image';
import { site, socialLinks } from '@/lib/data/site';

export function Intro() {
  return (
    <section className="flex gap-14 max-md:flex-col max-md:gap-10">
      <Image
        src={site.image}
        alt={site.name}
        /* Both dimensions are pinned at every breakpoint: Next warns when CSS
           overrides only one of them, and object-cover keeps the crop clean. */
        width={300}
        height={375}
        priority
        className="h-[375px] w-[300px] shrink-0 rounded-xl object-cover max-lg:h-[300px] max-lg:w-[240px] max-md:h-[360px] max-md:w-full max-md:max-w-[300px]"
      />

      <div className="min-w-0">
        <h1 className="mb-8">{site.name}</h1>

        <p className="text-muted">
          AI engineer working at the intersection of{' '}
          <strong className="font-semibold text-foreground">
            agents and physical AI
          </strong>
          . Ex Member of Technical Staff at{' '}
          <a
            href="https://aci.dev"
            target="_blank"
            rel="noopener"
            className="underline decoration-border decoration-1 underline-offset-4 hover:decoration-foreground"
          >
            ACI.dev
          </a>{' '}
          (Applied AI lab), building open-source agent infrastructure, and moving toward
          robotics.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noopener' })}
              className="text-[0.95rem] underline decoration-border decoration-1 underline-offset-4 hover:decoration-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
