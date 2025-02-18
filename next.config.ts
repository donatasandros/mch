import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
