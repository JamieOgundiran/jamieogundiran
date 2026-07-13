import type { Metadata } from 'next';
import { getPostSlugs } from '@/lib/posts';
import type { PostMeta } from '@/lib/types';
import { PostLayout } from '@/components/blog/PostLayout';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
    meta: PostMeta;
  };
  return {
    title: meta.title,
    description: meta.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, meta } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <PostLayout meta={meta}>
      <Post />
    </PostLayout>
  );
}
