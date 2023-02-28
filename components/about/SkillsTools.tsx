import { useEffect, useState, useRef, LegacyRef, useContext } from "react";
import ThemeContext from "../../context/ThemeCtx";
import { technologies, skills } from "../../lib/data/tools";
import { filter } from "../../lib/utils/filter";

export default function SkillsAndTools() {
	const [selectedToolCategory, setToolCategory] = useState<string>("All");
	const [query, setQuery] = useState<string>("");
	const filteredTools = filter(query, technologies.items);
	const skillsRef = useRef<HTMLDivElement>();
	const themeCtx = useContext(ThemeContext);

	useEffect(() => {
		themeCtx.setDarkElements([skillsRef.current]);

		function handleResize() {
			if (window.visualViewport!.width < 768) {
				setToolCategory("All");
			}
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			ref={skillsRef as LegacyRef<HTMLDivElement>}
			id='skills-tools'
			className='relative flex h-full w-full flex-col bg-custom-dark-navy px-4 pb-6 lg:px-0'>
			<div className='text-stroke-custom-white mb-2 mt-6 flex flex-col font-gravesend text-[120px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[12%] text-stroke text-stroke-[1.5px] sm:text-[150px] md:-ml-5 md:mt-16 md:text-[210px]'>
				<h1 className='whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>
					Skills
				</h1>
			</div>
			<div className='mb-12 -mt-16 flex w-full justify-center pb-8 md:-mt-24'>
				<div className='relative flex w-full flex-col justify-between px-8 md:w-10/12 md:flex-row'>
					{skills.map((skillArea, i) => {
						skillArea.skills.sort();
						return (
							<div
								key={`skill-area-${i}`}
								className={`mb-10 font-stolzl ${skillArea.classes}`}>
								<h5
									className={`h-12 whitespace-nowrap tracking-wide text-white md:whitespace-normal lg:mb-6 lg:text-lg ${skillArea.classes}`}>
									{skillArea.category}
								</h5>
								<ul
									className={`list-none text-sm text-slate-100 md:mt-4 lg:mt-0 lg:text-base ${
										skillArea.category.startsWith("Business")
											? "columns-2"
											: "columns-1"
									}`}>
									{skillArea.skills.map((item, j) => (
										<li
											key={`skill-${j}`}
											className='font-extralight leading-6 tracking-wide lg:leading-8'>
											{item}
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<div className='text-stroke-custom-white -ml-5 -mt-28 mb-2 flex flex-col self-end font-gravesend text-[120px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[12%] text-stroke text-stroke-[1.5px] sm:text-[150px] md:text-[210px] lg:-mt-20'>
				Tools
			</div>
			<div className='-mt-12 flex w-full flex-col items-center justify-end pr-4 md:-mt-32 lg:pr-0'>
				<div className='w-full pb-16 md:w-10/12'>
					<div className='mb-4 flex items-center'>
						<input
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							type='text'
							placeholder='Search'
							className='z-10 ml-6 mr-4 h-9 w-60 rounded bg-custom-gray-blue/25 pb-0.5 indent-2 align-middle text-sm text-white placeholder:text-custom-gray-blue/50 focus-within:placeholder:text-custom-gray-blue/75 focus:outline-none focus:outline-[1.5px] focus:outline-offset-0 focus:outline-custom-teal/50 focus:ring-1 focus:ring-custom-teal'
						/>

						{["All", ...Object.keys(technologies.categories)].sort().map((item) => (
							<div
								key={`tool-category-${item}`}
								className={`mx-2 hidden items-center rounded-full border px-4 py-1 md:inline-flex md:px-3.5 ${
									selectedToolCategory === item
										? "border-transparent bg-custom-teal"
										: "border-custom-gray-blue/60 bg-transparent"
								}`}
								onClick={() => {
									setToolCategory(item);
								}}>
								<p
									className={`whitespace-nowrap font-itc text-xs tracking-wider lg:text-sm ${
										selectedToolCategory === item
											? "font-semibold text-custom-dark-navy"
											: "font-light text-custom-gray-blue/60"
									}`}>
									{item}
								</p>
							</div>
						))}
					</div>

					<div className='ml-6 mr-2 flex h-[400px] min-w-[311px] max-w-[1440px] flex-auto flex-wrap justify-start overflow-scroll bg-custom-gray-blue/10 pt-3 pl-2 sm:pl-4 md:min-h-[386px] lg:h-auto lg:min-h-[120px] 2xl:pl-6'>
						{filteredTools.length > 0 ? (
							filteredTools.map((item, i) => {
								return (
									<div
										key={`tech-item-${i}`}
										className={`m-1 pt-1.5 pb-2 ${
											item.category === selectedToolCategory ||
											selectedToolCategory === "All"
												? "flex"
												: "hidden"
										} relative h-[100px] w-[90px] max-w-[100px] flex-col items-center justify-between`}>
										<div className='relative flex h-[50px] w-[50px] items-center justify-center p-1'>
											<item.component className='h-full w-full' />
										</div>
										<p className='mt-0 min-h-[34px] justify-items-start pt-2 text-center align-top font-stolzl text-[10px] font-light leading-tight text-custom-gray-blue'>
											{item.name}
										</p>
									</div>
								);
							})
						) : (
							<div className='mb-4 flex h-full w-full justify-center self-center text-sm text-custom-gray-blue/75'>
								<p>No Matches</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
