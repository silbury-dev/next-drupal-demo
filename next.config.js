/** @type {import('next').NextConfig} */
module.exports = {
	// TODO  next i18n mit drei Sprachen: de, en, klingonisch
	// alle drei Sprachen sollen sich auf die Ausgabe der ProductListComponent auswirken
	reactStrictMode: false,
	experimental: {
		// TODO  next future image
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
