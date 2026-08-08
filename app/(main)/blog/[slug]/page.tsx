import type { Metadata } from 'next';
import Link from 'next/link';
import type { PostMeta } from '@/lib/types';
import { getPostSlugs } from '@/lib/data/posts';
import { formatDate } from '@/lib/format';

type PostParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

// Only the slugs above exist; anything else 404s without hitting the import.
export const dynamicParams = false;

// `params` is a Promise in Next 16 — synchronous access was removed.
export async function generateMetadata({ params }: PostParams): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
    meta: PostMeta;
  };

  return { title: meta.title, description: meta.excerpt };
}

export default async function BlogPostPage({ params }: PostParams) {
  const { slug } = await params;
  const { default: Post, meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
    meta: PostMeta;
  };

  return (
    <article className="max-w-[46rem]">
      <Link href="/blog" className="eyebrow text-accent hover:text-foreground">
        &larr; Blog
      </Link>

      <h1 className="mt-8 mb-5 text-[clamp(1.9rem,3.6vw,2.7rem)]">{meta.title}</h1>

      <p className="eyebrow text-accent">
        {[formatDate(meta.publishedDate), meta.readTime, meta.category]
          .filter(Boolean)
          .join(' · ')}
      </p>

      <div className="mt-12">
        <Post />
      </div>
    </article>
  );
}
