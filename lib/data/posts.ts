import fs from 'fs';
import path from 'path';
import type { PostMeta } from '@/lib/types';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/** Add a post by dropping an .mdx file into content/blog/ with a `meta` export. */
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getPosts(): Promise<{ slug: string; meta: PostMeta }[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const { meta } = await import(`@/content/blog/${slug}.mdx`);
      return { slug, meta: meta as PostMeta };
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.meta.publishedDate).getTime() -
      new Date(a.meta.publishedDate).getTime()
  );
}
