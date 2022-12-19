import Image from "next/image";
import ExperienceJourney from "../timeline/WalkExperience";

export default function AboutPage() {
	return (
		<div className='relative h-full w-full flex flex-1 flex-wrap flex-col'>
			<div className='w-full h-screen flex self-center'>
				<h1 className='-z-10 absolute font-gravesend text-stroke text-stroke-[3px] text-stroke-custom-gray-blue opacity-[10%] leading-none text-transparent text-[400px]'>
					About
				</h1>
				<div className='w-[40%] h-full flex flex-col justify-center items-center'>
					<Image src='/images/about/mary.png' alt='Photo of Mary Kelly' width={371} height={706} className='h-auto' />
				</div>
				<div className='w-auto flex-1 h-full flex flex-col justify-center items-center pr-20 text-custom-black'>
					<div className='w-10/12 h-full flex flex-col justify-center'>
						<p className='text-lg font-light font-stolzl leading-loose bg-white bg-opacity-75 py-2'>
							<span className='font-medium tracking-wide'>First things first</span>, for those of you who may be wondering, my{" "}
							<span className='underline underline-offset-3'>first name is Mary</span> and my{" "}
							<span className='underline underline-offset- mr-4'>last name is Kelly.</span> :)
						</p>

						<div className='mt-16'>
							<p className='text-xl font-stolzl leading-loose'>If we are being formal,</p>
							<h3 className='text-[40px] font-stolzl font-medium mt-1.5 leading-[1.8]'>
								I am the Lead Developer & Designer at Sin Pin,{" "}
								<span className='text-3xl text-[#b5c6cc] font-light tracking-wide'>a telecommunications company.</span>
							</h3>
							<p className='text-xl font-stolzl leading-loose mt-12'>Otherwise, I like to consider myself a “digital solutionist”.</p>
							<p className='font-stolzl text-lg font-light leading-loose mt-12'>
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
		</div>
	);
}
