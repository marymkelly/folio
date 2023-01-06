// import Button from "../common/Button";
import Link from "next/link";
import ProjectPreview from "./ProjectPreview";
import { projects } from "../../lib/data/projects";
import { getPreviewDateString } from "../../lib/data/projects";

export default function RecentWorks() {
	return (
		<div id="recent-works" className='relative pb-36 pt-44 mt-8 sm:mt-20 flex flex-col'>
			<div className='absolute -top-20 md:-top-40 left-0 w-full flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-8 tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[18%] text-transparent text-[100px] sm:text-[120px] md:text-[210px]'>
				<h1 className=''>Recent</h1>
				<h1 className='flex -mt-4 md:-mt-16 -mr-48 sm:-mr-28 md:-mr-64 lg:-mr-8 md:self-end md:justify-self-end'>Works</h1>
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

			<div className='bg-logo-teal/[10%] mt-4 md:mt-12 px-16 py-10 leading-10 font-light md:text-lg font-itc tracking-[.018em] self-center justify-self-center w-full max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1200px]'>
				While I am currently in the process of updating and adding additional projects to this site, other examples of my work are available
				through this{" "}
				<a
					href='https://portfolio-v2.marykelly.tech'
					target="_blank"
					className='group peer font-stolzl font-light md:font-medium tracking-[0.015em] ml-px hover:brightness-95 text-logo-teal'>
					<span className='decoration-[1.5px] underline underline-offset-4'>previous version of my portfolio site</span>
					<span className="font-itc group-hover:before:content-['→'] group-hover:text-inherit text-custom-black group-hover:ml-1" />
				</a>
				<span className='peer-hover:hidden'>.</span>
			</div>

			{/* <Button
		label='View more projects'
		showArrow={false}
		className='hidden inline-flex w-fit text-logo-teal mx-[18%] mt-12 dark:text-slate-300 text-opacity-100 hover:text-opacity-90 border-logo-teal dark:border-slate-400 border-opacity-80 hover:border-opacity-75 bg-white hover:bg-[#defcff] dark:bg-custom-dark-navy bg-opacity-80 border-2 px-7 py-3.5 font-itc font-normal text-lg tracking-wide z-40'
	/> */}
		</div>
	);
}
