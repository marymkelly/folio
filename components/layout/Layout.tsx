import { ReactNode } from "react";
import Footer from "./Footer";
import PageHead from "./Head";

interface Props {
	children: ReactNode;
}

export default function Layout(props: Props): JSX.Element {
	return (
		<div className='min-w-[360px] min-h-screen h-full w-full flex flex-col flex-auto relative'>
			<PageHead />
			<main className='flex flex-col w-full flex-auto h-auto overflow-x-clip'>{props.children}</main>
			<Footer />
		</div>
	);
}
