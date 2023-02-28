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
		<div className='mb-[45px] flex w-full justify-between'>
			<div className='flex flex-col font-itc'>
				<h3 className='text-xl font-bold tracking-[.02em]'>
					{props.title}
					{props.subtitle && (
						<>
							,<span className='ml-2 text-base font-normal'>{props.subtitle}</span>
						</>
					)}
				</h3>
				<h5 className='mt-2.5 text-base font-light tracking-[0.035em]'>
					{props.organization}
				</h5>
			</div>
			<div className='whitespace-nowrap text-right font-stolzl text-base text-custom-navy/50 md:whitespace-normal md:text-lg'>
				{props.startDate}
				{props?.endDate && props.endDate !== props.startDate && ` - ${props.endDate}`}
			</div>
		</div>
	);
}
