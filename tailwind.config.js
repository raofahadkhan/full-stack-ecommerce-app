/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "320px",
			mm: "375px",
			ml: "425px",
			mmd: "640px",
			md: "768px",
			lg: "1024px",
			xsl: "1280px",
			xl: "1440px",
			"2xl": "2560px",
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
