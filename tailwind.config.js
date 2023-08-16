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
				"inside-full": "1024px",
			},
			fontSize: {
				xxs: "0.65rem",
			},
			colors: {
				description: "#4B5563", // description – black coral
				"primary-accent": "#20CA3B", // primary accent – pale vermilion
				// "secondary-accent": "#ffba08", // secondary accent – sunburst yellow
				// "gray-accent": "rgba(223, 223, 223, <alpha-value>)",
			},
		},
	},
	plugins: [],
};
