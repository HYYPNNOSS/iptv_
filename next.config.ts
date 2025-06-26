import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "iptvfrances.com",
          },
        ],
        destination: "https://iptvfrances.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
