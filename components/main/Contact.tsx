import Link from "next/link";

export default function Contact() {
	return (
		<div className='pb-20 pt-32 min-w-[360px] w-full h-full flex flex-col items-center'>
			<div className='mb-12 w-10/12 xl:w-full px-12 md:px-24 xl:mx-0 max-w-[1000px] xl:max-w-[1200px] flex flex-col'>
				<h2 className='font-itc font-normal lg:font-medium text-4xl md:text-5xl 3xl:text-[56px] text-custom-black dark:text-white mb-[52px] lg:mb-24'>
					Drop me a line!
				</h2>
				<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1000px] xl:max-w-[1200px] w-full'>
					<div className='flex items-center w-full'>
						<p className='font-stolzl text-base lg:text-xl mr-5 text-custom-gray-blue'>Email </p>
						<Link
							href='mailto:mary@marykelly.tech'
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base lg:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							mary@marykelly.tech
						</Link>
					</div>
					<div className='flex items-center w-full'>
						<p className='font-stolzl text-base lg:text-xl mr-5 text-custom-gray-blue'>Github</p>
						<Link
							href='https://github.com/marymkelly'
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base lg:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							github.com/marymkelly
						</Link>
					</div>
					<div className='flex items-center w-full'>
						<Link
							href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'
							className='font-stolzl text-base lg:text-xl mr-5 text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange'>
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
