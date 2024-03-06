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
		// if (!themeCtx.footerFixed) {
			themeCtx.setBackgroundColor("#092636");
			themeCtx.setBackgroundIsDark(true);
			themeCtx.setIsFooterFixed(true);
		// }
		return () => {
			themeCtx.setIsFooterFixed(false);
			themeCtx.setBackgroundColor("#ffffff");
			themeCtx.setBackgroundIsDark(false);
		};
	}, [themeCtx]);

	return (
		<div className='flex w-full flex-col items-center bg-[#092636] text-white'>
			<div className='flex h-auto w-full max-w-[1200px] flex-col py-20 px-4 lg:h-screen'>
				<Image
					src='/images/projects/galactor/galactor.png'
					alt='Galactor Screenshot'
					className='rounded-2xl border-[4px] border-slate-200'
					width={2400}
					height={1525}
					priority
				/>
			</div>
			<div className='relative flex h-full w-full flex-col bg-[#EEF9FF] px-8 pt-12 pb-16 lg:p-40'>
				<div className='absolute left-0 top-0 mb-2 mt-2 -ml-8 flex w-auto flex-col font-gravesend text-[100px] font-bold leading-none tracking-[0.01em] text-transparent opacity-[14%] text-stroke-custom-gray-blue text-stroke text-stroke-[1.5px] sm:text-[120px] md:-ml-8 md:text-[280px]'>
					<h1 className=''>Galactor</h1>
				</div>
				<div className='flex w-full max-w-6xl flex-col justify-between self-center lg:flex-row'>
					<div className='flex w-full flex-col lg:w-8/12'>
						<h2 className='mb-10 flex items-center font-itc text-5xl text-[#001723]'>
							Overview <span className='ml-7 h-[1.5px] w-[360px] bg-[#001723]' />
						</h2>
						<p className='prose mb-8'>
							The most recent release of a previously existing project, Galactor
							(version 3), brings a fresh, modern update to its former basic,
							interface.
						</p>
						<p className='prose mb-8'>
							Historically, the Galactor project was intended to be a collaborative
							project, built by a team of approximately five individuals, for the
							purpose of coding (web development) practice, experience building, and
							keeping accountability. Through group ideation, the main concept for
							this project was determined:
						</p>
						<strong className='prose mb-8'>
							A platform where users can search{" "}
							<span className='line-through'>and “nickname”</span> stars based on a
							geographical location on Earth.
						</strong>
						<p className='prose mb-8'>
							To cut to the chase, that was the only thing the group did together on
							this project and it eventually turned into a personal project due to me
							being the only contributor. More on building the earlier versions can be
							read here. As a result, I chose to deviate from the original concept and
							omit the nickname feature.
						</p>
						<p className='prose mb-8'>
							The lack of the nickname feature and minimalistic styling applied in the
							previous versions(s) always left more to be desired from the star
							search. Therefore, a primary goal for version 3 was to make it more
							enticing, either through incorporation of a new feature or through its
							design.
						</p>
					</div>
					<div className='flex w-full lg:w-4/12'>
						<div className='mt-[22px] flex h-min w-full max-w-[380px] flex-col border-2 border-[#A5EAC8] bg-[#A5EAC8]/20 py-3 px-9'>
							{overviewCategories
								.map((key: string, i) => {
									return Object.getOwnPropertyNames(props).includes(key) ? (
										<div
											key={`overview-category-${i}`}
											className='mb-[30px] flex flex-col text-custom-black first:mt-4 last:mb-4'>
											<label className='mb-3 font-gravesend text-[15px] font-bold leading-none tracking-wider'>
												{key === "dates"
													? props.dates?.search(/[-]/) === -1
														? "Date"
														: key
													: key}
											</label>
											<p className='font-stolzl font-light leading-7'>
												{typeof props[
													key as keyof Omit<ProjectPageProps, "url">
												] === "string"
													? props[
															key as keyof Omit<
																ProjectPageProps,
																"url"
															>
													  ]
													: props[key as keyof ProjectPageProps]
															?.toString()
															.split(",")
															.join(", ")}
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
				<div className='mb-6 flex w-full flex-col lg:flex-row lg:pt-16'>
					<div className='flex w-full flex-col lg:w-6/12'>
						<h3 className='mb-10 flex items-center font-itc text-[22px] tracking-wide'>
							Determining Direction{" "}
							<span className='ml-7 hidden h-[1.5px] w-[250px] lg:flex' />
						</h3>
						<p className='prose mb-8 text-slate-50'>
							The previous version provided the user with basic search functionality
							and was limited to displaying a max of 10 stars at a time.
						</p>
						<p className='prose mb-8 text-slate-50'>
							Based on this, one concept I considered was showing searched locations
							on a 3D globe with its relative stars render around the model. After
							confirming this concept to be reasonably feasible to implement through
							the use of Globe.gl (built on Three.js), the choice for how to proceed
							with the new version was nearly made, although I did revisit my other
							concepts one more time.
						</p>
					</div>
					<div className='mb-8 flex w-full lg:ml-8 lg:w-6/12 lg:justify-end'>
						<Image
							src='/images/projects/galactor/galactor-v2.png'
							alt='Galactor v2'
							width={474}
							height={281}
						/>
					</div>
				</div>
				<div className='prose mb-12 flex w-full max-w-6xl flex-col text-slate-50'>
					<p className='prose mb-3 w-full max-w-6xl text-slate-50'>
						Building the original concept and displaying stars in a navigable 3D outer
						space were also considered, but ultimately the globe was determined to be
						the strongest because:{" "}
					</p>
					<ul className='w-full lg:columns-2'>
						<li className='mt-0 -ml-4 w-11/12'>
							It is highly recognizable and easy to understand (versus something like
							3D outer space)
						</li>
						<li className='-ml-4 w-11/12'>
							It is a modern, intractable element (with a cool aesthetic) that users
							can engage with.{" "}
						</li>
						<li className='-ml-4 w-11/12 lg:ml-0'>
							It aids in building user confidence that the stars that are showing are
							indeed nearby them.{" "}
						</li>
					</ul>
				</div>
				<div className='flex flex-col md:px-4 lg:px-8 lg:pr-0'>
					<div className='flex w-full flex-col lg:flex-row'>
						<div className='flex w-full flex-col self-end lg:mb-24 lg:w-5/12 lg:columns-2 lg:flex-row'>
							<div className='my-12 flex w-full flex-col lg:my-0 lg:-ml-[18px] lg:w-6/12'>
								<h4 className='mb-10 flex items-center font-itc text-[22px] tracking-wide'>
									New Features
								</h4>
								<ul className='prose -ml-1 text-slate-50'>
									<li>Interactable 3D Globe</li>
									<li>Set star quantity</li>
									<li>Set star altitude</li>
								</ul>
							</div>
							<div className='mb-24 flex w-full flex-col lg:mb-0 lg:ml-4 lg:w-6/12'>
								<h4 className='mb-10 flex items-center whitespace-nowrap font-itc text-[22px] tracking-wide'>
									New Technologies
								</h4>
								<ul className='prose -ml-1 text-slate-50'>
									<li>React.js</li>
									<li>Globe.gl (Three.js)</li>
									<li>Tailwind CSS</li>
								</ul>
							</div>
						</div>
						<div className='mb-8 flex h-auto w-full lg:ml-20 lg:w-7/12 lg:justify-end'>
							<Image
								src='/images/projects/galactor/galactor-day.png'
								alt='Galactor v3'
								className='h-auto w-full'
								width={1104}
								height={640}
							/>
						</div>
					</div>
				</div>
				<div className='mt-12 flex w-full flex-col text-slate-50'>
					<h3 className='mb-10 flex items-center font-itc text-[22px] tracking-wide text-white'>
						The Build
						<span className='ml-7 hidden h-[1.5px] w-[478px] bg-white lg:flex' />
					</h3>
					<p className='prose mb-6 w-full max-w-6xl text-slate-50'>
						This version of Galactor is built for web using Node.js and Express.js
						framework to handle the backend with React.js and Tailwind CSS for the
						front-end. Additionally, for visualization, Globe.gl is used to render the
						interactive 3D globe and Aladin Lite to display the high-definition, also
						intractable, stars, and for location and geocoding, APIs under the Google
						Maps umbrella are used. The code is bundled using Webpack and Babel.
					</p>
					<p className='prose mb-10 w-full max-w-6xl text-slate-50'>
						Custom elements that I created or coded include the svg marker that is used
						as the location pin on the globe, conversion functions for celestial (i.e.
						outer space) versus geodetic (i.e. Earth) coordinates, the range sliders,
						and the 3D star object selected state.
					</p>
					<h3 className='mt-12 mb-10 flex w-full items-center font-itc text-[22px] tracking-wide text-white lg:mt-[70px]'>
						Reflection{" "}
						<span className='ml-7 hidden h-[1.5px] w-[468px] bg-white lg:flex' />
					</h3>
					<p className='prose mb-6 w-full max-w-6xl text-slate-50'>
						Writing this version update was more satisfying and refreshing than I
						expected it to be. I believe this to be because I never brought version 2 up
						to its fullest potential, therefore it did not reflect my usual or best
						work, so this has finally redeemed that. It took a few hours over the span
						of two days to create this new version of Galactor. Being as I cannot think
						of any practical uses for this project, I feel that the project features are
						appropriate as they currently are, so this is likely to be the final version
						of this project unless some other opportunity or use for it presents itself.
					</p>
					<p className='prose mb-20 w-full max-w-6xl text-slate-50'>
						The code repository is public and available, should anyone want to use it
						for any reason (links available below).
					</p>
				</div>
				<div className='mb-20 flex w-full flex-col lg:flex-row'>
					<Button
						onClick={() => {
							if (router && props?.url?.live) {
								router.push(props.url.live);
							}
						}}
						label='Visit live site'
						showArrow={true}
						className='mr-16 mb-4 inline-flex max-w-[250px] flex-auto bg-logo-blue py-2.5 px-6 font-stolzl text-lg text-white hover:text-opacity-80 hover:brightness-[.9] lg:mb-0'
					/>

					<Button
						onClick={() => {
							if (router && props?.url?.github) {
								router.push(props.url.github);
							}
						}}
						label='Github'
						icon={() => (
							<GithubIcon className='mr-3 h-6 w-6 text-white group-hover:text-opacity-80' />
						)}
						showArrow={true}
						className='group inline-flex max-w-[250px] flex-auto bg-logo-blue py-2.5 px-6 font-stolzl text-lg text-white hover:text-opacity-80 hover:brightness-[.9]'
					/>
				</div>
			</div>
		</div>
	);
}
