import Link from "next/link";

export default function Contact() {
	return (
		<div
			id='contact'
			className='relative mt-32 flex h-full w-full min-w-[360px] flex-col items-center px-8 pt-2 pb-12 xs:px-12 md:px-28 md:pt-24 md:pb-28 lg:pt-28 lg:pb-36 lg:pl-[10%] xl:pl-[18%]'>
			<div className='absolute -top-20 left-0 mb-2 mt-6 flex flex-col font-gravesend text-[120px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[10%] text-stroke-custom-navy text-stroke text-stroke-[1.5px] sm:text-[150px] md:-ml-5 md:mt-16 md:text-[210px]'>
				<h1 className='absolute whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>
					Contact
				</h1>
			</div>
			<div className='mb-12 flex w-full max-w-[1000px] flex-col xl:mx-0 xl:max-w-[1200px] 2xl:max-w-[1400px]'>
				<h2 className='mb-[52px] font-itc text-4xl font-normal text-custom-black md:text-5xl lg:mb-24  lg:font-medium 2xl:text-[56px]'>
					Drop me a line!
				</h2>
				<div className='ml-0.5 flex w-full max-w-[1000px] flex-col space-y-5 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 xl:max-w-[1200px] 2xl:max-w-[1400px]'>
					<div className='flex w-full items-center'>
						<p className='mr-5 font-stolzl text-base text-custom-gray-blue sm:text-xl'>
							Email{" "}
						</p>
						<Link
							href='mailto:mary@marykelly.tech'
							target='_blank'
							rel='noreferrer'
							className='font-stolzl text-base text-custom-black hover:text-custom-orange hover:underline hover:underline-offset-[8px] dark:tracking-wide sm:text-xl'>
							mary@marykelly.tech
						</Link>
					</div>
					<div className='flex w-full items-center'>
						<p className='mr-5 font-stolzl text-base text-custom-gray-blue sm:text-xl'>
							Github
						</p>
						<Link
							href='https://github.com/marymkelly'
							target='_blank'
							rel='noreferrer'
							className='font-stolzl text-base text-custom-black hover:text-custom-orange hover:underline hover:underline-offset-[8px] dark:tracking-wide sm:text-xl'>
							github.com/marymkelly
						</Link>
					</div>
					<div className='flex w-fit items-center xl:w-full'>
						<Link
							href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'
							target='_blank'
							rel='noreferrer'
							className='mr-5 font-stolzl text-base text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange sm:text-xl'>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
