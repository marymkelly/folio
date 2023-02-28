import React from "react";

interface ProjectOverviewProps {
	textClasses?: string;
	overviewClasses?: string;
}

export default function ParrotOverview(props: ProjectOverviewProps): JSX.Element {
	return (
		<div
			className={`flex w-full flex-col items-center pt-[72px] pb-24 ${props?.overviewClasses}`}>
			<div className='flex max-w-[1100px] flex-col items-start px-16 lg:px-0'>
				<div className='mb-10 flex w-full flex-col'>
					<h5 className={`mb-5 font-stolzl ${props.textClasses}`}>Overview</h5>
					<p className='mb-6 font-gothic text-lg tracking-[0.02em]'>
						Research studies have shown that the development of social media has allowed
						for a culture of alienation and isolation from behind a computer keyboard,
						as well as the promotion of an unhealthy, superficial culture based around
						likes.
					</p>
					<p className='mb-4 font-gothic text-lg tracking-[0.02em]'>
						Concerned with this,
					</p>
					<p className='font-stolzl text-2xl font-light'>
						Parrot Social Media sought to bring a new platform to the scene, geared
						towards encouraging the “social” aspect of “social media.”
					</p>
				</div>
				<div className='flex w-full flex-col'>
					<h5 className={`mb-5 font-stolzl ${props.textClasses}`}>The Challenge</h5>
					<p className='font-stolzl text-2xl font-light'>
						Design a sleek, mobile-based, social media platform that encourages
						interactions between users and shared experiences.
					</p>
				</div>
			</div>
		</div>
	);
}
