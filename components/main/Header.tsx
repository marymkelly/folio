import SvgDots from "../Dots";

export default function MainHeader() {
	return (
		<header className='relative 3xl:pl-[18%] flex h-full w-full min-h-screen justify-center 3xl:justify-start items-center align-center'>
			<section className='flex flex-col lg:flex-row lg:-mr-[3%] xl:-mr-[4%] 3xl:-mr-0'>
				<div className='flex flex-col'>
					<h3 className='text-7xl lg:text-[60px] xl:text-[90px] text-custom-navy font-itc font-medium pl-1.5'>
						Hello! <span className='text-custom-gray-blue'>I&apos;m</span>
					</h3>
					<h1 className='font-itc text-9xl lg:text-[120px] xl:text-[160px] font-medium leading-snug lg:leading-none'>Mary</h1>
					<div className='lg:border-[4px] xl:border-[5px] border-custom-orange w-[97px] lg:ml-[8px] xl:ml-[10px] lg:mt-8 xl:mt-9 hidden lg:block' />
				</div>
				<div className='lg:border-[3px] xl:border-[4px] border-custom-navy mt-1.5 mb-16 xl:mt-3 xl:mb-[60px] lg:mx-16 xl:mx-20 hidden lg:block' />
				<div className='flex lg:flex-col mt-3.5 lg:mt-0 border lg:border-none border-custom-orange justify-center lg:justify-start py-1 lg:py-0 ml-1.5 lg:ml-0'>
					<p className='text-[28px] lg:text-[65px] xl:text-[100px] tracking-wider lg:tracking-normal font-itc font-light lg:font-medium text-custom-orange lg:leading-none lg:-mt-1 mr-3 lg:mr-0'>
						Digital
					</p>
					<p className='text-[28px] leading-normal lg:text-[85px] xl:text-[130px] tracking-wider lg:tracking-normal font-itc font-light lg:font-medium text-custom-orange xl:leading-snug'>
						Solutionist
					</p>
				</div>
			</section>
			<div className='absolute top-28 left-0 w-4/6 sm:w-[48%] xl:w-4/12 3xl:w-[24%] h-36'>
				<SvgDots id='small-main-dots' density={3.25} size={3.5} />
			</div>
			<div className='absolute right-0 -bottom-[22%] w-5/12 h-[400px]'>
				<SvgDots id='large-main-dots' density={3.5} size={4.5} className='fill-custom-gray-dots opacity-70' />
			</div>
		</header>
	);
}
