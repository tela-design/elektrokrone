/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // blendet den next.js-knopf unten links aus
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
