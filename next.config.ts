import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath will be set via env variable during build for subpath deployments
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
