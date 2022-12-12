import { useEffect, useState } from "react";
import SvgDots from "../Dots";

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default function MainHeader() {
	const adjArray = [
		["Software", "Developer"],
		["Business", "Analyst"],
		["Product", "Designer"],
		["Digital", "Solutionist"],
		["Problem", "Solver"],
	];

	const [adjSet, setAdjSet] = useState(adjArray[getRandomInt(0, adjArray.length)]);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setAdjSet(adjArray[getRandomInt(0, adjArray.length)]);
	// 	}, 2000);
	// }, []);

	return (
		<header className='relative 2xl:pl-[2%] 3xl:pl-[18%] flex h-full w-full min-h-screen justify-center 3xl:justify-start items-center align-center'>
			<section className='flex flex-col lg:flex-row lg:-mr-[3%] 2xl:-mr-[4%] 3xl:-mr-0 z-40'>
				<div className='flex flex-col'>
					<h3 className='text-7xl lg:text-[60px] 2xl:text-[90px] text-custom-navy dark:text-slate-300/70 font-itc font-medium pl-1.5'>
						Hello! <span className='text-custom-gray-blue dark:text-slate-500'>I&apos;m</span>
					</h3>
					<h1 className='font-itc text-9xl lg:text-[120px] 2xl:text-[160px] font-medium leading-snug lg:leading-none'>Mary</h1>
					<div className='lg:border-[4px] 2xl:border-[5px] border-custom-orange w-[97px] lg:ml-[8px] 2xl:ml-[10px] lg:mt-8 2xl:mt-9 hidden lg:block' />
				</div>
				<div className='lg:border-[3px] 2xl:border-[4px] border-custom-navy mt-1.5 mb-16 2xl:mt-3 2xl:mb-[60px] lg:mx-16 2xl:mx-20 hidden lg:block' />
				<div className='flex lg:flex-col mt-3.5 lg:mt-0 border lg:border-none border-custom-orange justify-center lg:justify-start py-1 lg:py-0 ml-1.5 lg:ml-0'>
					<p className='text-[28px] lg:text-[65px] 2xl:text-[100px] tracking-wider lg:tracking-normal font-itc font-light lg:font-medium text-custom-orange lg:leading-none lg:-mt-1 mr-3 lg:mr-0'>
						{/* {adjSet[0]} */}
						Digital
					</p>
					<p className='text-[28px] leading-normal lg:text-[85px] 2xl:text-[130px] tracking-wider lg:tracking-normal font-itc font-light lg:font-medium text-custom-orange 2xl:leading-snug'>
						{/* {adjSet[1]} */}
						Solutionist
					</p>
				</div>
			</section>
			<div className='absolute top-28 left-0 w-4/6 sm:w-[48%] xl:w-4/12 3xl:w-[24%] h-36 dark:opacity-[3%]'>
				<SvgDots id='small-main-dots' density={3.25} size={3.5} />
			</div>
			<div className='absolute right-0 -bottom-[22%] w-5/12 h-[400px] dark:opacity-[3%]'>
				<SvgDots id='large-main-dots' density={3.5} size={4.5} className='fill-custom-gray-dots opacity-70' />
			</div>
		</header>
	);
}
