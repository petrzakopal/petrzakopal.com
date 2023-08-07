/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
	reactStrictMode: false,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	images: {
		domains: ["localhost"],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = withContentlayer(nextConfig);
