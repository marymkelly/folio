import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ThemeContext from "../../context/ThemeCtx";
import { GithubIcon } from "../common/GithubIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LinkedinIcon } from "../common/LinkedinIcon";

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
		}
	}

	routeName(path: string) {
		const valid: ScrollableRouteProps | undefined = this.routes.find((p) => p.href === path);
		if (valid) {
			return valid.label;
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
interface MobileNavProps {
	clicked: boolean;
	setClick: Function;
	router: NextRouter;
}

function MobileNav<T extends MobileNavProps>({ clicked, setClick, router }: T) {
	return (
		<div
			className={`sm:hidden top-0 left-0 pb-16 w-full h-full flex flex-1 flex-col items-center justify-end bg-custom-dark-navy fixed z-[200] transition-transform duration-300 ${
				clicked ? "translate-y-0" : "-translate-y-full"
			}`}>
			<div className='font-itc p-12 w-full h-4/6 space-y-6 flex flex-col justify-center items-center justify-items-center'>
				<Link href='/'>
					<h3
						onClick={() =>
							setTimeout(() => {
								setClick(!clicked);
							}, 300)
						}
						className={`text-3xl py-4 ${router.asPath === "/" ? "text-logo-teal font-medium " : "text-white "}`}>
						Home
					</h3>
				</Link>
				<Link href='/about'>
					<h3
						onClick={() =>
							setTimeout(() => {
								setClick(!clicked);
							}, 300)
						}
						className={`text-3xl py-4 ${router.asPath === "/about" ? "text-logo-teal font-medium " : "text-white"}`}>
						About
					</h3>
				</Link>
			</div>
			<div className='flex flex-col w-full h-1/6 items-center'>
				<div className='flex w-8/12 justify-between text-custom-gray-blue'>
					<Link href='mailto:mary@marykelly.tech'>
						<div className='p-[5px] flex items-center justify-center rounded-full w-10 h-10 bg-custom-gray-blue'>
							<EnvelopeIcon className='w-8 h-8 fill-custom-dark-navy' />
						</div>
					</Link>
					<Link target='_blank' rel='noreferrer' href='https://github.com/marymkelly'>
						<GithubIcon className='w-10 h-10' />
					</Link>
					<Link target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'>
						<LinkedinIcon className='w-10 h-10' />
					</Link>
				</div>

				<div className='flex items-center mt-12'>
					<Link href='/resume' target='_blank' rel='noreferrer' className='font-stolzl text-base text-custom-gray-blue'>
						Resume
					</Link>
				</div>
			</div>
		</div>
	);
}

export default function Nav<T extends NavProps>(props: T) {
	const router = useRouter();
	const themeCtx = useContext(ThemeContext);
	const navRef = useRef<HTMLElement>();
	const scrollHandler = new ScrollableRouteHandler(route, router);
	const [subtab, setSubtab] = useState<string | undefined>();
	const [clicked, setClick] = useState<boolean>(false);

	useEffect(() => {
		function handleResize() {
			if (window.visualViewport!.width > 640) {
				setClick(false);
			}
		}

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
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [themeCtx.darkElements]);

	return (
		<nav
			ref={navRef as LegacyRef<HTMLElement>}
			className={`z-[100] w-full text-sm font-itc font-light h-auto flex justify-between fixed top-0 py-2 pl-6 pr-6 ${
				props.isDark ? "text-white" : "text-custom-black"
			}`}>
			<div className='flex no-flex min-w-[50px]'>
				<Link href='/'>
					<Image src='/images/about/MK.svg' alt='MK Logo' height={50} width={50} />
				</Link>
			</div>
			<div
				className={`z-[500] nav-symbol-container sm:hidden hover:opacity-90 target:opacity-90 active:opacity-90 ${
					clicked ? "opacity-90" : "opacity-60"
				}`}
				onClick={() => setClick(!clicked)}>
				<div className={clicked ? "nav-symbol open" : "nav-symbol"}></div>
				<div className={clicked ? "nav-symbol__top open" : "nav-symbol__top"}></div>
			</div>
			<MobileNav router={router} clicked={clicked} setClick={setClick} />
			<div className={`h-full hidden sm:flex flex-col ${router.pathname === "/404" && "hidden sm:hidden"}`}>
				{tabs.map((tab, i) => {
					return (
						<div
							key={`tab-${tab.name}`}
							className={`flex flex-col h-full ${router.asPath === tab.href ? "bg-custom-teal/[0%] rounded-md mb-2" : ""} pb-1`}>
							{router.asPath !== tab.href ? (
								<Link
									href={tab.href}
									className={`cursor-pointer flex h-full flex-col hover:text-logo-teal justify-end items-end p-2 mix-blend-color-difference bg-cyan-100/0 min-w-[50px] ml-4 ${
										router.asPath === tab.href ? "font-medium text-custom-teal" : "text-custom-gray-blue"
									}`}>
									{tab.name}
								</Link>
							) : (
								<a
									onClick={() => {
										scrollHandler.scrollTo(tab.href);
									}}
									className={`cursor-pointer flex h-auto hover:text-logo-teal justify-end items-end p-2 mix-blend-color-difference bg-cyan-100/0 min-w-[80px] ml-4 ${
										router.asPath === tab.href ? "font-medium text-custom-teal" : "text-custom-gray-blue"
									} `}>
									{tab.name}
								</a>
							)}
							<ul className={`flex-col items-end ${router.asPath === tab.href ? "inline-flex" : "hidden"} `}>
								{tab.sections.map((s, j) => {
									return (
										<li
											key={`${i}-${j}`}
											onClick={() => {
												scrollHandler.scrollTo(s);
											}}
											className={`cursor-pointer px-2 py-1.5 text-[12.5px] ${
												subtab === s ? "text-logo-blue hover:brightness-95" : "text-custom-gray-blue/60 hover:text-logo-blue"
											} ${s === "/journey" ? "hidden lg:flex" : ""}`}>
											{scrollHandler.routeName(s)}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
				<Link
					href='/resume'
					target='_blank'
					rel='noreferrer'
					className={`cursor-pointer text-[14px] flex hover hover:text-logo-teal justify-end items-center p-2 mt-6 bg-cyan-100/0 min-w-[80px] ml-4 ${
						router.asPath?.startsWith("/resume") ? "font-medium text-custom-teal" : "text-custom-gray-blue/75"
					}`}>
					Resume
				</Link>
				<Link target='_blank' rel='noreferrer' className='w-full flex justify-end pr-2 mt-2.5' href='https://github.com/marymkelly'>
					<GithubIcon className='w-[26px] h-[26px] text-custom-gray-blue/40 hover:text-logo-blue/75' />
				</Link>
				<Link
					target='_blank'
					rel='noreferrer'
					className='w-full flex justify-end pr-2 mt-4'
					href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'>
					<LinkedinIcon className='w-[26px] h-[26px] text-custom-gray-blue/40 hover:text-logo-blue/75' />
				</Link>
			</div>
		</nav>
	);
}
