import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { styles } from "../../../lib/styles";
import { site } from "../../../lib/site";
import { getAllPosts, getPost } from "../../../lib/content";
import Mdx from "../../../components/Mdx";
import JsonLd from "../../../components/JsonLd";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { title, summary, date, updated } = post.frontmatter;
  return {
    title,
    description: summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description: summary,
      url: `${site.url}/writing/${post.slug}`,
      publishedTime: new Date(date).toISOString(),
      modifiedTime: updated ? new Date(updated).toISOString() : undefined,
    },
  };
}

function fmt(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { title, date, updated, summary } = post.frontmatter;
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx < all.length - 1 ? all[idx + 1] : null;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(updated || date).toISOString(),
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/writing/${post.slug}`,
  };

  return (
    <article className={`${styles.container} py-16 sm:py-24`}>
      <JsonLd data={ld} />

      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-[14px] text-secondary hover:text-accent"
      >
        <ArrowLeft size={15} /> Writing
      </Link>

      <header className="mt-6 max-w-prose">
        <h1 className="font-serif text-[32px] font-semibold leading-tight text-black-100 sm:text-[40px]">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-secondary">
          <time dateTime={new Date(date).toISOString()}>{fmt(date)}</time>
          <span className="text-black-100/30">·</span>
          <span>{post.readingTime}</span>
          {updated && (
            <>
              <span className="text-black-100/30">·</span>
              <span>Last updated {fmt(updated)}</span>
            </>
          )}
        </div>
      </header>

      <div className="mt-10 max-w-prose">
        <Mdx source={post.body} />
      </div>

      <nav className="mt-16 flex max-w-prose justify-between gap-6 border-t border-black-100/10 pt-6 text-[14px]">
        {older ? (
          <Link href={`/writing/${older.slug}`} className="text-accent hover:text-accent-dark">
            ← {older.frontmatter.title}
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link
            href={`/writing/${newer.slug}`}
            className="text-right text-accent hover:text-accent-dark"
          >
            {newer.frontmatter.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
