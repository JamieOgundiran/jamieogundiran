import Image from 'next/image';
import Link from 'next/link';
import type { PostMeta } from '@/lib/types';

export function PostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  const formattedDate = new Date(meta.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative z-[1] mx-auto w-full max-w-[900px] px-8 max-md:px-4">
      <div className="w-full py-8 max-md:py-4">
        <article className="mx-auto max-w-[800px] py-8 max-md:py-4">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.9rem] text-muted transition-colors hover:text-foreground"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="relative mb-8 h-[400px] overflow-hidden rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-md:h-[250px]">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 max-md:flex-col max-md:items-start max-md:gap-3">
            <span className="rounded-[20px] bg-[#888888] px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-[0.5px] text-background">
              {meta.category}
            </span>
            <div className="flex gap-6 text-[0.9rem] font-medium text-muted">
              <span>{formattedDate}</span>
              <span>{meta.readTime}</span>
            </div>
          </div>

          <h1 className="mb-6 text-[3rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground max-md:text-[2.25rem] max-[480px]:text-[1.875rem]">
            {meta.title}
          </h1>

          <p className="mb-12 rounded-r-lg border-l-4 border-[#888888] bg-[rgba(136,136,136,0.05)] p-6 text-[1.3rem] italic leading-normal text-muted max-md:p-4 max-md:text-[1.125rem]">
            {meta.excerpt}
          </p>

          <div className="prose-post">{children}</div>

          <footer className="mt-12 flex flex-wrap items-start justify-between gap-8 border-t-2 border-border pt-8 max-md:flex-col max-md:gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/jamieo.jpg"
                alt={meta.author}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border-2 border-border object-cover max-[480px]:h-14 max-[480px]:w-14"
              />
              <div>
                <h3 className="mb-1 text-[1.125rem] font-semibold text-foreground">
                  {meta.author}
                </h3>
                {meta.authorTitle && (
                  <p className="text-[0.9rem] text-muted">{meta.authorTitle}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-start gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[20px] border border-border bg-[rgba(136,136,136,0.1)] px-4 py-2 text-[0.85rem] font-medium text-muted transition-all hover:border-accent hover:bg-[rgba(136,136,136,0.2)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
