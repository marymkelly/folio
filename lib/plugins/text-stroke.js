const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, matchUtilities, theme, e }) => {
	const utilities = {
		".text-stroke": {
			"-webkit-text-stroke": `1px ${theme("colors.gray.200")}`,
			"text-stroke": `1px ${theme("colors.gray.200")}`,
		},
		".text-stroke-initial": {
			"-webkit-text-stroke": "initial",
			"text-stroke": "initial",
		},
		".text-stroke-inherit": {
			"-webkit-text-stroke": "inherit",
			"text-stroke": "inherit",
		},
		".text-stroke-thin": {
			"-webkit-text-stroke-width": "thin",
		},
		".text-stroke-medium": {
			"-webkit-text-stroke-width": " medium",
		},
		"text-stroke-bold": {
			"-webkit-text-stroke-width": "thick",
		},
	};

	const flattenTheme = (theme, opts) => {
		return Object.keys(theme).reduce((acc, key) => {
			const value = theme[key];
			if (typeof value === "object") {
				return Object.assign(
					acc,
					flattenTheme(value, {
						prefix: `${opts?.prefix ?? ""}${key}${opts?.separator ?? "-"}`,
						separator: opts?.separator ?? "-",
					})
				);
			} else if (typeof value === "string" || typeof value === "number") {
				return Object.assign(acc, { [`${opts?.prefix ?? ""}${key}`]: value });
			} else {
				return acc;
			}
		}, {});
	};

	const twColors = flattenTheme({ ...theme("colors") });
	Object.entries(twColors).reduce(
		(acc, [key, value]) =>
			Object.assign(acc, {
				[`.${e(`text-stroke-${key}`)}`]: {
					"-webkit-text-stroke-color": `${value}`,
					"text-stroke": `${value}`,
				},
			}),
		utilities
	);

	addUtilities(utilities);
	const dynamicUtility = {
		"text-stroke": (value) => {
			if (
				Number.isInteger(Number.parseInt(value[0])) ||
				["thin", "medium", "thick"].includes(value)
			) {
				return {
					"text-stroke-width": value,
					"-webkit-text-stroke-width": value,
				};
			}

			return { "text-stroke": value, "-webkit-text-stroke-color": value };
		},
	};

	matchUtilities(dynamicUtility, { values: theme("borderWidth") });
});
