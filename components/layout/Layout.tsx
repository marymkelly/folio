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
						className={`min-w-[360px] min-h-screen h-full w-full flex flex-col flex-auto relative bg-[${pageCtx?.backgroundColor}] ${
							pageCtx.backgroundIsDark ? "text-white" : "text-custom-black"
						}`}>
						<PageHead />
						<Nav isDark={pageCtx.backgroundIsDark} />
						<main className='flex flex-col w-full flex-auto h-auto overflow-x-clip'>{props.children}</main>
						<Footer isFixed={pageCtx.footerFixed} color={pageCtx.footerColorClass} />
					</div>
				)}
			</ThemeContext.Consumer>
		</ThemeContextProvider>
	);
}
