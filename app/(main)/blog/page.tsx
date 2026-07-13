import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/cards/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Reveal>
      <section className="mb-[120px]">
        <SectionHeading highlight="RECENT" rest="BLOG POSTS" />
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-md:grid-cols-1 max-md:gap-6">
          {posts.map(({ slug, meta }) => (
            <BlogCard key={slug} slug={slug} meta={meta} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
