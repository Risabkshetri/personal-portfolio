import { styles } from "../../lib/styles";
import { site } from "../../lib/site";
import { getAllPosts, WRITING_STREAMS } from "../../lib/content";
import PageHeader from "../../components/PageHeader";
import PostCard from "../../components/PostCard";
import Breadcrumbs from "../../components/Breadcrumbs";

const title = "Writing";
const description =
  "Engineering write-ups, field notes from deploying AI into Indian businesses, and research on career technology.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    title: `${title} · ${site.name}`,
    description,
    url: `${site.url}/writing`,
  },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <Breadcrumbs items={[{ label: "Writing", href: "/writing" }]} />
      <PageHeader title="Writing" />

      <nav
        aria-label="Writing streams"
        className="mb-14 grid grid-cols-3 divide-x divide-accent/25 border-y border-accent/40"
      >
        {WRITING_STREAMS.map((stream) => (
          <a
            key={stream.id}
            href={`#${stream.id}`}
            className="px-2 py-3 text-center text-[12px] font-medium text-secondary transition-colors hover:text-accent sm:px-4 sm:text-[14px]"
          >
            {stream.title}
          </a>
        ))}
      </nav>

      {WRITING_STREAMS.map((stream) => {
        const streamPosts = posts.filter(
          (p) => p.frontmatter.stream === stream.id
        );
        if (streamPosts.length === 0) return null;
        return (
          <section
            key={stream.id}
            id={stream.id}
            className="mb-16 scroll-mt-24 border-t border-accent/40 pt-6"
          >
            <div className="border-b border-accent/25 pb-4">
              <h2 className="font-serif text-[22px] font-semibold text-accent">
                {stream.title}
              </h2>
              <p className="mt-1 text-[14px] text-secondary">{stream.blurb}</p>
            </div>
            <div className="mt-4">
              {streamPosts.map((p) => (
                <PostCard key={p.slug} {...p} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="border-t border-black-100/10 pt-8">
        <h2 className="font-serif text-[18px] font-semibold text-black-100">
          Also written elsewhere
        </h2>
        <p className="mt-2 text-[14px] leading-[1.7] text-secondary">
          {/* TODO(rishab): decide, re-host the blog.zobique.com posts here with a
              canonical tag pointing home, or list them as external links. Listing
              a few as external for now. */}
          Earlier pieces on{" "}
          <a
            href="https://blog.zobique.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dark"
          >
            blog.zobique.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
