import Link from "next/link";
import IconLabel from "../common/IconLabel";
import { ClipboardDocumentCheckIcon, CodeBracketSquareIcon, PencilSquareIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import HistoryItem, { ExperienceHistory as ExperienceHistoryItem } from "./ExperienceEntry";
import Button from "../common/Button";
import DotGroup from "../Dots";

type ExperienceArea = [area: string, icon: Function];

export default function ExperienceOverview() {
	const experienceAreas: ExperienceArea[] = [
		["Business Analysis", ClipboardDocumentCheckIcon],
		["Software Development", CodeBracketSquareIcon],
		["UI / UX Design", RectangleGroupIcon],
		["Digital Arts & Science", PencilSquareIcon],
		["Sociology", UserGroupIcon],
	];

	const recentExperience: Exclude<ExperienceHistoryItem, "className">[] = [
		{ title: "Lead Software Developer", organization: "Sin Pin / Look International Inc.", startDate: "Apr 2022" },
		{ title: "Bachelor of Arts, Digital Arts & Sciences", organization: "University of Florida", startDate: "Aug 2021" },
	];

	return (
		<div className='pb-32 2xl:pb-36 md:pt-8 px-10 md:px-28 lg:pl-[10%] xl:pl-[18%] min-w-[360px] w-full h-full flex flex-col'>
			<div className='mb-12 md:mb-20'>
				<h2 className='section-header--main'>Experience</h2>
				<p className="font-['Didact_Gothic'] pl-0.5 lg:pl-1 text-base md:text-lg lg:text-xl leading-[1.75] lg:leading-loose tracking-wide xl:max-w-[1105px]">
					In my quest to contribute towards improving the human-computer experience, I have gained a diverse background related to software
					development, which I pull from and apply as needed today, when defining, designing, or developing solutions. Educationally, I have
					a background in sociology, and am currently pursuing a second undergraduate degree in digital arts and sciences.
				</p>
			</div>
			<div className='max-w-[1200px] flex flex-col h-auto mb-16 md:mb-36'>
				<div className='flex flex-col md:flex-row h-auto  mb-24'>
					<div className='min-w-[100px] w-2/12 pt-3 pl-0.5'>
						<h3 className='font-itc text-lg tracking-[.037em] text-custom-navy dark:text-slate-300 pt-0.5 mb-8 md:mb-0'>Areas</h3>
					</div>
					<div className='grid grid-flow-row-dense md:grid-flow-col-dense grid-cols-1 md:grid-cols-2 md:grid-rows-3 w-full h-auto md:w-10/12'>
						{experienceAreas.map((area: ExperienceArea, i: number): JSX.Element => {
							const [name, Icon] = area;

							return (
								<div key={`expArea-${i}`} className='col-span-1'>
									<IconLabel
										label={name}
										className='md:px-8 py-3 mb-2.5 3xl:mb-4 font-gravesend text-lg tracking-wide'
										icon={<Icon className='h-8 w-8 min-w-[32px] min-h-[32px] text-custom-teal stroke-1' />}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col md:flex-row h-auto'>
					<div className='min-w-[100px] w-2/12 pt-1 pl-0.5'>
						<h3 className='font-itc text-lg tracking-[.037em] text-custom-navy dark:text-slate-300 xl:pt-0.5 mb-8 md:mb-0'>Current</h3>
					</div>
					<div className='grid grid-flow-row-dense md:grid-flow-col-dense grid-cols-1 md:grid-cols-2 md:grid-rows-1 w-full h-auto md:w-10/12'>
						{recentExperience.map((entry: ExperienceHistoryItem, i: number): JSX.Element => {
							const { organization, title, startDate, endDate } = entry;

							return (
								<div key={`historyItem-${i}`} className='col-span-1'>
									<HistoryItem
										title={title}
										organization={organization}
										className='font-stolzl text-xl lg:text-2xl md:pl-8 mb-[54px] md:mb-0 tracking-[-.018em]'
										startDate={startDate}
										endDate={endDate}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='relative'>
				<div className='w-[480px] h-[138px] absolute -mt-6 -ml-[16%] z-[-1] dark:opacity-10'>
					<DotGroup id='more-experience-dots' density={3.25} size={3} />
				</div>
				<Link href="/about">
					<Button
						label='Learn more about my experience'
						showArrow={true}
						className='text-custom-orange dark:text-slate-300 text-opacity-70 hover:text-opacity-90 border-custom-orange dark:border-slate-400 border-opacity-60 hover:border-opacity-75 bg-white hover:bg-[#FFF8F3] dark:bg-custom-dark-navy bg-opacity-80 border-2 px-7 py-3.5 font-itc font-normal text-lg tracking-wide z-40'
					/>
				</Link>
			</div>
		</div>
	);
}
