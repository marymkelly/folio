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
						Research studies have shown that the development of social media has allowed for a culture of alienation and isolation from
						behind a computer keyboard, as well as the promotion of an unhealthy, superficial culture based around likes.
					</p>
					<p className='font-gothic text-lg mb-4 tracking-[0.02em]'>Concerned with this,</p>
					<p className='font-stolzl font-light text-2xl'>
						Parrot Social Media sought to bring a new platform to the scene, geared towards encouraging the “social” aspect of “social
						media.”
					</p>
				</div>
				<div className='flex flex-col w-full'>
					<h5 className={`font-stolzl mb-5 ${props.textClasses}`}>The Challenge</h5>
					<p className='font-stolzl font-light text-2xl'>
						Design a sleek, mobile-based, social media platform that encourages interactions between users and shared experiences.
					</p>
				</div>
			</div>
		</div>
	);
}
