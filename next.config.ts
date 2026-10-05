import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` for GitHub Pages.
  output: "export",

  // GitHub Pages has no image optimization server.
  images: {
    unoptimized: true,
  },

  // Emit `/route/index.html` so links resolve on a static host.
  trailingSlash: true,
};

export default nextConfig;
