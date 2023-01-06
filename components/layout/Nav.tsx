import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ThemeContext from "../../context/ThemeCtx";

interface NavProps {
	isDark: boolean;
}

interface ScrollableRouteProps {
	href: string;
	refId: string;
	accessFrom: string[];
	label: string;
}
const route: ScrollableRouteProps[] = [
	{
		href: "/",
		refId: "landing",
		label: "Home",
		accessFrom: ["/"],
	},
	{
		href: "/projects",
		refId: "recent-works",
		label: "Projects",
		accessFrom: ["/"],
	},
	{
		href: "/articles",
		refId: "articles",
		label: "Articles",
		accessFrom: ["/"],
	},
	{
		href: "/contact",
		refId: "contact",
		label: "Contact",
		accessFrom: ["/", "/about"],
	},
	{
		href: "/about",
		refId: "about",
		label: "About",
		accessFrom: ["/about"],
	},
	{
		href: "/journey",
		refId: "saga",
		label: "Journey",
		accessFrom: ["/about"],
	},
	{
		href: "/formal-experience",
		refId: "formal-experience",
		label: "Experience",
		accessFrom: ["/about"],
	},
	{
		href: "/skills",
		refId: "skills-tools",
		label: "Skills & Tools",
		accessFrom: ["/about"],
	},
];

interface ScrollableRouteHandler {
	routes: ScrollableRouteProps[];
}

class ScrollableRouteHandler {
	private _router: NextRouter;

	constructor(routes: ScrollableRouteProps[], router: NextRouter) {
		this.routes = routes;
		this._router = router;
	}

	scrollTo<T extends U, U extends typeof this.routes[number]["href"]>(path: T) {
		const valid: ScrollableRouteProps | undefined = this.routes.find((p) => p.href === path);

		if (valid && valid.accessFrom.includes(this._router.asPath)) {
			window.scrollTo({
				top: document.getElementById(valid.refId)!.offsetTop - 30,
				left: 0,
				behavior: "smooth",
			});
		} else {
			console.log("Invalid call");
		}
	}

	routeName(path: string) {
		const valid: ScrollableRouteProps | undefined = this.routes.find((p) => p.href === path);
		if (valid) {
			return valid.label;
		} else {
			console.log("Invalid call");
		}
	}
}

const tabs = [
	{
		href: "/",
		name: "Home",
		sections: ["/projects", "/articles", "/contact"],
	},
	{
		href: "/about",
		name: "About",
		sections: ["/journey", "/formal-experience", "/skills", "/contact"],
	},
];

export default function Nav<T extends NavProps>(props: T) {
	const router = useRouter();
	const themeCtx = useContext(ThemeContext);
	const navRef = useRef<HTMLElement>();
	const scrollHandler = new ScrollableRouteHandler(route, router);
	const [subtab, setSubtab] = useState<string | undefined>();

	useEffect(() => {
		function handleScroll() {
			let x = window.visualViewport!.width * 0.875;
			let y = navRef.current!.getBoundingClientRect().height!;
			const elements = document.elementsFromPoint(x, y);
			const sectionElements = document.elementsFromPoint(x, y + window.visualViewport!.height * 0.5);
			const overDarkEls = themeCtx.darkElements.some((el) => elements.includes(el));

			let currentTab = tabs.find((t) => t.href === router.asPath);
			let elIds = route
				.map((r) => {
					if (currentTab?.sections.includes(r.href)) {
						return { id: r.refId, href: r.href, el: document.getElementById(r.refId) };
					}
				})
				.filter((v) => v);

			const matchTabSection = elIds.find((el) => sectionElements.includes(el!.el!));

			setSubtab(matchTabSection?.href);

			overDarkEls ? themeCtx.setBackgroundIsDark(true) : themeCtx.setBackgroundIsDark(false);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [themeCtx.darkElements]);

	return (
		<nav
			ref={navRef as LegacyRef<HTMLElement>}
			className={`z-[100] w-full text-sm font-itc font-light h-16 flex justify-between items-center fixed top-0 py-2 pl-6 pr-6 ${
				props.isDark ? "text-white" : "text-custom-black"
			}`}>
			<div>
				<Link href='/'>
					<Image src='/images/about/MK.svg' alt='MK Logo' height={50} width={50} />
				</Link>
			</div>
			<div className='flex items-center'>
				<Link
					href='/resume'
					target='_blank'
					className={`flex hover hover:text-logo-teal justify-end items-center p-2 bg-cyan-100/0 min-w-[80px] ml-4 ${
						router.asPath?.startsWith("/resume") ? "font-medium text-custom-teal" : ""
					}`}>
					Resume
				</Link>
				{tabs
					.sort((a) => {
						return a.href === router.asPath ? 1 : -1;
					})
					.map((tab, i) => {
						return (
							<div key={`tab-${tab.name}`} className='flex flex-col'>
								{router.asPath !== tab.href ? (
									<Link
										href={tab.href}
										className={`flex hover:text-logo-teal justify-end items-center p-2 mix-blend-color-difference bg-cyan-100/0 min-w-[80px] ml-4 ${
											router.asPath === tab.href ? "font-medium text-custom-teal" : ""
										}`}>
										{tab.name}
									</Link>
								) : (
									<a
										onClick={() => {
											scrollHandler.scrollTo(tab.href);
										}}
										className={`flex hover:text-logo-teal justify-end items-center p-2 mix-blend-color-difference bg-cyan-100/0 min-w-[80px] ml-4 ${
											router.asPath === tab.href ? "font-medium text-custom-teal" : ""
										}`}>
										{tab.name}
									</a>
								)}
								<ul className={`h-0 flex-col items-end ${router.asPath === tab.href ? "flex" : "hidden"}`}>
									{tab.sections.map((s, j) => {
										return (
											<li
												key={`${i}-${j}`}
												onClick={() => {
													scrollHandler.scrollTo(s);
												}}
												className={`mt-1 p-2 text-[13px] ${
													subtab === s ? "text-logo-blue hover:brightness-95" : "text-slate-500 hover:text-logo-blue"
												} ${s === "/journey" ? "hidden lg:flex" : ""}`}>
												{scrollHandler.routeName(s)}
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
			</div>
		</nav>
	);
}
