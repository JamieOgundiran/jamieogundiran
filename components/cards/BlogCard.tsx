import Image from 'next/image';
import Link from 'next/link';
import type { PostMeta } from '@/lib/types';

export function BlogCard({ slug, meta }: { slug: string; meta: PostMeta }) {
  const formattedDate = new Date(meta.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block cursor-pointer overflow-hidden rounded-[12px] border border-border bg-surface text-inherit transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
    >
      <div className="relative h-[200px] w-full overflow-hidden max-md:h-[180px]">
        <Image
          src={meta.image}
          alt={meta.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 max-md:p-5">
        <div className="mb-4 flex items-center justify-between text-[0.85rem] font-medium text-muted">
          <span>{formattedDate}</span>
          <span>{meta.readTime}</span>
        </div>
        <h2 className="mb-3 text-[1.4rem] font-bold leading-tight text-foreground max-md:text-[1.2rem]">
          {meta.title}
        </h2>
        <p className="line-clamp-3 text-[0.95rem] leading-relaxed text-muted">
          {meta.excerpt}
        </p>
      </div>
    </Link>
  );
}
