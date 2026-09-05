import { site } from "../lib/site";
import { getAllPosts, getAllDeployments } from "../lib/content";

export default function sitemap() {
  const staticRoutes = ["", "/deployments", "/writing", "/now", "/about", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" || path === "/now" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const deployments = getAllDeployments().map((d) => ({
    url: `${site.url}/deployments/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/writing/${p.slug}`,
    lastModified: new Date(p.frontmatter.updated || p.frontmatter.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...deployments, ...posts];
}
