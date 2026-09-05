import Link from "next/link";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PostCard({ slug, frontmatter, readingTime }) {
  return (
    <Link
      href={`/writing/${slug}`}
      className="group flex flex-col border-b border-black-100/10 py-6 transition-colors first:border-t hover:border-accent"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[20px] font-semibold text-black-100 group-hover:text-accent">
          {frontmatter.title}
          {frontmatter.draft && (
            <span className="ml-2 align-middle text-[11px] uppercase tracking-wider text-secondary">
              draft
            </span>
          )}
        </h3>
        <span className="shrink-0 text-[13px] text-secondary">
          {formatDate(frontmatter.date)}
        </span>
      </div>
      {frontmatter.summary && (
        <p className="mt-2 text-[15px] leading-[1.7] text-secondary">
          {frontmatter.summary}
        </p>
      )}
      {readingTime && (
        <span className="mt-2 text-[12px] uppercase tracking-[0.14em] text-black-100/40">
          {readingTime}
        </span>
      )}
    </Link>
  );
}
