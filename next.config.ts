import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Allow all tunnel hosts for turbopack dev server
  serverExternalPackages: [],
  experimental: {
    // Turbopack specific options if any
  },
  // Allow external origins
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
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
