// import Button from "../common/Button";
import Link from "next/link";
import ProjectPreview from "./ProjectPreview";
import { projects } from "../../lib/data/projects";
import { getPreviewDateString } from "../../lib/data/projects";

export default function RecentWorks() {
	return (
		<div id='recent-works' className='relative mt-8 flex flex-col pb-36 pt-44 sm:mt-20'>
			<div className='absolute -top-20 left-0 mb-2 mt-8 flex w-full flex-col font-gravesend text-[100px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[18%] text-stroke-custom-gray-blue text-stroke text-stroke-[1.5px] sm:text-[120px] md:-top-40 md:-ml-5 md:text-[210px]'>
				<h1 className=''>Recent</h1>
				<h1 className='-mt-4 -mr-48 flex sm:-mr-28 md:-mt-16 md:-mr-64 md:self-end md:justify-self-end lg:-mr-8'>
					Works
				</h1>
			</div>

			{projects.map((p, i) => {
				return (
					<ProjectPreview
						key={`project-preview-${i}`}
						{...p}
						background={p.preview?.colors.background!}
						overlay={p.preview?.colors.overlay!}
						image={p.preview?.image!}
						repository={p.url?.github}
						url={p.url?.live}
						dates={getPreviewDateString(p.dates)}
						divide={p.preview?.divide}
					/>
				);
			})}

			<div className='mt-4 w-full max-w-[1000px] self-center justify-self-center bg-logo-teal/[10%] px-16 py-10 font-itc font-light leading-10 tracking-[.018em] md:mt-12 md:text-lg xl:max-w-[1100px] 2xl:max-w-[1200px]'>
				While I am currently in the process of updating and adding additional projects to
				this site, other examples of my work are available through this{" "}
				<a
					href='https://portfolio-v2.marykelly.tech'
					target='_blank'
					rel='noreferrer'
					className='group peer ml-px font-stolzl font-light tracking-[0.015em] text-logo-teal hover:brightness-95 md:font-medium'>
					<span className='underline decoration-[1.5px] underline-offset-4'>
						previous version of my portfolio site
					</span>
					<span className="font-itc text-custom-black group-hover:ml-1 group-hover:text-inherit group-hover:before:content-['→']" />
				</a>
				<span className='peer-hover:hidden'>.</span>
			</div>

			{/* <Button
		label='View more projects'
		showArrow={false}
		className='hidden inline-flex w-fit text-logo-teal mx-[18%] mt-12 text-opacity-100 hover:text-opacity-90 border-logo-teal dark:border-slate-400 border-opacity-80 hover:border-opacity-75 bg-white hover:bg-[#defcff] dark:bg-custom-dark-navy bg-opacity-80 border-2 px-7 py-3.5 font-itc font-normal text-lg tracking-wide z-40'
	/> */}
		</div>
	);
}
