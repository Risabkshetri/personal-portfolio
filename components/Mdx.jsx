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
  // A simple labelled figure for architecture diagrams (SVG / image / ascii).
  Figure: ({ caption, children }) => (
    <figure className="my-8">
      <div className="overflow-x-auto border border-black-100/10 bg-white p-5">
        {children}
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
