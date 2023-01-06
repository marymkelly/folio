import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../common/Button";
import DotGroup from "../Dots";

export default function ExperienceOverview() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			if (window.visualViewport!.width < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className='pb-32 2xl:pb-36 md:pt-8 px-10 md:px-28 lg:pl-[10%] xl:pl-[18%] min-w-[360px] w-full h-full flex flex-col'>
			<div className='mb-12 md:mb-20'>
				<h2 className='section-header--main max-w-[1200px] leading-normal'>
					I am the <span className='font-medium'>Lead Software Developer & Product Designer</span> at Sin Pin
				</h2>
				<p className="font-['Didact_Gothic'] text-custom-black pl-0.5 lg:pl-1 text-base md:text-lg lg:text-xl leading-[1.75] lg:leading-loose tracking-wide xl:max-w-[1105px]">
					A long time ago in a galaxy far, far away.... wait, wrong story. Rather, just over a handful of years ago in a town that is rather
					far away (from me now), I discovered my interest in software development, design, and the field of human-computer interaction.
					Since that time, it has been my mission to become a <span className='line-through'>jedi</span> creative master and a force for
					good in the struggle against the evils of bad user experience and design in the digital universe.
				</p>
			</div>
			<div className='relative'>
				<div className='w-[480px] h-[138px] absolute -mt-8 -ml-[16%] z-[-1] dark:opacity-10'>
					<DotGroup id='more-experience-dots' density={3.25} size={3} />
				</div>
				<Link href={isMobile ? "/about#formal-experience" : "/about#saga"}>
					<Button
						label='Learn more about my experience'
						showArrow={true}
						className='text-custom-orange dark:text-slate-300 text-opacity-70 hover:text-opacity-90 border-custom-orange dark:border-slate-400 border-opacity-60 hover:border-opacity-75 bg-white hover:bg-[#FFF8F3] dark:bg-custom-dark-navy bg-opacity-80 border-2 px-7 py-3.5 font-itc font-normal text-lg tracking-wide z-40'
					/>
				</Link>
			</div>
		</div>
	);
}
