import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Outcomes page was removed; send old links to Programs.
      { source: "/outcomes", destination: "/programs", permanent: true },
    ];
  },
};

export default nextConfig;
