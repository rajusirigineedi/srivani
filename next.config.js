/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_GRAPHQL_URL: process.env.STRAPI_GRAPHQL_URL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
