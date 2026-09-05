import { styles } from "../../lib/styles";
import { getAllPosts, WRITING_STREAMS } from "../../lib/content";
import PageHeader from "../../components/PageHeader";
import PostCard from "../../components/PostCard";

export const metadata = {
  title: "Writing",
  description:
    "Engineering write-ups, field notes from deploying AI into Indian businesses, and research on career technology.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className={`${styles.container} py-16 sm:py-24`}>
      <PageHeader kicker="Index" title="Writing">
        <p>
          Everything lives here first, at{" "}
          <code className="text-[14px]">rishabchhetri.in/writing/…</code>.
          Cross-posts elsewhere point back to the canonical version.
        </p>
      </PageHeader>

      {WRITING_STREAMS.map((stream) => {
        const streamPosts = posts.filter(
          (p) => p.frontmatter.stream === stream.id
        );
        if (streamPosts.length === 0) return null;
        return (
          <section key={stream.id} className="mb-16">
            <h2 className="font-serif text-[22px] font-semibold text-black-100">
              {stream.title}
            </h2>
            <p className="mt-1 text-[14px] text-secondary">{stream.blurb}</p>
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
