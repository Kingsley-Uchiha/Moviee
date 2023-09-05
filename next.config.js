/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "https://image.tmdb.org/t/p/original/",
      },
    ],
    loader: "default",
    minimumCacheTTL: 60,
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig
