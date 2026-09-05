import { site } from "../../lib/site";
import { getAllPosts } from "../../lib/content";

function esc(s = "") {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c])
  );
}

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts().filter((p) => !p.frontmatter.draft);
  const updated = posts[0]
    ? new Date(posts[0].frontmatter.updated || posts[0].frontmatter.date)
    : new Date();

  const items = posts
    .map((p) => {
      const url = `${site.url}/writing/${p.slug}`;
      return `    <item>
      <title>${esc(p.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
      <description>${esc(p.frontmatter.summary || "")}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)}: Writing</title>
    <link>${site.url}/writing</link>
    <description>${esc(site.shortBio)}</description>
    <language>en</language>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
