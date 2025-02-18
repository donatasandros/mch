import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i599lbho4g.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
