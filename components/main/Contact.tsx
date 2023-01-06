import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Button from "../common/Button";
import { GithubIcon } from "../common/GithubIcon";

export default function Contact() {
	return (
		<div
			id='contact'
			className='mt-32 pt-2 md:pt-24 lg:pt-28 pb-12 md:pb-28 lg:pb-36 min-w-[360px] px-8 xs:px-12 md:px-28 lg:pl-[10%] xl:pl-[18%] w-full h-full flex flex-col items-center relative'>
			<div className='absolute -top-20 left-0 flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-custom-navy text-stroke-[1.5px] opacity-[8%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]'>
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
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							mary@marykelly.tech
						</Link>
					</div>
					<div className='flex items-center w-full'>
						<p className='font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue'>Github</p>
						<Link
							href='https://github.com/marymkelly'
							className='text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]'>
							github.com/marymkelly
						</Link>
					</div>
					<div className='flex items-center w-fit xl:w-full'>
						<Link
							href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'
							className='font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange'>
							LinkedIn
						</Link>
					</div>
				</div>
				{/* <div className='flex w-6/12 justify-between'>
					<div className='p-[5px] flex items-center justify-center rounded-full w-10 h-10 bg-black'>
						<EnvelopeIcon className='w-8 h-8 fill-white' />
					</div>
					<GithubIcon className='w-10 h-10' />
					<svg viewBox='0 0 130 130' className='w-10 h-10'>
						<path d='M120.03,30.4A65.016,65.016,0,1,0,130,65,65.169,65.169,0,0,0,120.03,30.4ZM34.4,24.98a9.555,9.555,0,1,1-9.56,9.6A9.554,9.554,0,0,1,34.4,24.98Zm-7.21,79c-.94,0-1.13-.38-1.12-1.23q.03-12.615.01-25.22c0-8.38.02-16.75-.02-25.12,0-.97.23-1.3,1.25-1.29,4.74.05,9.47.04,14.21.01.88-.01,1.2.21,1.2,1.14q-.045,25.275-.01,50.55c0,.83-.24,1.16-1.1,1.15C36.8,103.95,31.99,103.94,27.19,103.98Zm76.46-.27a1.436,1.436,0,0,1-1.07.27q-6.945-.06-13.91,0c-1.03.01-1.35-.32-1.35-1.35.03-8.65.06-17.31-.01-25.95a30.82,30.82,0,0,0-.69-6.51c-.86-3.81-3.31-5.65-7.23-5.7a14.219,14.219,0,0,0-3.57.32c-3.8.95-5.44,3.82-6.08,7.38a30.276,30.276,0,0,0-.43,5.21c-.04,8.41-.02,16.82-.02,25.23,0,1.34,0,1.35-1.38,1.35-4.63,0-9.27-.02-13.9.02-1.03.01-1.35-.29-1.35-1.34q.045-25.08.02-50.15c0-1.34.01-1.35,1.37-1.35,4.47,0,8.93.03,13.39-.02.94-.01,1.27.26,1.24,1.22-.07,1.88-.02,3.77-.02,5.66a18.623,18.623,0,0,1,6.66-6.08,19.6,19.6,0,0,1,6.42-2.05c.21-.03.55-.07,1-.12a20.328,20.328,0,0,1,15.11,4.29c4.25,4.25,5.2,9.85,5.59,13.01.44,3.49.48,10.11.49,11V79.1c-.05,13.1-.07,22.49,0,23.56A1.362,1.362,0,0,1,103.65,103.71Z' />
					</svg>
				</div> */}
				{/* <div className='flex flex-col space-y-5 md:space-y-0 ml-0.5 lg:flex-row lg:items-center lg:justify-between max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] w-full'>
					<div className='flex items-center w-full'>
						<Link
							href='https://www.linkedin.com/in/mary-kelly-5040b6ab/'
							className='font-stolzl text-base lg:text-xl mr-5 text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange'>
							Resume
						</Link>
					</div>
				</div> */}
			</div>
		</div>
	);
}
