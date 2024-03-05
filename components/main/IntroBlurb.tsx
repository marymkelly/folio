import React, { Fragment, LegacyRef, ReactNode, useContext, useEffect, useRef } from "react";
import ThemeContext from "../../context/ThemeCtx";
import SvgDots from "../Dots";

interface Props {
	children?: ReactNode;
}

export default function IntroTextBlurb<T extends Props>(props: T) {
	const themeCtx = useContext(ThemeContext);
	const introRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		themeCtx.setDarkElements([introRef.current]);
	}, []);

	return (
		<div
			className='flex w-full flex-col items-end'
			id='intro-blurb'
			{...props}
			ref={introRef as LegacyRef<HTMLDivElement>}>
			<div className='z-[50] flex h-auto w-full min-w-[360px] justify-center self-end bg-custom-navy px-10 pt-12 pb-12 text-white md:px-[70px] md:pt-20 md:pb-24 xl:w-[90%]'>
				<p className='font-itc text-lg font-light leading-[2.5] tracking-[.02em] sm:text-[24px] md:w-11/12 md:text-[28px] lg:text-[32px]'>
					I am a problem solver invested in{" "}
					<span className='font-medium tracking-[.018em]'>improving</span> the
					<span className='font-medium tracking-[.018em]'>
						{" "}
						human-computer experience
					</span>
					. For several years, I have contributed professionally to the strategy, design, and development
					of different digital products through my roles as a{" "}
					<span className='tracking-wide text-[#A6E4F8]'>
						software developer
					</span> and{" "}
					<span className='tracking-wide text-[#A6E4F8]'>
						business analyst
					</span>
					.
				</p>
			</div>
			<div className='h-[120px] w-5/12 self-end'>
				<SvgDots
					id='bottom-intro-text-dots'
					density={3.5}
					size={4.5}
					className='fill-custom-gray-dots opacity-70 dark:fill-custom-gray-blue dark:opacity-5'
				/>
			</div>
		</div>
	);
}
