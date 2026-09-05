/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/work", destination: "/deployments", permanent: true },
      { source: "/projects", destination: "/deployments", permanent: true },
      { source: "/skills", destination: "/deployments", permanent: true },
    ];
  },
};

export default nextConfig;
