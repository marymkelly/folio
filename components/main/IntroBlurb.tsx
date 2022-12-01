import { Fragment } from "react";
import SvgDots from "../Dots";

export default function IntroTextBlurb() {
	return (
		<Fragment>
			<div className='bg-custom-navy text-white z-[50] min-w-[360px] w-full xl:w-[90%] self-end px-[70px] pt-20 pb-24 h-auto flex justify-center'>
				<p className='font-itc text-[24px] md:text-[28px] lg:text-[32px] leading-[2.5] font-light md:w-11/12 tracking-[.02em'>
					I am a problem solver invested in <span className='font-medium tracking-[.018em]'>improving</span> the
					<span className='font-medium tracking-[.018em]'> human-computer experience</span>. For several years, I have contributed to the strategy, design, and development of different digital products through my roles as a <span className='text-[#A6E4F8] tracking-wide'>software developer</span> and{" "}
					<span className='text-[#A6E4F8] tracking-wide'>business analyst (i.e. product designer)</span>.
				</p>
			</div>
			<div className='w-5/12 h-[120px] self-end'>
				<SvgDots id='bottom-intro-text-dots' density={3.5} size={4.5} className='fill-custom-gray-dots opacity-70' />
			</div>
		</Fragment>
	);
}
