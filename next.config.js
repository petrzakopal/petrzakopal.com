/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	i18n: {
		locales: ["cs", "en"],
		defaultLocale: "cs",
	},
	images: {
		domains: ["localhost"],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;
