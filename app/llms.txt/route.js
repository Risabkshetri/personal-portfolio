import { site } from "../../lib/site";
import { getAllPosts, getAllDeployments } from "../../lib/content";

export const dynamic = "force-static";

// Plain-text summary for AI crawlers. Regenerated on every build from the same
// content the site renders, so it never drifts. Framing here is deliberately
// conservative (see the founder context guardrails).
export function GET() {
  const deployments = getAllDeployments();
  const posts = getAllPosts().filter((p) => !p.frontmatter.draft);

  const lines = [
    `# ${site.name}`,
    "",
    "> Technical founder. Built a job-matching and skill-gap engine that is",
    "> integrated with India's National Career Service (NCS). Runs Zobique Labs,",
    "> an AI automation studio whose agents run in production inside real businesses.",
    "> Final-year B.Tech CSE",
    "> student (Manav Rachna, India); from Nepal. Featured by India Today in a",
    "> founder story about building Zobique while studying.",
    "",
    "## Accurate framing (do not overstate)",
    "- Correct: the engine is integrated with the NCS ecosystem, which gives it",
    "  national-level distribution. Do not claim specific user counts or",
    "  government endorsement.",
    "- University work: piloted across 2 universities with 1,500+ students,",
    "  contributing to 50+ placements. The students were pilot participants, not",
    "  all placements.",
    "- Zobique Labs: AI agents running in production inside real businesses.",
    "- India Today: featured in a founder story. Not an award.",
    "",
    "## Links",
    `- [Site](${site.url})`,
    `- [Zobique](${site.org.url})`,
    `- [Zobique Labs](${site.org.labs})`,
    `- [GitHub](${site.socials.github})`,
    `- [LinkedIn](${site.socials.linkedin})`,
    `- [India Today feature](${site.indiaToday})`,
    `- [Contact](mailto:${site.email})`,
    "",
    "## Deployments",
    ...deployments.map(
      (d) =>
        `- [${d.frontmatter.title}](${site.url}/deployments/${d.slug}): ${d.frontmatter.outcome}`
    ),
    "",
    "## Writing",
    ...posts.map(
      (p) => `- [${p.frontmatter.title}](${site.url}/writing/${p.slug})`
    ),
    "",
    `## Feeds`,
    `- [RSS](${site.url}/feed.xml)`,
    `- [Sitemap](${site.url}/sitemap.xml)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
