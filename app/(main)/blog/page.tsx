import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/lib/data/posts';
import { formatDate } from '@/lib/format';
import { Reveal } from '@/components/motion/Reveal';
import { EntryList } from '@/components/cards/EntryList';
import { EntryHeader } from '@/components/cards/EntryHeader';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Reveal>
      <h1 className="mb-16">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted">Nothing published yet — posts will appear here.</p>
      ) : (
        <EntryList>
          {posts.map(({ slug, meta }) => (
            <article key={slug}>
              <EntryHeader
                title={
                  <Link
                    href={`/blog/${slug}`}
                    className="underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-foreground"
                  >
                    {meta.title}
                  </Link>
                }
                meta={formatDate(meta.publishedDate)}
              />
              <p className="mt-4 text-[0.95rem] text-muted">{meta.excerpt}</p>
              {meta.readTime && (
                <p className="eyebrow mt-3 text-accent">{meta.readTime}</p>
              )}
            </article>
          ))}
        </EntryList>
      )}
    </Reveal>
  );
}
