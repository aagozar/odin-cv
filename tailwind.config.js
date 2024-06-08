/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx}"],
	theme: {
		extend: {
			aspectRatio: {
				"9/16": "9 / 16",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
};
