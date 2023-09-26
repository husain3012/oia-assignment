/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images:{
    domains:['api.dicebear.com', 'lh3.googleusercontent.com'],
    dangerouslyAllowSVG: true
  }
};

module.exports = nextConfig;
