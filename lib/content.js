import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");
const isProd = process.env.NODE_ENV === "production";

function readCollection(name) {
  const dir = path.join(CONTENT_DIR, name);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data, body: content };
    });
}

// ---------- Writing ----------

export function getAllPosts() {
  return readCollection("writing")
    .filter((p) => (isProd ? !p.frontmatter.draft : true))
    .map((p) => ({
      ...p,
      readingTime: readingTime(p.body).text,
    }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getPost(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null;
}

export const WRITING_STREAMS = [
  {
    id: "engineering",
    title: "Engineering",
    blurb: "Architecture, postmortems, and the decisions behind them.",
  },
  {
    id: "field-notes",
    title: "Field notes",
    blurb:
      "What actually happens deploying AI into undocumented, people-run Indian businesses.",
  },
  {
    id: "research",
    title: "Research",
    blurb: "Benchmarks, datasets, and papers when they exist.",
  },
];

// ---------- Deployments ----------

export function getAllDeployments() {
  return readCollection("deployments").sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );
}

export function getDeployment(slug) {
  return getAllDeployments().find((d) => d.slug === slug) || null;
}
