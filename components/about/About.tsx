import Image from "next/image";
import ExperienceJourney from "./timeline/WalkJourney";
import SkillsAndTools from "./SkillsTools";
import FormalExperience from "./FormalExperience";

export default function AboutPage() {
	return (
		<div className='relative h-full w-full flex flex-1 flex-wrap flex-col pb-6'>
			<div className='w-full h-full min-h-screen flex-col lg:flex-row flex lg:self-center pb-12 md:pb-20 px-8 lg:px-0'>
				<h1 className='-z-10 absolute font-gravesend font-bold tracking-wide text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[15%] leading-none text-transparent mt-12 lg:mt-0 text-[100px] xs:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[400px]'>
					About
				</h1>
				<div className='mt-36 lg:mt-auto w-full lg:w-[40%] lg:h-screen flex flex-col justify-center items-center'>
					<Image
						src='/images/about/mary.png'
						alt='Photo of Mary Kelly'
						width={371}
						height={706}
						className='w-[250px] lg:w-[371px] h-auto'
					/>
				</div>
				<div className='w-full mt-auto lg:w-auto flex-1 h-full lg:h-screen flex flex-col justify-items-center justify-center items-center lg:pr-20 text-custom-black'>
					<div className='w-10/12 h-full flex flex-col justify-center'>
						<p className='text-sm lg:text-lg font-light font-stolzl leading-loose bg-white bg-opacity-0 py-2 mt-10 lg:mt-0'>
							<span className='font-medium tracking-wide'>First things first</span>, for those of you who may be wondering, my{" "}
							<span className='underline underline-offset-3'>first name is Mary</span> and my{" "}
							<span className='underline underline-offset- mr-4'>last name is Kelly.</span> :)
						</p>

						<div className='mt-8 lg:mt-16'>
							<p className='text-xl font-stolzl leading-loose'>If we are being formal,</p>
							<h3 className='text-3xl py-2 lg:py-0 lg:text-[40px] font-stolzl font-medium mt-1.5 leading-[1.4] lg:leading-[1.8]'>
								I am the Lead Developer & Designer at Sin Pin
								<span className='hidden text-2xl lg:text-3xl text-[#b5c6cc] font-light tracking-wide whitespace-normal sm:whitespace-pre lg:whitespace-normal'>
									, a telecommunications company.
								</span>
							</h3>
							<p className='text-xl font-stolzl leading-loose mt-4 lg:mt-12'>
								Otherwise, I like to consider myself a “digital solutionist”.
							</p>
							<p className='font-stolzl lg:text-lg font-light leading-loose mt-4 lg:mt-12'>
								Since I was young, I have always enjoyed a challenge. Combining my interests in human behavior, coding, and technology
								in general, I now focus on solving problems problems that improve human-computer interaction. For the greater part of
								a decade, I have helped in the realization of various digital products, through my skills in software development,
								design, research, strategy, and business analysis.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='relative h-full w-full inline-flex flex-col'>
				<ExperienceJourney />
			</div>
			<FormalExperience />
			<SkillsAndTools />
		</div>
	);
}
