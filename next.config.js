/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
