// In used npm package docs is used const config and export default config, but it does not work there, so just used module.exports
// Docs: https://github.com/iamvishnusankar/next-sitemap#readme

module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
	generateRobotsTxt: true, // (optional)
	// ...other options

	// used for generating dynamic sitemaps of notes
	exclude: ["/server-sitemap.xml"], // <= exclude here
	robotsTxtOptions: {
		additionalSitemaps: [
			process.env.NEXT_PUBLIC_SITE_URL + "/server-sitemap.xml", // <==== Add here
		],
	},
};
