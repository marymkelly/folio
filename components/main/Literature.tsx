import DotGroup from "../Dots";
import { articles } from "../../lib/data/projects";
import { convertMonth } from "../../lib/utils/date";
import Link from "next/link";

export default function Literature() {
	return (
		<div
			id='articles'
			className='flex w-full flex-col bg-[#5eadcc] bg-opacity-[10%] pt-24 pb-20  md:mt-20'>
			<div className='mod:pb-24 mod:2xl:pb-36 relative flex h-full w-full min-w-[360px] max-w-[1000px] flex-col px-8 pt-10  xs:px-12 md:px-28 lg:pl-[10%] xl:max-w-[1400px] xl:pl-[18%]'>
				<div className='absolute -top-12 left-0 mb-2 mt-6 flex flex-col font-gravesend text-[120px] font-bold leading-none tracking-[-0.02em] text-transparent opacity-[9%] text-stroke-custom-navy text-stroke text-stroke-[1.5px] sm:text-[150px] md:-top-28 md:-ml-5 md:mt-16 md:text-[210px]'>
					<h1 className='absolute -top-5 whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>
						Words
					</h1>
				</div>
				<div className='mb-16 w-full'>
					<h2 className='mb-10 font-itc text-4xl font-normal tracking-wide text-custom-black md:mb-[52px] md:text-5xl lg:mb-10 lg:font-medium 2xl:text-[56px]'>
						Hot off the keypress
					</h2>
					<p className="pl-0.5 font-['Didact_Gothic'] text-base leading-[1.75] tracking-wide md:text-lg lg:mb-4 lg:pl-1 lg:text-xl lg:leading-loose xl:max-w-[1105px]">
						I wrote some things, if you&apos;re looking for something to read.
					</p>
				</div>

				<div>
					{articles.map((article) => (
						<Link key={article.title} href={article.href}>
							<div
								key={article.title}
								className='flex items-baseline justify-between'>
								<p className='xs:[20px] mb-9 font-itc text-lg font-medium tracking-wide text-custom-orange/90 underline decoration-custom-orange/40 decoration-[1.5px] underline-offset-8 last:mb-0 hover:text-custom-orange/100 hover:decoration-custom-orange/100 sm:text-[22px] md:text-2xl lg:mb-12'>
									{article.title}
								</p>
								<p className='ml-4 text-right font-stolzl font-light text-custom-gray-blue/80 sm:text-lg'>
									{convertMonth(article.date!.month, "abbreviation")}{" "}
									{article.date!.year}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className='relative hidden'>
					<div className='absolute right-0 z-[-1] h-[400px] w-[480px]'>
						<DotGroup id='more-experience-dots' density={3.25} size={3} />
					</div>
				</div>
			</div>
		</div>
	);
}
