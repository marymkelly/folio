import React from "react";

const ExperienceGraph = () => {
	return (
		<div className='h-full w-full'>
			<div className='absolute top-[380px] w-full flex-col opacity-[55%] xs:hidden md:flex lg:top-[280px]'>
				<div className='z-10 flex w-[90%] items-center justify-between self-center'>
					<div className='bg-white px-8 font-stolzl text-4xl tracking-wider text-slate-300 text-opacity-70'>
						2011
					</div>
					<div className='bg-white px-8 font-stolzl text-[55px] tracking-wide text-transparent text-stroke-gray-300 text-stroke'>
						2014
					</div>
					<div className='bg-white px-8 font-stolzl text-4xl tracking-wider text-slate-300 text-opacity-70'>
						2017
					</div>
					<div className='bg-white px-8 font-stolzl text-[55px] tracking-wide text-transparent text-stroke-gray-300 text-stroke'>
						2019
					</div>
					<div className='bg-white px-8 font-stolzl text-4xl tracking-wider text-slate-300 text-opacity-70'>
						2022
					</div>
				</div>
				<div className='relative inset-x-auto flex w-[85%] flex-col justify-center self-center'>
					<div className='absolute bottom-28 -left-2 z-10 flex w-full flex-col text-slate-500'>
						<div className='mb-7 flex w-full items-center'>
							<div className='mr-6 font-stolzl text-[15px] font-extralight'>
								Software Development
							</div>
							<div className='flex w-auto flex-1 items-center justify-between'>
								<div className='h-1 w-[40%] rounded-full bg-slate-300/60' />
								<div className='h-1 w-[22%] rounded-full bg-slate-300/60' />
							</div>
						</div>
						<div className='flex w-full items-center justify-between pr-12'>
							<div className='mr-3 font-stolzl text-[15px] font-extralight'>
								Business Analysis
							</div>
							<div className='h-1 w-[37%] rounded-full bg-slate-300/60' />
						</div>
					</div>
					<div className='absolute -top-10 flex h-px w-full rounded-full bg-slate-300'>
						<div className='h-px rounded-full bg-logo-blue' />
					</div>
					<div className='absolute top-7 -left-2 z-10 flex w-full flex-col text-slate-500'>
						<div className='mb-7 flex w-full items-center justify-between'>
							<div className='mr-3 font-stolzl text-[15px] font-extralight'>
								Digital Arts
							</div>
							<div className='flex w-[73%] items-center justify-between'>
								<div className='h-1 w-[18%] rounded-full bg-slate-300/60' />
								<div className='h-1 w-[28%] rounded-full bg-slate-300/60' />
							</div>
						</div>
						<div className='flex w-full items-center'>
							<div className='mr-4 font-stolzl text-[15px] font-extralight'>
								Sociology
							</div>
							<div className='h-1 w-[30%] rounded-full bg-slate-300/60' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceGraph;
