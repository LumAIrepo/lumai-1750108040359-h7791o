/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  images: {
    domains: ['arweave.net', 'cdn.solana.com', 'shdw-drive.genesysgo.net'],
  },
};

export default nextConfig;