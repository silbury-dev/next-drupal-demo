/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  images: {
    domains:[
      "silburydemo.staging.sites.dropsolid-sites.com",
      "www.silburydemo.staging.sites.dropsolid-sites.com",
      "silbury.com",
      "www.silbury.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'silburydemo.staging.sites.dropsolid-sites.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: () => {
    return [
      {
        source: "/en/jsonapi/:slug*",
        destination: "http://silburydemo.staging.sites.dropsolid-sites.com/en/jsonapi/:slug*",
      },
      {
        source: "/jsonapi/:slug*",
        destination: "http://silburydemo.staging.sites.dropsolid-sites.com/jsonapi/:slug*",
      },
      {
        source: "/sites/:slug*",
        destination: "http://silburydemo.staging.sites.dropsolid-sites.com/sites/:slug*",
      },
    ];
  }
}
