import ThemeContext, { ThemeContextInterface, ThemeContextProvider } from "../../context/ThemeCtx";
import Footer from "./Footer";
import PageHead from "./Head";
import Nav from "./Nav";

interface Props {
	children: JSX.Element;
}

export default function Layout(props: Props): JSX.Element {
	return (
		<ThemeContextProvider {...props}>
			<ThemeContext.Consumer>
				{(pageCtx: ThemeContextInterface) => (
					<div
						className={`relative flex h-full min-h-screen w-full min-w-[360px] flex-auto flex-col bg-[${
							pageCtx?.backgroundColor
						}] ${pageCtx.backgroundIsDark ? "text-white" : "text-custom-black"}`}>
						<PageHead />
						<Nav isDark={pageCtx.backgroundIsDark} />
						<main className='flex h-auto w-full flex-auto flex-col overflow-x-clip'>
							{props.children}
						</main>
						<Footer isFixed={pageCtx.footerFixed} color={pageCtx.footerColorClass} />
					</div>
				)}
			</ThemeContext.Consumer>
		</ThemeContextProvider>
	);
}
