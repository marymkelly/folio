import DotGroup from "../Dots";

export default function Literature() {
	return (
		<div className='pb-32 2xl:pb-36 pt-32 px-20 md:px-28 lg:pl-[10%] xl:pl-[18%] min-w-[360px] w-full h-full flex flex-col'>
			<div className='mb-12 md:mb-20'>
				<h2 className='font-itc font-light text-6xl text-custom-black mb-[52px] lg:mb-10'>Literature</h2>
				<p className="font-['Didact_Gothic'] pl-0.5 lg:pl-1 text-base md:text-lg lg:text-xl leading-[1.75] lg:leading-loose tracking-wide xl:max-w-[1105px]">
					I wrote some things, if you&apos;re looking for something to read.
				</p>
			</div>

			<div className='relative hidden'>
				<div className='w-[480px] h-[400px] absolute right-0 z-[-1]'>
					<DotGroup id='more-experience-dots' density={3.25} size={3} />
				</div>
			</div>
		</div>
	);
}
