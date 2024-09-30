/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    trailingSlash: true, // Ensure URLs end with a slash for static hosting
    images: {
      unoptimized: true, // Disable image optimization, as GitHub Pages doesn't support it
    },
    basePath: '/nexcommerce', // Add this to make sure it works under /nexcommerce/
  };
  
  export default nextConfig;
  