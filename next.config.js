/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "wefit-react-web-test.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig
