/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
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
