/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
const nextConfig = {
	reactStrictMode: false,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	images: {
		domains: [
			"localhost",
			"petrzakopal.cz",
			"pbs.twimg.com",
			"abs.twimg.com",
			"twimg.com",
			"images.unsplash.com",
		],
		remotePatterns: [
			{ protocol: "https", hostname: "pbs.twimg.com" },
			{ protocol: "https", hostname: "abs.twimg.com" },
		],
	},
	experimental: {
		scrollRestoration: true,
		serverActions: true,
	},
};

module.exports = withContentlayer(nextConfig);
