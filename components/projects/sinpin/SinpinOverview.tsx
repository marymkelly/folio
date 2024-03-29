import React from "react";

interface ProjectOverviewProps {
	textClasses?: string;
	overviewClasses?: string;
}

export default function ParrotOverview(props: ProjectOverviewProps): JSX.Element {
	return (
		<div
			className={`flex w-full flex-col items-center pt-[72px] pb-24 ${props?.overviewClasses}`}>
			<div className='flex max-w-[1100px] flex-col items-start px-16 xl:px-0'>
				<div className='mb-10 flex w-full flex-col'>
					<h5 className={`mb-5 font-stolzl ${props.textClasses}`}>Overview</h5>
					<p className='mb-6 font-gothic text-lg tracking-[0.02em]'>
						I was hired as Sin Pin’s primary in-house software developer in 2022. At the
						time, the company was embarking on implementing significant changes to their
						platform, including infrastructure and product updates. From day one,
						<span className='mx-2 font-stolzl text-2xl font-light leading-10'>
							I tackled the massive undertaking of the front-end redesign and
							development of their existing web platform,
						</span>
						and assisted in the migration of their technology stack to more
						current technologies.
					</p>
				</div>
				<div className='flex w-full flex-col'>
					<h5 className={`mb-5 font-stolzl ${props.textClasses}`}>Technologies</h5>
					<p className='font-stolzl text-2xl font-light'>
						NextJS, NodeJS, ReactJS, MongoDB, Tailwind CSS, MUI Datagrid
					</p>
				</div>
			</div>
		</div>
	);
}
