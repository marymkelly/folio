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

	scrollTo<T extends U, U extends (typeof this.routes)[number]["href"]>(path: T) {
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
		sections: ["/formal-experience", "/skills", "/contact"],
		// sections: ["/journey", "/formal-experience", "/skills", "/contact"],
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
			className={`fixed top-0 left-0 z-[200] flex h-full w-full flex-1 flex-col items-center justify-end bg-custom-dark-navy pb-16 transition-transform duration-300 sm:hidden ${
				clicked ? "translate-y-0" : "-translate-y-full"
			}`}>
			<div className='flex h-4/6 w-full flex-col items-center justify-center justify-items-center space-y-6 p-12 font-itc'>
				<Link
					href='/'
					className={`z-[300] py-4 text-3xl ${
						router.asPath === "/" ? "font-medium text-logo-teal " : "text-white "
					}`}>
					Home
				</Link>
				<Link
					href='/about'
					className={`z-[300] py-4 text-3xl ${
						router.asPath === "/about" ? "font-medium text-logo-teal " : "text-white"
					}`}>
					About
				</Link>
			</div>
			<div className='flex h-1/6 w-full flex-col items-center'>
				<div className='flex w-8/12 justify-between text-custom-gray-blue'>
					<Link href='mailto:mary@marykelly.tech'>
						<div className='flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray-blue p-[5px]'>
							<EnvelopeIcon className='h-8 w-8 fill-custom-dark-navy' />
						</div>
					</Link>
					<Link target='_blank' rel='noreferrer' href='https://github.com/marymkelly'>
						<GithubIcon className='h-10 w-10' />
					</Link>
					<Link
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'>
						<LinkedinIcon className='h-10 w-10' />
					</Link>
				</div>

				<div className='mt-12 flex items-center'>
					<Link
						href='https://storage.googleapis.com/portsite-b008f.appspot.com/public/Mary_Kelly-Resume_2024.pdf'
						target='_blank'
						rel='noreferrer'
						className='font-stolzl text-base text-custom-gray-blue'>
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
		const handleRouteChange = () => {
			if (window.visualViewport!.width < 640) {
				setClick(false);
			}
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	
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
			const sectionElements = document.elementsFromPoint(
				x,
				y + window.visualViewport!.height * 0.5
			);
			const overDarkEls = themeCtx.darkElements.some((el) => elements.includes(el));

			let currentTab = tabs.find((t) => t.href === router.asPath);
			let elIds = route
				.map((r) => {
					if (currentTab?.sections.includes(r.href)) {
						return {
							id: r.refId,
							href: r.href,
							el: document.getElementById(r.refId),
						};
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
	}, [themeCtx, router.asPath]);

	return (
		<nav
			ref={navRef as LegacyRef<HTMLElement>}
			className={`fixed top-0 z-[100] flex h-auto w-full justify-between py-2 pl-6 pr-6 font-itc text-sm font-light ${
				props.isDark ? "text-white" : "text-custom-black"
			}`}>
			<div className='no-flex flex min-w-[50px]'>
				<Link href='/'>
					<Image src='/images/about/MK.svg' alt='MK Logo' height={50} width={50} />
				</Link>
			</div>
			<div
				className={`nav-symbol-container z-[500] target:opacity-90 hover:opacity-90 active:opacity-90 sm:hidden ${
					clicked ? "opacity-90" : "opacity-60"
				}`}
				onClick={() => setClick(!clicked)}>
				<div className={clicked ? "nav-symbol open" : "nav-symbol"}></div>
				<div className={clicked ? "nav-symbol__top open" : "nav-symbol__top"}></div>
			</div>
			<MobileNav router={router} clicked={clicked} setClick={setClick} />
			<div
				className={`hidden h-full flex-col sm:flex ${
					router.pathname === "/404" && "hidden sm:hidden"
				}`}>
				{tabs.map((tab, i) => {
					return (
						<div
							key={`tab-${tab.name}`}
							className={`flex h-full flex-col ${
								router.asPath === tab.href
									? "mb-2 rounded-md bg-custom-teal/[0%]"
									: ""
							} pb-1`}>
							{router.asPath !== tab.href ? (
								<Link
									href={tab.href}
									className={`mix-blend-color-difference ml-4 flex h-full min-w-[50px] cursor-pointer flex-col items-end justify-end bg-cyan-100/0 p-2 hover:text-logo-teal ${
										router.asPath === tab.href
											? "font-medium text-custom-teal"
											: "text-custom-gray-blue"
									}`}>
									{tab.name}
								</Link>
							) : (
								<a
									onClick={() => {
										scrollHandler.scrollTo(tab.href);
									}}
									className={`mix-blend-color-difference ml-4 flex h-auto min-w-[80px] cursor-pointer items-end justify-end bg-cyan-100/0 p-2 hover:text-logo-teal ${
										router.asPath === tab.href
											? "font-medium text-custom-teal"
											: "text-custom-gray-blue"
									} `}>
									{tab.name}
								</a>
							)}
							<ul
								className={`flex-col items-end ${
									router.asPath === tab.href ? "inline-flex" : "hidden"
								} `}>
								{tab.sections.map((s, j) => {
									return (
										<li
											key={`${i}-${j}`}
											onClick={() => {
												scrollHandler.scrollTo(s);
											}}
											className={`cursor-pointer px-2 py-1.5 text-[12.5px] ${
												subtab === s
													? "text-logo-blue hover:brightness-95"
													: "text-custom-gray-blue/60 hover:text-logo-blue"
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
					href='https://storage.googleapis.com/portsite-b008f.appspot.com/public/Mary_Kelly-Resume_2024.pdf'
					target='_blank'
					rel='noreferrer'
					className={`hover mt-6 ml-4 flex min-w-[80px] cursor-pointer items-center justify-end bg-cyan-100/0 p-2 text-[14px] hover:text-logo-teal ${
						router.asPath?.startsWith("/resume")
							? "font-medium text-custom-teal"
							: "text-custom-gray-blue/75"
					}`}>
					Resume
				</Link>
				<Link
					target='_blank'
					rel='noreferrer'
					className='mt-2.5 flex w-full justify-end pr-2'
					href='https://github.com/marymkelly'>
					<GithubIcon className='h-[26px] w-[26px] text-custom-gray-blue/40 hover:text-logo-blue/75' />
				</Link>
				<Link
					target='_blank'
					rel='noreferrer'
					className='mt-4 flex w-full justify-end pr-2'
					href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'>
					<LinkedinIcon className='h-[26px] w-[26px] text-custom-gray-blue/40 hover:text-logo-blue/75' />
				</Link>
			</div>
		</nav>
	);
}
