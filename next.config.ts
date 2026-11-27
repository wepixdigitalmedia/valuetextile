import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/infrastructure", destination: "/capabilities", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/industries", destination: "/who-we-work-with", permanent: true },
      { source: "/products", destination: "/capabilities/fabric-division", permanent: true },
      { source: "/products/:path*", destination: "/capabilities/fabric-division", permanent: true },
    ];
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
