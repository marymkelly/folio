import React from "react";

interface ProjectOverviewProps {
	textClasses?: string;
	overviewClasses?: string;
}

export default function ParrotOverview(props: ProjectOverviewProps): JSX.Element {
	return (
		<div className={`w-full flex flex-col items-center pt-[72px] pb-24 ${props?.overviewClasses}`}>
			<div className='max-w-[1100px] flex flex-col items-start px-16 lg:px-0'>
				<div className='flex flex-col w-full mb-10'>
					<h5 className={`font-stolzl mb-5 ${props.textClasses}`}>Overview</h5>
					<p className='font-gothic text-lg mb-6 tracking-[0.02em]'>
						I was hired as Sin Pin’s primary in-house software developer in 2022. From day one,
						<span className='font-stolzl font-light text-2xl mx-2 leading-10'>
							I was faced with the huge undertaking of redesigning and building an update for the front-end of their existing web
							platform,
						</span>{" "}
						as well as assisting in the migration of their technology stack to more current technologies.
					</p>

					<p className='font-gothic text-lg mb-4 mt-2 tracking-[0.02em]'>
						I currently continue to work with company leadership to advance new and existing areas of their system.{" "}
					</p>
				</div>
				<div className='flex flex-col w-full'>
					<h5 className={`font-stolzl mb-5 ${props.textClasses}`}>Technologies</h5>
					<p className='font-stolzl font-light text-2xl'>NextJS, NodeJS, ReactJS, MongoDB, Tailwind CSS, MUI Datagrid</p>
				</div>
			</div>
		</div>
	);
}
