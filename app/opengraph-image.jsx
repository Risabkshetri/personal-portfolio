import { ImageResponse } from "next/og";
import { site } from "../lib/site";

export const alt = `${site.name}: AI systems that get deployed`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          <div style={{ fontSize: 28, color: "#828282" }}>{site.domain}</div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#222222",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          I build AI systems that get deployed.
        </div>
        <div style={{ fontSize: 30, color: "#555555" }}>
          Rishab Chhetri · founder, Zobique Labs · NCS integration
        </div>
      </div>
    ),
    { ...size }
  );
}
