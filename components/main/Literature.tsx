import DotGroup from "../Dots";
import { articles } from "../../lib/data/projects";
import { convertMonth } from "../../lib/utils/date";
import Link from "next/link";

export default function Literature() {
	return (
		<div id="articles" className="bg-[#5eadcc] bg-opacity-[10%] flex flex-col w-full pt-24 pb-20  md:mt-20">
			<div className='mod:pb-24 mod:2xl:pb-36 pt-10 px-8 xs:px-12 md:px-28 lg:pl-[10%] xl:pl-[18%] min-w-[360px] max-w-[1000px] xl:max-w-[1400px]  w-full h-full flex flex-col relative'>
				<div className='absolute -top-12 md:-top-28 left-0 flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-custom-navy text-stroke-[1.5px] opacity-[9%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]'>
					<h1 className='absolute -top-5 whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre'>Words</h1>
				</div>
				<div className='mb-16 w-full'>
					<h2 className='font-itc font-normal tracking-wide lg:font-medium text-4xl md:text-5xl 2xl:text-[56px] text-custom-black dark:text-white mb-10 md:mb-[52px] lg:mb-10'>
						Hot off the keypress
					</h2>
					<p className="font-['Didact_Gothic'] pl-0.5 lg:pl-1 text-base md:text-lg lg:text-xl leading-[1.75] lg:leading-loose tracking-wide xl:max-w-[1105px] lg:mb-4">
						I wrote some things, if you&apos;re looking for something to read.
					</p>
				</div>

				<div>
					{articles.map((article) => (
						<Link key={article.title} href={article.href}>
							<div key={article.title} className='flex justify-between items-baseline'>
								<p className='font-itc text-lg xs:[20px] sm:text-[22px] md:text-2xl font-medium tracking-wide text-custom-orange/90 decoration-[1.5px] decoration-custom-orange/40 hover:text-custom-orange/100 hover:decoration-custom-orange/100 underline underline-offset-8 mb-9 lg:mb-12 last:mb-0'>
									{article.title}
								</p>
								<p className='font-stolzl sm:text-lg text-custom-gray-blue/80 font-light ml-4 text-right'>
									{convertMonth(article.date!.month, "abbreviation")} {article.date!.year}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className='relative hidden'>
					<div className='w-[480px] h-[400px] absolute right-0 z-[-1]'>
						<DotGroup id='more-experience-dots' density={3.25} size={3} />
					</div>
				</div>
			</div>
		</div>
	);
}
