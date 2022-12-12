/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xxs: "320px",
			xs: "425px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				custom: {
					orange: "#FF5C00",
					black: "#141414",
					navy: "#0D3C56",
					"dark-navy": "#022e46",
					teal: "#4ADEFF",
					gray: { blue: "#85A1B5", outline: "#B2B2B2", dots: "#F6F6F6" },
				},
				project: {
					parrot: {
						green: { logo: "#09E181", text: "#1FB471", fade: "#F6FFFB" },
					},
					sinpin: {
						red: { logo: "#E9151D", text: "#EF2E35", fade: "#FFFAFA" },
					},
				},
			},
			fontFamily: {
				sans: ["Didact Gothic", "stolzl", "itc-avant-garde-gothic-pro", "gravesend-sans", ...defaultTheme.fontFamily.sans],
				itc: "itc-avant-garde-gothic-pro, sans-serif",
				stolzl: "stolzl, sans-serif",
				gravesend: "gravesend-sans, sans-serif",
				gothic: "Didact Gothic, sans-serif",
			},
			screens: {
				"3xl": "1728px",
			},
			translate: {
				100: "100%",
				200: "200%",
				300: "300%",
				400: "400%",
				500: "500%",
				600: "600%",
				700: "700%",
				800: "800%",
				900: "900%",
				1000: "1000%",
				1100: "1100%",
				1200: "1200%",
			},
		},
	},
};
