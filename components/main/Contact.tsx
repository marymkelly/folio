import Link from "next/link";

export default function Contact() {
	return (
		<div
			id='contact'
			className='mt-32 pt-2 md:pt-24 lg:pt-28 pb-12 md:pb-28 lg:pb-36 min-w-[360px] px-8 xs:px-12 md:px-28 lg:pl-[10%] xl:pl-[18%] w-full h-full flex flex-col items-center relative'>
			<div className='absolute -top-20 left-0 flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-custom-navy text-stroke-[1.5px] opacity-[10%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]'>
				<h1 className='absolute whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>Contact</h1>
			</div>
			<div className='mb-12 w-full xl:mx-0 max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col'>
				<h2 className='font-itc font-normal lg:font-medium text-4xl md:text-5xl 2xl:text-[56px] text-custom-black dark:text-white mb-[52px] lg:mb-24'>
					Drop me a line!
				</h2>
				<div className='flex flex-col space-y-5 lg:space-y-0 ml-0.5 lg:flex-row lg:items-center lg:justify-between max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] w-full'>
					<div className='flex items-center w-full'>
						<p className='font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue'>Email </p>
						<Link
							href='mailto:mary@marykelly.tech'
							target="_blank"
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							mary@marykelly.tech
						</Link>
					</div>
					<div className='flex items-center w-full'>
						<p className='font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue'>Github</p>
						<Link
							href='https://github.com/marymkelly'
							target="_blank"
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							github.com/marymkelly
						</Link>
					</div>
					<div className='flex items-center w-fit xl:w-full'>
						<Link
							href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'
							target="_blank"
							className='font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange'>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
