import Image from "next/image";
import ExperienceJourney from "./timeline/WalkJourney";
import SkillsAndTools from "./SkillsTools";
import FormalExperience from "./FormalExperience";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeCtx";
import Contact from "../main/Contact";

export default function AboutPage() {
	const themeCtx = useContext(ThemeContext);

	useEffect(() => {
		// if (!themeCtx.footerFixed) 
		themeCtx.setIsFooterFixed(true);

		return () => {
			themeCtx.setIsFooterFixed(false);
		};
	}, [themeCtx]);

	return (
		<div id='about' className='relative flex h-full w-full flex-1 flex-col flex-wrap pb-12'>
			<div className='flex h-full min-h-screen w-full flex-col px-8 pb-12 md:pb-20 lg:flex-row lg:self-center lg:px-0'>
				<h1 className='absolute top-10 -z-10 font-gravesend text-[100px] font-bold leading-none tracking-[0.015em] text-transparent opacity-[15%] text-stroke-custom-gray-blue text-stroke text-stroke-[1.5px] xs:text-[150px] md:-top-10 md:text-[200px] lg:-top-4 lg:mt-0 lg:text-[300px]'>
					About
				</h1>
				<div className='mt-36 flex w-full flex-col items-center justify-center lg:mt-auto lg:h-screen lg:w-[40%]'>
					<Image
						src='/images/about/mary-professional.png'
						alt='Photo of Mary Kelly'
						width={550}
						height={706}
						className='h-auto w-[250px] lg:w-[371px]'
						priority
					/>
				</div>
				<div className='mt-auto flex h-full w-full flex-1 flex-col items-center justify-center justify-items-center text-custom-black lg:h-screen lg:w-auto lg:pr-20'>
					<div className='flex h-full w-10/12 flex-col justify-center'>
						<p className='mt-10 bg-white bg-opacity-0 py-2 font-stolzl text-sm font-light leading-loose lg:mt-0 lg:text-lg'>
							<span className='font-medium tracking-wide'>
								Greetings! I hope you are doing well today.{" "}
							</span>{" "}
							My name is Mary and this is my porfolio site.
						</p>

						<p className='mt-8 font-stolzl font-light leading-loose lg:mt-12 lg:text-lg'>
							Since I was young, I have always enjoyed a challenge. Through combining
							my interests in human behavior, coding, and technology in general, I now
							focus on solving problems that improve human-computer interaction. For
							the greater part of a decade, I have contributed to the realization of
							various digital products through my skills in software development,
							design, research, strategy, and business analysis.
						</p>

						<p className='mt-8 font-stolzl font-light leading-loose lg:mt-12 lg:text-lg'>
							Outside of my professional and educational pursuits, I enjoy shooting
							target archery and practicing music - my main instrument being the
							trombone, which I started playing at the age of 10.
						</p>
					</div>
				</div>
			</div>
			<div id='saga' className='relative hidden h-full w-full flex-col lg:inline-flex'>
				<ExperienceJourney />
			</div>
			<FormalExperience />
			<SkillsAndTools />
			<Contact />
		</div>
	);
}
