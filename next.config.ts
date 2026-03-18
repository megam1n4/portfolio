import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required to output static HTML/CSS/JS for GitHub Pages
  output: "export",
  // Disable server-based image optimization since we are using static export
  images: {
    unoptimized: true,
  },
  // Note: If you are deploying to a specific path like `<username>.github.io/<repo>`, 
  // you must uncomment and set basePath: '/<repo>'.
  // basePath: "/my-portfolio",
};

export default nextConfig;
