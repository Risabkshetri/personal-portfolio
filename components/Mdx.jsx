import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const components = {
  a: ({ href = "", children, ...props }) => {
    const internal = href.startsWith("/") || href.startsWith("#");
    if (internal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  // Wide markdown tables get their own scroll container so a 4-5 column
  // table scrolls horizontally instead of being clipped by the body's
  // `overflow-x: hidden` on narrow screens.
  table: (props) => (
    <div className="prose-scroll">
      <table {...props} />
    </div>
  ),
  // A simple labelled figure for architecture diagrams (SVG / image / ascii).
  // Pass `src` (+ optional `alt`) to render an image, or nest children for
  // inline SVG / ascii diagrams.
  Figure: ({ caption, src, alt = "", children }) => (
    <figure className="my-8">
      <div className="prose-scroll border border-black-100/10 bg-white p-5">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="mx-auto block h-auto max-w-full" />
        ) : (
          children
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-[13px] text-secondary">{caption}</figcaption>
      )}
    </figure>
  ),
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { className: ["heading-anchor"], ariaHidden: true, tabIndex: -1 },
          content: { type: "text", value: "#" },
        },
      ],
    ],
  },
};

export default function Mdx({ source }) {
  return (
    <div className="prose-body">
      <MDXRemote source={source} components={components} options={options} />
    </div>
  );
}
