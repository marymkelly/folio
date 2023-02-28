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
		<div className='flex h-full w-full min-w-[360px] flex-col px-10 pb-32 md:px-28 md:pt-8 lg:pl-[10%] xl:pl-[18%] 2xl:pb-36'>
			<div className='mb-12 md:mb-20'>
				<h2 className='section-header--main max-w-[1200px] leading-normal'>
					I am the{" "}
					<span className='font-medium'>Lead Software Developer & Product Designer</span>{" "}
					at Sin Pin
				</h2>
				<p className="pl-0.5 font-['Didact_Gothic'] text-base leading-[1.75] tracking-wide text-custom-black md:text-lg lg:pl-1 lg:text-xl lg:leading-loose xl:max-w-[1105px]">
					A long time ago in a galaxy far, far away.... wait, wrong story. Rather, just
					over a handful of years ago in a town that is rather far away (from me now), I
					discovered my interest in software development, design, and the field of
					human-computer interaction. Since that time, it has been my mission to become a{" "}
					<span className='line-through'>jedi</span> creative master and a force for good
					in the struggle against the evils of bad user experience and design in the
					digital universe.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute z-[-1] -mt-8 -ml-[16%] h-[138px] w-[480px] dark:opacity-10'>
					<DotGroup id='more-experience-dots' density={3.25} size={3} />
				</div>
				<Link href={isMobile ? "/about#formal-experience" : "/about#saga"}>
					<Button
						label='Learn more about my experience'
						showArrow={true}
						className='z-40 border-2 border-custom-orange border-opacity-60 bg-white bg-opacity-80 px-7 py-3.5 font-itc text-lg font-normal tracking-wide text-custom-orange text-opacity-70 hover:border-opacity-75 hover:bg-[#FFF8F3] hover:text-opacity-90'
					/>
				</Link>
			</div>
		</div>
	);
}
