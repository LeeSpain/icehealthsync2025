/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [], // For external images if needed
    // Since you're using local images in public/images/, 
    // you don't need domains or remotePatterns
  },
  // Ensure @/* imports work
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
}

module.exports = nextConfig;