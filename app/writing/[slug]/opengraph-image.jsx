import { ImageResponse } from "next/og";
import { site } from "../../../lib/site";
import { getAllPosts, getPost } from "../../../lib/content";

export const alt = "Writing · Rishab Chhetri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.frontmatter.title || "Writing";
  const date = post
    ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F6EF",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 20, height: 20, background: "#FF6600" }} />
          <div style={{ fontSize: 26, color: "#828282" }}>
            {`${site.domain}/writing`}
          </div>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#222222",
            lineHeight: 1.15,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#555555" }}>
          {date ? `Rishab Chhetri · ${date}` : "Rishab Chhetri"}
        </div>
      </div>
    ),
    { ...size }
  );
}
