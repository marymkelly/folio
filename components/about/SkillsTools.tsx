import { useState } from "react";
import { technologies, skills } from "../../lib/data/tools";
import { filter } from "../../lib/utils/filter";

export default function SkillsAndTools() {
	const [selectedToolCategory, setToolCategory] = useState<string>("All");
	const [query, setQuery] = useState<string>("");
	const filteredTools = filter(query, technologies.items);

	return (
		<div className='relative h-full w-full flex flex-col px-4 lg:px-0 pb-6 bg-custom-dark-navy'>
			<div className='flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-white opacity-[12%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]'>
				<h1 className='whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>Skills</h1>
			</div>
			<div className='w-full flex justify-center pb-8 mb-12 -mt-16 md:-mt-24'>
				<div className='w-full flex-col md:flex-row md:w-10/12 px-8 flex justify-between relative'>
					{skills.map((skillArea, i) => {
						skillArea.skills.sort();
						return (
							<div key={`skill-area-${i}`} className={`mb-10 font-stolzl ${skillArea.classes}`}>
								<h5
									className={`text-white tracking-wide lg:text-lg whitespace-nowrap md:whitespace-normal lg:mb-6 h-12 ${skillArea.classes}`}>
									{skillArea.category}
								</h5>
								<ul
									className={`text-slate-100 md:mt-4 lg:mt-0 text-sm lg:text-base list-none ${
										skillArea.category.startsWith("Business") ? "columns-2" : "columns-1"
									}`}>
									{skillArea.skills.map((item, j) => (
										<li key={`skill-${j}`} className='font-extralight tracking-wide leading-6 lg:leading-8'>
											{item}
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<div className='flex flex-col self-end -ml-5 -mt-28 lg:-mt-20 mb-2 font-gravesend font-bold leading-none tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-white opacity-[12%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]'>
				Tools
			</div>
			<div className='w-full flex flex-col items-center justify-end pr-4 lg:pr-0 -mt-12 md:-mt-32'>
				<div className='w-full md:w-10/12 pb-16'>
					<div className='mb-4 flex items-center'>
						<input
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							type='text'
							placeholder='Search'
							className='z-10 h-9 w-60 ml-6 mr-4 align-middle pb-0.5 text-white bg-custom-gray-blue/25 placeholder:text-custom-gray-blue/50 focus-within:placeholder:text-custom-gray-blue/75 text-sm rounded focus:outline-none focus:ring-1 focus:outline-[1.5px] focus:outline-custom-teal/50 focus:outline-offset-0 indent-2 focus:ring-custom-teal'
						/>

						{["All", ...Object.keys(technologies.categories)].sort().map((item) => (
							<div
								key={`tool-category-${item}`}
								className={`inline-flex items-center mx-2 rounded-full px-4 md:px-3.5 py-1 border ${
									selectedToolCategory === item ? "border-transparent bg-custom-teal" : "bg-transparent border-custom-gray-blue/60"
								}`}
								onClick={() => {
									setToolCategory(item);
								}}>
								<p
									className={`font-itc tracking-wider text-xs lg:text-sm whitespace-nowrap ${
										selectedToolCategory === item ? "text-custom-dark-navy font-semibold" : "font-light text-custom-gray-blue/60"
									}`}>
									{item}
								</p>
							</div>
						))}
					</div>

					<div className='pt-3 pl-2 sm:pl-4 2xl:pl-6 ml-6 mr-2 flex flex-wrap flex-auto h-[400px] lg:h-auto overflow-scroll md:min-h-[386px] lg:min-h-[120px] justify-start min-w-[311px] max-w-[1440px] bg-custom-gray-blue/10'>
						{filteredTools.length > 0 ? (
							filteredTools.map((item, i) => {
								return (
									<div
										key={`tech-item-${i}`}
										className={`m-1 pt-1.5 pb-2 ${
											item.category === selectedToolCategory || selectedToolCategory === "All" ? "flex" : "hidden"
										} flex-col items-center justify-between max-w-[100px] w-[90px] h-[100px] relative`}>
										<div className='p-1 flex items-center justify-center w-[50px] h-[50px] relative'>
											<item.component className='h-full w-full' />
										</div>
										<p className='text-[10px] min-h-[34px] text-custom-gray-blue font-stolzl font-light text-center pt-2 leading-tight align-top justify-items-start mt-0'>
											{item.name}
										</p>
									</div>
								);
							})
						) : (
							<div className='w-full h-full text-sm flex justify-center self-center mb-4 text-custom-gray-blue/75'>
								<p>No Matches</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
