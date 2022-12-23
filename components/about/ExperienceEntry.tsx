import React from "react";

interface ExperienceItemProps {
	title: string;
	subtitle?: string;
	organization: string;
	startDate: string | number;
	endDate?: string | number;
	className?: string;
}

export default function ExperienceItemGroup<T extends ExperienceItemProps>(props: T) {
	return (
		<div className='w-full flex justify-between mb-[45px]'>
			<div className='flex flex-col font-itc'>
				<h3 className='font-bold text-xl tracking-[.02em]'>
					{props.title}
					{props.subtitle && (
						<>
							,<span className='text-base font-normal ml-2'>{props.subtitle}</span>
						</>
					)}
				</h3>
				<h5 className='font-light text-base tracking-[0.035em] mt-2.5'>{props.organization}</h5>
			</div>
			<div className='font-stolzl text-right text-base whitespace-nowrap md:whitespace-normal md:text-lg text-custom-navy/50'>
				{props.startDate}
				{props?.endDate && props.endDate !== props.startDate && ` - ${props.endDate}`}
			</div>
		</div>
	);
}
