import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/blog-post-building-culturally-aware-ai.html',
        destination: '/blog/building-culturally-aware-ai',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // string form keeps the config serializable for Turbopack
    remarkPlugins: [['remark-gfm']],
  },
});

export default withMDX(nextConfig);
