/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					orange: "#FF5C00",
					black: "#141414",
					navy: "#0D3C56",
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
				sans: ["Didact Gothic", "stolzl", "itc-avant-garde-gothic-pro", ...defaultTheme.fontFamily.sans],
				itc: "itc-avant-garde-gothic-pro, sans-serif;",
				stolzl: "stolzl, sans-serif;",
			},
			screen: {
				screens: {
					"2xl": "1536px",
					"3xl": "1728px",
				},
			},
		},
	},
	plugins: [],
};

/* font-family: 'Didact Gothic', sans-serif; */
/* font-family: stolzl, sans-serif; */
/* font-family: itc-avant-garde-gothic-pro, sans-serif; */
