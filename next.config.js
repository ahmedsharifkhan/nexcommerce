/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    trailingSlash: true, // Ensures URLs end with a slash
    images: {
      unoptimized: true, // Disable image optimization (GitHub Pages doesn't support it)
    },
    // Optional: If your site is hosted at a subpath, add the basePath option:
    // basePath: '/your-repo-name',
  };
  
  module.exports = nextConfig;
  