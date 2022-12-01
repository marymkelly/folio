export interface ExperienceHistory {
	title: string;
	organization: string;
	startDate: string;
	endDate?: string;
	className?: string;
}

export default function ExperienceEntry(props: ExperienceHistory) {
	return (
		<div className={`flex flex-col ${props.className}`}>
			<p className='font-normal lg:whitespace-nowrap leading-relaxed pb-2 lg:pb-3 mb-1.5 lg:mb-2'>{props.title}</p>
			<p className='font-light pb-4 lg:pb-6'>{props.organization}</p>
			<p className='font-light'>{`${props.startDate} - ${props?.endDate ?? "Present"}`}</p>
		</div>
	);
}
