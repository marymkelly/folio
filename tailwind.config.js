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
					"dark-navy": "#002438",
					teal: "#4ADEFF",
					gray: { blue: "#85A1B5", outline: "#B2B2B2", dots: "#F6F6F6" },
				},
				logo: {
					blue: "#00B2E7",
					teal: "#00D4E7",
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
				figtree: "Figtree, sans-serif",
				manrope: "Manrope, sans-serif",
			},
			screens: {
				"3xl": "1728px",
			},
			keyframes: {
				tailfade: {
					"0%, 82%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				navbloom: {
					"0%": { padding: "4px 8px", marginTop: "20px" },
					"50%": { padding: "8px", marginTop: "12px" },
					"100%": { padding: "4px 8px", marginTop: "4px" },
				},
			},
			animation: {
				tailfade: "tailfade 3s ease-in-out infinite",
				navbloom: "navbloom 1s linear 1",
				navbloomReverse: "navbloom 1s linear 1 reverse"
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						fontFamily: "Manrope, sans-serif",
						h1: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
							marginTop: "4rem",
						},
						h2: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h3: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h4: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h5: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						// strong: {
						// 	color: theme("colors.gray.800"),
						// },
						a: {
							color: theme("colors.blue.500"),
							"&:hover": {
								color: theme("colors.blue.600"),
							},
						},
						p: {
							fontFamily: "Manrope, sans-serif",
							letterSpacing: "0.017em",
						},
						ul: {
							fontFamily: "Manrope, sans-serif",
							letterSpacing: "0.017em",
						},
						ol: {
							fontWeight: 400,
							letterSpacing: "0.017em",
							lineHeight: 1.6,
							margin: "2rem 0",

							li: {
								margin: "1.5rem 0",

								ul: {
									margin: 0,

									li: {
										margin: 0,
										marginTop: "0.5rem",
										fontWeight: 400,
									},
								},
							},
						},
					},
				},
				xl: {
					css: {
						fontFamily: "Manrope, sans-serif",
						h1: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
							fontSize: "2.2em",
							marginTop: "4rem",
						},
						h2: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h3: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h4: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						h5: {
							fontFamily: "Figtree, sans-serif",
							fontWeight: 800,
						},
						// strong: {
						// 	color: theme("colors.gray.800"),
						// },
						a: {
							color: theme("colors.blue.500"),
							"&:hover": {
								color: theme("colors.blue.600"),
							},
						},
						p: {
							fontFamily: "Manrope, sans-serif",
							fontSize: "17px",
							letterSpacing: "0.017em",
						},
						ul: {
							fontFamily: "Manrope, sans-serif",
							fontSize: "17px",
							letterSpacing: "0.017em",
						},
						ol: {
							fontWeight: 400,
							fontSize: "18px",
							letterSpacing: "0.017em",
							lineHeight: 1.6,
							margin: "3rem 0",

							li: {
								margin: "1.5rem 0",

								ul: {
									margin: 0,

									li: {
										margin: 0,
										marginTop: "0.5rem",
										fontWeight: 400,
									},
								},
							},
						},
					},
				},
			}),
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
	plugins: [require("./lib/plugins/text-stroke"), require("@tailwindcss/typography")],
};
