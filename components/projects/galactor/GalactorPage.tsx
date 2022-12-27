import React, { Context, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ThemeCtx, { ThemeContextInterface } from "../../../context/ThemeCtx";
import Button from "../../common/Button";
import { GithubIcon } from "../../common/GithubIcon";

interface ProjectPageProps {
	title?: string;
	role?: string | string[];
	dates?: string;
	platforms?: string | string[];
	technologies?: string | string[];
	textClasses?: string;
	overviewClasses?: string;
	url?: { live?: string; github?: string; design?: string };
	repository?: string;
}

export default function GalactorPage<T extends ProjectPageProps>(props: T): JSX.Element {
	const router = useRouter();
	const themeCtx: ThemeContextInterface = useContext(ThemeCtx);
	const overviewCategories = ["dates", "platforms", "role", "technologies"];

	useEffect(() => {
		themeCtx.setBackgroundColor("#092636");
		themeCtx.setBackgroundIsDark(true);
		themeCtx.setIsFooterFixed(true);

		return () => {
			themeCtx.setIsFooterFixed(false);
			themeCtx.setBackgroundColor("#ffffff");
			themeCtx.setBackgroundIsDark(false);
		};
	}, []);

	return (
		<div className='w-full flex flex-col items-center bg-[#092636] text-white'>
			<div className='flex w-full max-w-[1200px] h-auto py-20 px-4 lg:h-screen flex-col'>
				<Image
					src='/images/projects/galactor/galactor.png'
					alt='Galactor Screenshot'
					className='border-[4px] border-slate-200 rounded-2xl'
					width={2400}
					height={1525}
					priority
				/>
			</div>
			<div className='flex flex-col w-full h-full bg-[#EEF9FF] relative lg:p-40 px-8 pt-12 pb-16'>
				<div className='absolute w-auto flex flex-col md:-ml-8 left-0 top-0 mb-2 mt-2 font-gravesend font-bold leading-none -ml-8 tracking-[0.01em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[14%] text-transparent text-[100px] sm:text-[120px] md:text-[280px]'>
					<h1 className=''>Galactor</h1>
				</div>
				<div className='flex flex-col lg:flex-row w-full max-w-6xl justify-between self-center'>
					<div className='flex flex-col w-full lg:w-8/12'>
						<h2 className='text-[#001723] font-itc text-5xl flex items-center mb-10'>
							Overview <span className='w-[360px] h-[1.5px] bg-[#001723] ml-7' />
						</h2>
						<p className='prose mb-8'>
							The most recent release of a previously existing project, Galactor (version 3), brings a fresh, modern update to its
							former basic, interface.
						</p>
						<p className='prose mb-8'>
							Historically, the Galactor project was intended to be a collaborative project, built by a team of approximately five
							individuals, for the purpose of coding (web development) practice, experience building, and keeping accountability.
							Through group ideation, the main concept for this project was determined:
						</p>
						<strong className='prose mb-8'>
							A platform where users can search <span className='line-through'>and “nickname”</span> stars based on a geographical
							location on Earth.
						</strong>
						<p className='prose mb-8'>
							To cut to the chase, that was the only thing the group did together on this project and it eventually turned into a
							personal project due to me being the only contributor. More on building the earlier versions can be read here. As a
							result, I chose to deviate from the original concept and omit the nickname feature.
						</p>
						<p className='prose mb-8'>
							The lack of the nickname feature and minimalistic styling applied in the previous versions(s) always left more to be
							desired from the star search. Therefore, a primary goal for version 3 was to make it more enticing, either through
							incorporation of a new feature or through its design.
						</p>
					</div>
					<div className='flex w-full lg:w-4/12'>
						<div className='border-[#A5EAC8] bg-[#A5EAC8]/20 border-2 py-3 px-9 flex flex-col w-full h-min mt-[22px] max-w-[380px]'>
							{overviewCategories
								.map((key: string, i) => {
									return Object.getOwnPropertyNames(props).includes(key) ? (
										<div
											key={`overview-category-${i}`}
											className='flex flex-col mb-[30px] last:mb-4 text-custom-black first:mt-4'>
											<label className='tracking-wider font-gravesend font-bold text-[15px] mb-3 leading-none'>
												{key === "dates" ? (props.dates?.search(/[-]/) === -1 ? "Date" : key) : key}
											</label>
											<p className='font-light font-stolzl leading-7'>
												{typeof props[key as keyof Omit<ProjectPageProps, "url">] === "string"
													? props[key as keyof Omit<ProjectPageProps, "url">]
													: props[key as keyof ProjectPageProps]?.toString().split(",").join(", ")}
											</p>
										</div>
									) : undefined;
								})
								.filter((entry) => entry)}
						</div>
					</div>
				</div>
			</div>
			<div className='py-20 px-8'>
				<div className='flex w-full flex-col lg:flex-row mb-6 lg:pt-16'>
					<div className='flex flex-col w-full lg:w-6/12'>
						<h3 className='font-itc tracking-wide text-[22px] flex items-center mb-10'>
							Determining Direction <span className='hidden lg:flex w-[250px] h-[1.5px] ml-7' />
						</h3>
						<p className='prose mb-8 text-slate-50'>
							The previous version provided the user with basic search functionality and was limited to displaying a max of 10 stars at
							a time.
						</p>
						<p className='prose mb-8 text-slate-50'>
							Based on this, one concept I considered was showing searched locations on a 3D globe with its relative stars render around
							the model. After confirming this concept to be reasonably feasible to implement through the use of Globe.gl (built on
							Three.js), the choice for how to proceed with the new version was nearly made, although I did revisit my other concepts
							one more time.
						</p>
					</div>
					<div className='flex w-full lg:w-6/12 mb-8 lg:ml-8 lg:justify-end'>
						<Image src='/images/projects/galactor/galactor-v2.png' alt='Galactor v2' width={474} height={281} />
					</div>
				</div>
				<div className='flex w-full flex-col prose max-w-6xl text-slate-50 mb-12'>
					<p className='prose max-w-6xl mb-3 w-full text-slate-50'>
						Building the original concept and displaying stars in a navigable 3D outer space were also considered, but ultimately the
						globe was determined to be the strongest because:{" "}
					</p>
					<ul className='lg:columns-2 w-full'>
						<li className='mt-0 w-11/12 -ml-4'>
							It is highly recognizable and easy to understand (versus something like 3D outer space)
						</li>
						<li className='w-11/12 -ml-4'>It is a modern, intractable element (with a cool aesthetic) that users can engage with. </li>
						<li className='w-11/12 -ml-4 lg:ml-0'>
							It aids in building user confidence that the stars that are showing are indeed nearby them.{" "}
						</li>
					</ul>
				</div>
				<div className='flex flex-col lg:px-8 lg:pr-0 md:px-4'>
					<div className='flex w-full flex-col lg:flex-row'>
						<div className='flex flex-col lg:flex-row lg:columns-2 w-full lg:w-5/12 lg:mb-24 self-end'>
							<div className='flex flex-col w-full lg:w-6/12 my-12 lg:my-0 lg:-ml-[18px]'>
								<h4 className='font-itc tracking-wide text-[22px] flex items-center mb-10'>New Features</h4>
								<ul className='prose text-slate-50 -ml-1'>
									<li>Interactable 3D Globe</li>
									<li>Set star quantity</li>
									<li>Set star altitude</li>
								</ul>
							</div>
							<div className='flex flex-col w-full lg:w-6/12 mb-24 lg:mb-0 lg:ml-4'>
								<h4 className='font-itc tracking-wide text-[22px] flex items-center mb-10 whitespace-nowrap'>New Technologies</h4>
								<ul className='prose text-slate-50 -ml-1'>
									<li>React.js</li>
									<li>Globe.gl (Three.js)</li>
									<li>Tailwind CSS</li>
								</ul>
							</div>
						</div>
						<div className='flex w-full h-auto lg:w-7/12 mb-8 lg:ml-20 lg:justify-end'>
							<Image
								src='/images/projects/galactor/galactor-day.png'
								alt='Galactor v3'
								className='w-full h-auto'
								width={1104}
								height={640}
							/>
						</div>
					</div>
				</div>
				<div className='flex w-full flex-col text-slate-50 mt-12'>
					<h3 className='text-white font-itc tracking-wide text-[22px] flex items-center mb-10'>
						The Build
						<span className='hidden lg:flex w-[478px] h-[1.5px] bg-white ml-7' />
					</h3>
					<p className='prose max-w-6xl mb-6 w-full text-slate-50'>
						This version of Galactor is built for web using Node.js and Express.js framework to handle the backend with React.js and
						Tailwind CSS for the front-end. Additionally, for visualization, Globe.gl is used to render the interactive 3D globe and
						Aladin Lite to display the high-definition, also intractable, stars, and for location and geocoding, APIs under the Google
						Maps umbrella are used. The code is bundled using Webpack and Babel.
					</p>
					<p className='prose max-w-6xl mb-10 w-full text-slate-50'>
						Custom elements that I created or coded include the svg marker that is used as the location pin on the globe, conversion
						functions for celestial (i.e. outer space) versus geodetic (i.e. Earth) coordinates, the range sliders, and the 3D star object
						selected state.
					</p>
					<h3 className='w-full text-white font-itc tracking-wide text-[22px] flex items-center mt-12 lg:mt-[70px] mb-10'>
						Reflection <span className='hidden lg:flex w-[468px] bg-white h-[1.5px] ml-7' />
					</h3>
					<p className='prose max-w-6xl mb-6 w-full text-slate-50'>
						Writing this version update was more satisfying and refreshing than I expected it to be. I believe this to be because I never
						brought version 2 up to its fullest potential, therefore it did not reflect my usual or best work, so this has finally
						redeemed that. It took a few hours over the span of two days to create this new version of Galactor. Being as I cannot think
						of any practical uses for this project, I feel that the project features are appropriate as they currently are, so this is
						likely to be the final version of this project unless some other opportunity or use for it presents itself.
					</p>
					<p className='prose max-w-6xl mb-20 w-full text-slate-50'>
						The code repository is public and available, should anyone want to use it for any reason (links available below).
					</p>
				</div>
				<div className='flex flex-col w-full lg:flex-row mb-20'>
					<Button
						onClick={() => {
							if (router && props?.url?.live) {
								router.push(props.url.live);
							}
						}}
						label='Visit live site'
						showArrow={true}
						className='bg-logo-blue max-w-[250px] mr-16 hover:text-opacity-80 hover:brightness-[.9] text-white py-2.5 px-6 inline-flex flex-auto font-stolzl text-lg mb-4 lg:mb-0'
					/>

					<Button
						onClick={() => {
							if (router && props?.url?.github) {
								router.push(props.url.github);
							}
						}}
						label='Github'
						icon={() => <GithubIcon className='text-white w-6 h-6 mr-3 group-hover:text-opacity-80' />}
						showArrow={true}
						className='bg-logo-blue max-w-[250px] group hover:text-opacity-80 hover:brightness-[.9] text-white py-2.5 px-6 inline-flex flex-auto font-stolzl text-lg'
					/>
				</div>
			</div>
		</div>
	);
}
