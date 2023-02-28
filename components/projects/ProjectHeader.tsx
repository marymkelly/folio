import React from "react";

interface ProjectPageProps {
	title: string;
	role: string;
	dates: string;
	platforms?: string;
	textClasses?: string;
	overviewClasses?: string;
}

export default function ProjectPageHeader(props: ProjectPageProps): JSX.Element {
	return (
		<div className='flex w-full flex-col items-center pt-40'>
			<div className='flex w-full max-w-[1100px] flex-col items-start px-16 lg:px-0'>
				<h1 className='mb-16 font-itc text-6xl font-medium lg:text-8xl'>{props.title}</h1>
				<div className='mb-20 flex w-full flex-col lg:flex-row lg:items-center lg:justify-between'>
					<div className='mb-4 flex w-auto items-center lg:mb-0'>
						<p
							className={`mr-5 font-stolzl text-base font-normal lg:text-lg ${props?.textClasses}`}>
							Role
						</p>
						<p className='font-stolzl font-light text-custom-black lg:text-lg'>
							{props.role}
						</p>
					</div>
					<div className='w-fu-auto mb-4 flex items-center lg:mb-0'>
						<p
							className={`mr-5 font-stolzl text-base font-normal lg:text-lg ${props?.textClasses}`}>
							Dates
						</p>
						<p className='font-stolzl font-light text-custom-black lg:text-lg'>
							{props.dates}
						</p>
					</div>
					<div className='w-fu-auto flex items-center'>
						<p
							className={`mr-5 font-stolzl text-base font-normal lg:text-lg ${props?.textClasses}`}>
							Platforms
						</p>
						<p className='font-stolzl font-light text-custom-black lg:text-lg'>
							{props.platforms}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
