import { createContext, useEffect, useState } from "react";

export interface ThemeContextInterface {
	children?: JSX.Element;
	footerFixed: boolean;
	footerColorClass: string;
	backgroundColor: string;
	backgroundIsDark: boolean;
	darkElements: HTMLElement[];
	setBackgroundColor: Function;
	setBackgroundIsDark: Function;
	setIsFooterFixed: Function;
	setFooterColorClass: Function;
	setDarkElements: Function;
}

export const themeContext: ThemeContextInterface = {
	footerFixed: false,
	footerColorClass: "bg-transparent",
	backgroundColor: "#ffffff",
	backgroundIsDark: false,
	darkElements: [],
	setBackgroundColor: () => {},
	setBackgroundIsDark: () => {},
	setIsFooterFixed: () => {},
	setFooterColorClass: () => {},
	setDarkElements: () => {},
};

const ThemeContext = createContext<ThemeContextInterface>(themeContext);

export function ThemeContextProvider<T extends { children?: JSX.Element }>(props: T) {
	const [isFooterFixed, setIsFooterFixed] = useState<boolean>(false);
	const [footerColorClass, setFooterColorClass] = useState<string>("bg-transparent");
	const [pageBackground, setPageBackground] = useState<string>("#ffffff");
	const [isDark, setIsDark] = useState<boolean>(false);
	const [darkEls, setDarkEls] = useState<HTMLElement[]>([]);

	const themeCtx = {
		footerFixed: isFooterFixed,
		footerColorClass,
		backgroundColor: pageBackground,
		backgroundIsDark: isDark,
		darkElements: darkEls,
		setBackgroundColor: setPageBackground,
		setBackgroundIsDark: setIsDark,
		setIsFooterFixed,
		setFooterColorClass,
		setDarkElements: (newEl: HTMLElement[]) => {
			setDarkEls([...darkEls, ...newEl]);
		},
	};

	return <ThemeContext.Provider value={themeCtx}>{props.children}</ThemeContext.Provider>;
}

export default ThemeContext;
