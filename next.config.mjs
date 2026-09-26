/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local dev on this machine segfaults inside sharp/libvips (and the
    // WASM fallback) the moment next/image actually resizes a real file,
    // independent of Next.js or this repo's code. Vercel's own image
    // optimization infra runs on different hardware and is unaffected, so
    // this only disables optimization for `next dev`/local `next start`.
    unoptimized: process.env.NODE_ENV !== "production",
  },
  async redirects() {
    return [
      { source: "/work", destination: "/deployments", permanent: true },
      { source: "/projects", destination: "/deployments", permanent: true },
      { source: "/skills", destination: "/deployments", permanent: true },
    ];
  },
};

export default nextConfig;
