import React from "react";
import ExperienceItemGroup from "./ExperienceEntry";
import { experience, education, clients } from "../../lib/data/experience";

export default function FormalExperience() {
	return (
		<div className='relative h-full w-full flex flex-col bg-custom-gray-blue/[0%]'>
			<div className='absolute w-full flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-8 tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[14%] text-transparent text-[100px] sm:text-[120px] md:text-[180px]'>
				<h1 className=''>Formal</h1>
				<h1 className='flex -mt-4 md:-mt-12 -mr-48 sm:-mr-28 md:-mr-64 lg:-mr-8 self-end justify-self-end'>Experience</h1>
			</div>
			<div className='flex w-[78%] self-center mt-36 pb-24'>
				<div className='w-full flex flex-col lg:flex-row justify-between'>
					<div className=' w-full flex flex-col max-w-[480px] 2xl:max-w-[520px] mr-32'>
						<h3 className='font-itc font-bold text-4xl md:text-4xl tracking-wide mb-12 md:mb-[60px]'>Relevant Work</h3>
						<div className='flex flex-col mb-8 md:mb-0'>
							{experience.map((entry, i) => (
								<ExperienceItemGroup
									key={`experience-${i}`}
									title={entry.role}
									organization={entry.company}
									startDate={entry.dates.start}
									endDate={entry.dates?.end}
								/>
							))}
						</div>
					</div>
					<div className='w-full flex flex-col max-w-[500px] 2xl:max-w-[600px]'>
						<h3 className='font-itc font-bold text-4xl tracking-wide mb-12 md:mb-[60px]'>Education</h3>
						<div className='flex flex-col max-w-[480px] 2xl:max-w-[520px] mb-8 md:mb-0'>
							{education.map((entry, i) => (
								<ExperienceItemGroup
									key={`education-${i}`}
									title={entry.degree.major}
									subtitle={entry.degree?.minor ? `Minor: ${entry.degree.minor}` : ""}
									startDate={entry.dates.start}
									endDate={entry.dates?.end}
									organization={entry.institution}
								/>
							))}
						</div>
						<div className='flex flex-col mt-4 mb-3'>
							<h5 className='font-stolzl font-semibold text-4xl md:text-3xl tracking-[0.02em] mb-2 md:mb-4 2xl:mb-8 whitespace-nowrap'>
								Client Projects
								<span className='hidden 2xl:inline-flex ml-4 text-sm tracking-normal font-light'>
									a few clients whose projects I’ve worked on
								</span>
							</h5>
							<p className='text-sm md:text-base tracking-normal font-light mb-12 2xl:hidden text-slate-700'>
								A few clients whose projects I’ve worked on
							</p>

							<div className='flex w-full justify-between'>
								{clients.map((client, i) => (
									<div key={`client-${i}`} className='max-w-[71px] md:max-w-[105px] flex flex-col items-center w-full'>
										<div className='flex flex-col w-[60px] h-auto'>
											<client.component className={`text-custom-black w-full h-auto flex hm`} />
										</div>
										<p className='pb-2 pt-3 text-xs font-gothic hidden md:flex'>{client.name}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
