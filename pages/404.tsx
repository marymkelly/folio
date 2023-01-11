import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import errorImage from "../public/images/error/404PuzzleNoBg.png";
import ThemeContext from "../context/ThemeCtx";
import Button from "../components/common/Button";

export default function Error404Page() {
	const themeContext = useContext(ThemeContext);
	useEffect(() => {
		themeContext.setIsFooterFixed(true);
	}, []);

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center bg-[radial-gradient(var(--tw-gradient-stops))] from-indigo-200/80 to-indigo-300/60'>
			<div className='w-6/12 h-auto relative'>
				<Image src={errorImage} alt='404 Image' className='mix-blend-multiply opacity-80' width={2400} height={1432} />
				<Image src={errorImage} alt='404 Image' className='absolute top-0 mix-blend-luminosity opacity-60' width={2400} height={1432} />
			</div>
			<div className=''>
				<h2>
					<Link href='/'>
						<Button
							label='Return Home'
							showArrow={false}
							className='inline-flex whitespace-nowrap text-[#ff7948] mt-20 text-opacity-100 hover:text-opacity-90 border-[#ff7948] dark:border-slate-400 border-opacity-80 hover:border-opacity-75 hover:bg-[#f9ece1]/20 dark:bg-custom-dark-navy bg-opacity-80 border-2 px-10 py-3.5 font-itc font-normal text-lg tracking-wide z-40'
						/>
					</Link>
				</h2>
			</div>
		</div>
	);
}
