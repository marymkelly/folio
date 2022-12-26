import { createContext, useEffect, useState } from "react";

export interface ThemeContextInterface {
	children?: JSX.Element;
	footerFixed: boolean;
	footerColorClass: string;
	backgroundColor: string;
	backgroundIsDark: boolean;
	setBackgroundColor: Function;
	setBackgroundIsDark: Function;
	setIsFooterFixed: Function;
	setFooterColorClass: Function;
}

export const themeContext: ThemeContextInterface = {
	footerFixed: false,
	footerColorClass: "bg-transparent",
	backgroundColor: "#ffffff",
	backgroundIsDark: false,
	setBackgroundColor: () => {},
	setBackgroundIsDark: () => {},
	setIsFooterFixed: () => {},
	setFooterColorClass: () => {},
};

const ThemeContext = createContext<ThemeContextInterface>(themeContext);

export function ThemeContextProvider<T extends { children?: JSX.Element }>(props: T) {
	const [isFooterFixed, setIsFooterFixed] = useState<boolean>(false);
	const [footerColorClass, setFooterColorClass] = useState<string>("bg-transparent");
	const [pageBackground, setPageBackground] = useState<string>("#ffffff");
	const [isDark, setIsDark] = useState<boolean>(false);

	const themeCtx = {
		footerFixed: isFooterFixed,
		footerColorClass,
		backgroundColor: pageBackground,
		backgroundIsDark: isDark,
		setBackgroundColor: setPageBackground,
		setBackgroundIsDark: setIsDark,
		setIsFooterFixed,
		setFooterColorClass,
	};

	return <ThemeContext.Provider value={themeCtx}>{props.children}</ThemeContext.Provider>;
}

export default ThemeContext;
