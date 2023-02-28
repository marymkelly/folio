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
		<div className='flex h-screen w-screen flex-col items-center justify-center bg-[radial-gradient(var(--tw-gradient-stops))] from-indigo-200/80 to-indigo-300/60'>
			<div className='relative h-auto w-6/12'>
				<Image
					src={errorImage}
					alt='404 Image'
					className='opacity-80 mix-blend-multiply'
					width={2400}
					height={1432}
				/>
				<Image
					src={errorImage}
					alt='404 Image'
					className='absolute top-0 opacity-60 mix-blend-luminosity'
					width={2400}
					height={1432}
				/>
			</div>
			<div className=''>
				<h2>
					<Link href='/'>
						<Button
							label='Return Home'
							showArrow={false}
							className='z-40 mt-20 inline-flex whitespace-nowrap border-2 border-[#ff7948] border-opacity-80 bg-opacity-80 px-10 py-3.5 font-itc text-lg font-normal tracking-wide text-[#ff7948] text-opacity-100 hover:border-opacity-75 hover:bg-[#f9ece1]/20 hover:text-opacity-90 dark:border-slate-400 dark:bg-custom-dark-navy'
						/>
					</Link>
				</h2>
			</div>
		</div>
	);
}
