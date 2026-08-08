import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

/**
 * Prose styling for MDX posts. The site has no global prose styles — headings
 * and body copy are styled per-component — so the article elements are dressed
 * here rather than with a utility plugin.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-14 mb-5 text-[1.6rem]" {...props} />,
    h3: (props) => <h3 className="mt-10 mb-4 text-[1.2rem]" {...props} />,
    h4: (props) => (
      <h4 className="mt-8 mb-3 text-[1.02rem] font-semibold" {...props} />
    ),
    p: (props) => <p className="mb-5 text-muted" {...props} />,
    ul: (props) => (
      <ul
        className="mb-6 flex list-disc flex-col gap-2 pl-5 text-muted marker:text-border"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mb-6 flex list-decimal flex-col gap-2 pl-5 text-muted marker:text-border"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    a: (props) => (
      <a
        className="underline decoration-border decoration-1 underline-offset-4 hover:decoration-foreground"
        target={props.href?.startsWith('http') ? '_blank' : undefined}
        rel={props.href?.startsWith('http') ? 'noopener' : undefined}
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-8 border-l-2 border-border pl-6 text-muted italic"
        {...props}
      />
    ),
    // Tables come from remark-gfm; they scroll rather than widen the page.
    table: (props) => (
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse text-[0.9rem]" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b border-border px-3 py-2 text-left font-semibold whitespace-nowrap"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border-b border-border px-3 py-2 text-muted tabular-nums"
        {...props}
      />
    ),
    img: ({ src, alt }) => (
      <Image
        src={typeof src === 'string' ? src : ''}
        alt={alt ?? ''}
        width={1200}
        height={700}
        className="my-8 h-auto w-full rounded-lg border border-border"
      />
    ),
    ...components,
  };
}
