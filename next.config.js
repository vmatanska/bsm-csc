/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    //loader: "default",
    //domains: [],
    //domains: ["127.0.0.1"],
    //domains: ["https://bsm.directory/devtest/"],
    domains: [process.env.WP_IMAGES_URL],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    /*includePaths: [path.join(__dirname, 'styles/scss')],
    prependData: `@import "_variables.scss";`,*/
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
