/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_KEY: 'i2P7M4tVYwvIRUxpjSdHBmJ6bs3hOKB3Up4rEwuHJHY=',
    BASE_URL: 'http://challenges.us-east-1.elasticbeanstalk.com',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
