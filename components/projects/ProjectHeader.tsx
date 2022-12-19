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
		<div className='w-full flex flex-col items-center pt-40'>
			<div className='max-w-[1100px] w-full flex flex-col items-start px-16 lg:px-0'>
				<h1 className='font-itc font-medium text-6xl lg:text-8xl mb-16'>{props.title}</h1>
				<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-20'>
					<div className='flex items-center w-auto mb-4 lg:mb-0'>
						<p className={`font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`}>Role</p>
						<p className='text-custom-black font-stolzl font-light lg:text-lg'>{props.role}</p>
					</div>
					<div className='flex items-center w-fu-auto mb-4 lg:mb-0'>
						<p className={`font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`}>Dates</p>
						<p className='text-custom-black font-stolzl font-light lg:text-lg'>{props.dates}</p>
					</div>
					<div className='flex items-center w-fu-auto'>
						<p className={`font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`}>Platforms</p>
						<p className='text-custom-black font-stolzl font-light lg:text-lg'>{props.platforms}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
