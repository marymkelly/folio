import React from "react";

const ExperienceGraph = () => {
	return (
		<div className='h-full w-full'>
			<div className='w-full md:flex flex-col top-[380px] lg:top-[280px] opacity-[55%] absolute xs:hidden'>
				<div className='flex items-center w-[90%] self-center justify-between z-10'>
					<div className='font-stolzl text-4xl bg-white px-8 tracking-wider text-slate-300 text-opacity-70'>2011</div>
					<div className='font-stolzl text-[55px] bg-white px-8 text-stroke text-stroke-gray-300 text-transparent tracking-wide'>2014</div>
					<div className='font-stolzl text-4xl bg-white px-8 tracking-wider text-slate-300 text-opacity-70'>2017</div>
					<div className='font-stolzl text-[55px] bg-white px-8 text-stroke text-stroke-gray-300 text-transparent tracking-wide'>2019</div>
					<div className='font-stolzl text-4xl bg-white px-8 tracking-wider text-slate-300 text-opacity-70'>2022</div>
				</div>
				<div className='w-[85%] self-center inset-x-auto relative flex flex-col justify-center'>
					<div className='flex flex-col z-10 absolute bottom-28 -left-2 text-slate-500 w-full'>
						<div className='w-full flex items-center mb-7'>
							<div className='font-stolzl font-extralight text-[15px] mr-6'>Software Development</div>
							<div className='w-auto flex-1 flex items-center justify-between'>
								<div className='w-[40%] h-1 bg-slate-300/60 rounded-full' />
								<div className='w-[22%] h-1 bg-slate-300/60 rounded-full' />
							</div>
						</div>
						<div className='w-full flex items-center justify-between pr-12'>
							<div className='font-stolzl font-extralight text-[15px] mr-3'>Business Analysis</div>
							<div className='w-[37%] h-1 bg-slate-300/60 rounded-full' />
						</div>
					</div>
					<div className='w-full h-px bg-slate-300 flex rounded-full absolute -top-10'>
						<div className='h-px bg-logo-blue rounded-full' />
					</div>
					<div className='flex flex-col z-10 absolute top-7 -left-2 text-slate-500 w-full'>
						<div className='w-full flex items-center mb-7 justify-between'>
							<div className='font-stolzl font-extralight text-[15px] mr-3'>Digital Arts</div>
							<div className='w-[73%] flex items-center justify-between'>
								<div className='w-[18%] h-1 bg-slate-300/60 rounded-full' />
								<div className='w-[28%] h-1 bg-slate-300/60 rounded-full' />
							</div>
						</div>
						<div className='w-full flex items-center'>
							<div className='font-stolzl font-extralight text-[15px] mr-4'>Sociology</div>
							<div className='w-[30%] h-1 bg-slate-300/60 rounded-full' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceGraph