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
		themeCtx.setIsFooterFixed(true);

		return () => {
			themeCtx.setIsFooterFixed(false);
		};
	}, []);

	return (
		<div id="about" className='relative h-full w-full flex flex-1 flex-wrap flex-col pb-12'>
			<div className='w-full h-full min-h-screen flex-col lg:flex-row flex lg:self-center pb-12 md:pb-20 px-8 lg:px-0'>
				<h1 className='-z-10 top-10 md:-top-10 lg:-top-4 absolute font-gravesend font-bold tracking-[0.015em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[15%] leading-none text-transparent lg:mt-0 text-[100px] xs:text-[150px] md:text-[200px] lg:text-[300px]'>
					About
				</h1>
				<div className='mt-36 lg:mt-auto w-full lg:w-[40%] lg:h-screen flex flex-col justify-center items-center'>
					<Image
						src='/images/about/mary.png'
						alt='Photo of Mary Kelly'
						width={371}
						height={706}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vg8AAlEBZ0IDjCQAAAAASUVORK5CYII="
						className='w-[250px] lg:w-[371px] h-auto'
						priority
					/>
				</div>
				<div className='w-full mt-auto lg:w-auto flex-1 h-full lg:h-screen flex flex-col justify-items-center justify-center items-center lg:pr-20 text-custom-black'>
					<div className='w-10/12 h-full flex flex-col justify-center'>
						<p className='text-sm lg:text-lg font-light font-stolzl leading-loose bg-white bg-opacity-0 py-2 mt-10 lg:mt-0'>
							<span className='font-medium tracking-wide'>Greetings! I hope you are doing well today. </span> My name is Mary Kelly and
							this is my porfolio site. Also, just to clarify any potential confusion around my two &quot;first names&quot;, my{" "}
							<span className='underline underline-offset-3'>first name is Mary</span> and my{" "}
							<span className='underline underline-offset- mr-4'>last name is Kelly.</span> :)
						</p>

						<p className='font-stolzl lg:text-lg font-light leading-loose mt-8 lg:mt-12'>
							Since I was young, I have always enjoyed a challenge. Through combining my interests in human behavior, coding, and
							technology in general, I now focus on solving problems that improve human-computer interaction. For the greater part of a
							decade, I have contributed to the realization of various digital products through my skills in software development,
							design, research, strategy, and business analysis.
						</p>

						<p className='font-stolzl lg:text-lg font-light leading-loose mt-8 lg:mt-12'>
							Outside of my professional and educational pursuits, I enjoy shooting target archery and practicing music - my main
							instrument being the trombone, which I started playing at the age of 10. I am also highly susceptible and can often be
							found in locations that serve good coffee and/or tea in a nice environment.
						</p>
					</div>
				</div>
			</div>
			<div id='saga' className='relative h-full w-full hidden lg:inline-flex flex-col'>
				<ExperienceJourney />
			</div>
			<FormalExperience />
			<SkillsAndTools />
			<Contact />
		</div>
	);
}
