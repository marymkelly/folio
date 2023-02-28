import React from "react";
import ExperienceItemGroup from "./ExperienceEntry";
import { experience, education, clients } from "../../lib/data/experience";

export default function FormalExperience() {
	return (
		<div
			id='formal-experience'
			className='relative flex h-full w-full flex-col bg-custom-gray-blue/[0%]'>
			<div className='absolute mb-2 mt-8 flex w-full flex-col font-gravesend text-[100px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[14%] text-stroke-custom-gray-blue text-stroke text-stroke-[1.5px] sm:text-[120px] md:-ml-5 md:text-[180px]'>
				<h1 className=''>Formal</h1>
				<h1 className='-mt-4 -mr-48 flex self-end justify-self-end sm:-mr-28 md:-mt-12 md:-mr-64 lg:-mr-8'>
					Experience
				</h1>
			</div>
			<div className='mt-36 flex w-[78%] self-center pb-24'>
				<div className='flex w-full flex-col justify-between lg:flex-row'>
					<div className=' mr-32 flex w-full max-w-[480px] flex-col 2xl:max-w-[520px]'>
						<h3 className='mb-12 font-itc text-4xl font-bold tracking-wide md:mb-[60px] md:text-4xl'>
							Relevant Work
						</h3>
						<div className='mb-8 flex flex-col md:mb-0'>
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
					<div className='flex w-full max-w-[500px] flex-col 2xl:max-w-[600px]'>
						<h3 className='mb-12 font-itc text-4xl font-bold tracking-wide md:mb-[60px]'>
							Education
						</h3>
						<div className='mb-8 flex max-w-[480px] flex-col md:mb-0 2xl:max-w-[520px]'>
							{education.map((entry, i) => (
								<ExperienceItemGroup
									key={`education-${i}`}
									title={entry.degree.major}
									subtitle={
										entry.degree?.minor ? `Minor: ${entry.degree.minor}` : ""
									}
									startDate={entry.dates.start}
									endDate={entry.dates?.end}
									organization={entry.institution}
								/>
							))}
						</div>
						<div className='mt-4 mb-3 flex flex-col'>
							<h5 className='mb-2 whitespace-nowrap font-stolzl text-4xl font-semibold tracking-[0.02em] md:mb-4 md:text-3xl 2xl:mb-8'>
								Client Projects
								<span className='ml-4 hidden text-sm font-light tracking-normal 2xl:inline-flex'>
									a few clients whose projects I’ve worked on
								</span>
							</h5>
							<p className='mb-12 text-sm font-light tracking-normal text-slate-700 md:text-base 2xl:hidden'>
								A few clients whose projects I’ve worked on
							</p>

							<div className='flex w-full justify-between'>
								{clients.map((client, i) => (
									<div
										key={`client-${i}`}
										className='mr-4 flex w-full max-w-[71px] flex-col first-of-type:-ml-2  md:mr-0 md:max-w-[105px]  md:items-center md:text-center md:first-of-type:ml-0 [&:nth-child(2)]:mr-7 [&:nth-child(2)]:md:-mr-2 [&:nth-child(2)]:lg:mr-0'>
										<div className='flex h-auto w-[60px] flex-col'>
											<client.component
												className={`flex h-auto w-full text-custom-black`}
											/>
										</div>
										<p className='hidden pb-2 pt-3 font-gothic text-xs md:flex'>
											{client.name}
										</p>
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
