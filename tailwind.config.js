/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"inside-full": "800px", // or 640px
			},
			fontSize: {
				xxs: "0.65rem",
			},
			colors: {
				description: "#4B5563", // description – black coral
				"primary-accent": "#20CA3B", // primary accent – pale vermilion
				"dark-black": "#0A0A0A",
				"light-white": "#fafafa",
				"ligher-black": "#0F172A",
				// "secondary-accent": "#ffba08", // secondary accent – sunburst yellow
				// "gray-accent": "rgba(223, 223, 223, <alpha-value>)",
			},
		},
	},
	plugins: [],
};
