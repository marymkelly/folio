import { ReactNode } from "react";
import Footer from "./Footer";
import PageHead from "./Head";

interface Props {
	children: ReactNode;
}

export default function Layout(props: Props): JSX.Element {
	return (
		<div className='min-w-[360px] h-full w-full flex flex-col relative'>
			{/* <div className='3xl:pl-[18%] min-w-[360px] h-full relative'> */}
			<PageHead />
			{props.children}
			<Footer />
		</div>
	);
}
