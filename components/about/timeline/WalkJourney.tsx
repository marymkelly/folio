import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CanvasController } from "../../../lib/classes/canvas";
import Image from "next/image";
import {
	TimelineTick,
	TimelineEvent,
	timelineData,
	TimelineCalculationData,
} from "../../../lib/data/timeline";
import { VerticalYears } from "./VerticalYears";
import { Tickmark } from "./Tickmark";
import { ArrowControls } from "./ArrowControls";
import { timelineAnimations as animations } from "../../../lib/constants";
import { update, input } from "../../../lib/utils/animation";

export default function ExperienceJourney() {
	const router = useRouter();
	const [ticks, setTicks] = useState<TimelineTick[]>([]);
	const [years, setYears] = useState<number[]>([]);
	const [percentage, setPercentage] = useState<number>(0);
	const [activeTick, setActiveTick] = useState<number>(0);
	const pivotPoint = Math.floor((years.length - 1) / 2) + 1;
	const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasControllerRef = useRef<CanvasController>();
	const timelineRef = useRef<HTMLDivElement>(null);
	const timelineBlurbRef = useRef<HTMLDivElement>(null);
	const [canvasDimensions, setCanvasDimensions] = useState<{
		width: number;
		height: number;
	}>({
		width: 4000,
		height: 400,
	});
	const [calculationData, setCalculationData] = useState<TimelineCalculationData>({
		startingYear: 0,
		endingYear: 0,
		totalNumYears: 0,
		prevIndex: 0,
		spaceAnnualTicksPercent: 0,
		offsetAnnualTicksPercent: 0,
		spriteTimelineX: 0,
		offsetTicksPercent: { left: 0, right: 0 },
	});

	function generateTimelineTicks() {
		const timelineTicks: TimelineTick[] = [];
		const yearsArr = [];
		const eventData: TimelineEvent[] = [...timelineData];
		const startYear: number = eventData[0].year;
		const endYear: number = eventData[eventData.length - 1].year;
		const totalYears: number = endYear - startYear;
		const tickSpacingPercent: number = Math.floor(96 / (totalYears + 1));
		const tickOffsetPercent: number = Math.ceil(
			(96 - (totalYears + 1) * tickSpacingPercent) / 2
		);
		const tickContainer = document.getElementById("tick-container");

		if (tickContainer) {
			tickContainer.style.paddingLeft = `${tickOffsetPercent}%`;
			tickContainer.style.paddingRight = `${
				window.visualViewport!.width < 1024 ? tickOffsetPercent - 2 : tickOffsetPercent - 1
			}%`;
		}

		setCalculationData({
			startingYear: startYear,
			endingYear: endYear,
			totalNumYears: totalYears,
			prevIndex: 0,
			spaceAnnualTicksPercent: tickSpacingPercent,
			offsetAnnualTicksPercent: tickOffsetPercent,
			offsetTicksPercent: {
				left: tickOffsetPercent,
				right:
					window.visualViewport!.width < 1024
						? tickOffsetPercent - 2
						: tickOffsetPercent - 1,
			},
			spriteTimelineX: 0,
		});

		console.log("CANVAS ", canvasControllerRef, tickSpacingPercent, tickOffsetPercent);

		for (let i = 0; i < totalYears + 1; i++) {
			const yearEvents: TimelineEvent[] = [];
			const yr = startYear + i;
			const percent = tickSpacingPercent * (i + 1);

			while (eventData?.length > 0 && eventData[0].year === yr) {
				const event: TimelineEvent = eventData.shift()!;
				yearEvents.push(event);
			}

			const eventPercentInverval = Math.floor(tickSpacingPercent / yearEvents.length);
			const eventPercentSpace = Math.floor(
				(Math.floor(tickSpacingPercent / yearEvents.length) -
					Math.floor(tickSpacingPercent / (yearEvents.length + 1))) /
					yearEvents.length
			);

			for (let j = 0; j < yearEvents.length; j++) {
				const eventPercent =
					tickSpacingPercent * i +
					eventPercentInverval * (j + 1) -
					eventPercentSpace * (j + 1);
				yearEvents[j] = {
					...yearEvents[j],
					percent: tickOffsetPercent + eventPercent,
				};
			}

			const tick: TimelineTick = {
				year: yr,
				percent: tickOffsetPercent + percent,
				index: i,
				events: yearEvents,
			};

			yearsArr.push(yr);
			timelineTicks.push(tick);
		}

		if (yearsArr.length > 0) setYears(yearsArr);

		setTicks(timelineTicks);
	}

	// INIT
	useEffect(() => {
		let canvasHeight = 400;
		let canvasWidth = Math.floor(window.visualViewport!.width * 2 * 0.85);

		let ctx: CanvasRenderingContext2D | null;
		let canvas: CanvasController;

		canvasRef.current!.width = canvasWidth;
		canvasRef.current!.height = canvasHeight;

		setCanvasDimensions({ height: canvasHeight, width: canvasWidth });

		if (!canvasControllerRef.current) {
			generateTimelineTicks();
			ctx = canvasRef.current!.getContext("2d");
			canvas = new CanvasController(
				canvasWidth,
				canvasHeight,
				"/images/sprites/Sprite_Board_Extended.png",
				animations
			);
			canvas.listeners = input.saga(window);
			canvas.update = update.saga;
			canvas.timeline = timelineRef.current!;
			canvas.timelineInformation = timelineBlurbRef.current!;
			canvas.calculationData = calculationData;
			canvas.setPercent = (num: number) => {
				setPercentage(num);
			};

			canvasControllerRef.current = canvas;
			animate();
		}

		function animate(timestamp?: number) {
			if (timestamp !== canvasControllerRef.current!.lastAnimation) {
				ctx!.clearRect(
					0,
					0,
					Math.floor(window.visualViewport!.width * 2 * 0.85),
					canvasDimensions.height
				);
				canvas.render(ctx!, timestamp);
			}
			requestAnimationFrame(animate);
		}

		function resizeCanvas() {
			setCanvasDimensions({
				height: canvasHeight,
				width: Math.floor(window.visualViewport!.width * 2 * 0.85),
			});

			if (window.visualViewport!.height < 728) {
				document.getElementById("blurbContainer")!.classList.remove("top-[15%]");
				document.getElementById("blurbContainer")!.classList.add("top-[2%]");
			} else {
				document.getElementById("blurbContainer")!.classList.add("top-[15%]");
				document.getElementById("blurbContainer")!.classList.remove("top-[2%]");
			}
		}

		const handleRouteChange = () => {
			if (canvasControllerRef.current) {
				canvasControllerRef.current!.remove();
			}
		};

		router.events.on("routeChangeStart", handleRouteChange);

		window.addEventListener("resize", resizeCanvas);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, []);

	// CONTROL RESIZE
	useEffect(() => {
		const tickContainer = document.getElementById("tick-container");

		if (tickContainer) {
			tickContainer.style.paddingLeft = `${calculationData.offsetAnnualTicksPercent}%`;
			tickContainer.style.paddingRight = `${
				window.visualViewport!.width < 1024
					? calculationData.offsetAnnualTicksPercent - 2
					: calculationData.offsetAnnualTicksPercent - 1
			}%`;

			if (calculationData.offsetAnnualTicksPercent > 0) {
				setCalculationData({
					...calculationData,
					offsetTicksPercent: {
						left: calculationData.offsetAnnualTicksPercent,
						right:
							window.visualViewport!.width < 1024
								? calculationData.offsetAnnualTicksPercent - 2
								: calculationData.offsetAnnualTicksPercent - 1,
					},
				});
			}
		}

		canvasRef.current!.width = Math.floor(window.visualViewport!.width * 2 * 0.85);
		canvasRef.current!.height = canvasDimensions.height;
		canvasControllerRef.current!.resize(canvasDimensions);
		canvasRef.current
			?.getContext("2d")!
			.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
	}, [canvasDimensions]);

	// CALCULATE NEAREST TICK/EVENT
	useEffect(() => {
		function convertElementPecentToCanvasPixels(
			el: HTMLElement,
			percent: number,
			scale: number = 1
		): number {
			const container: Element = el as Element;
			const containerWidth: number = container
				? parseFloat(window.getComputedStyle(container).width) * scale
				: 0;

			const pixels: number = Math.floor(containerWidth * (percent / 100));
			return pixels;
		}

		const tickContainer = document.getElementById("tick-container");
		let tickContainerDimensions: Partial<DOMRect> & {
			x: number;
			y: number;
			width: number;
			height: number;
		} = {
			height: 0,
			width: 0,
			x: 0,
			y: 0,
		};
		if (tickContainer) tickContainerDimensions = tickContainer.getBoundingClientRect();

		let adjustedOffset =
			activeTick < Math.floor(years.length / 2)
				? calculationData.offsetTicksPercent.left
				: calculationData.offsetTicksPercent.right;

		let adjustedPercentage =
			percentage === ticks[activeTick === years.length ? activeTick - 1 : activeTick]?.percent
				? percentage
				: percentage + calculationData.spaceAnnualTicksPercent - adjustedOffset;

		let activeIndex = activeTick;

		const currentIndexPercent =
			activeTick >= years.length
				? ticks[activeTick - 1]?.percent
				: ticks[activeTick]?.percent;

		if (
			(activeTick > 0 || (activeTick === 0 && adjustedPercentage > ticks[0]?.percent)) &&
			adjustedPercentage > currentIndexPercent
		) {
			if (percentage !== ticks[activeIndex]?.percent) {
				activeIndex = activeIndex >= years.length ? activeIndex : activeIndex + 1;
			}

			if (activeIndex === years.length) {
				activeIndex =
					percentage > ticks[years.length - 1]?.percent ? years.length : years.length - 1;
			}
		} else {
			if (activeTick === 0) activeIndex = 0;

			if (
				activeTick > 0 &&
				(adjustedPercentage < ticks[activeTick - 1]?.percent ||
					(activeTick === years.length && percentage >= ticks[activeTick - 1]?.percent))
			) {
				activeIndex = activeTick === years.length ? activeIndex : activeIndex - 1;
			}
		}

		const currentX = canvasControllerRef.current!.sprite.x;
		const canvasDimensions = canvasRef.current!.getBoundingClientRect();
		const canvasTimelineShift = Math.abs(canvasDimensions.x - tickContainerDimensions.x);
		let activeTickEl = document.getElementById(`tick-${activeTick}`);

		let spriteX =
			canvasDimensions.x +
			canvasTimelineShift +
			((currentX / (canvasDimensions.width * 2)) * canvasDimensions.width * 0.96 +
				(activeTickEl?.getBoundingClientRect()
					? activeTickEl?.getBoundingClientRect()?.width
					: 0));

		if (activeTickEl) setCalculationData({ ...calculationData, spriteTimelineX: spriteX });

		if (activeIndex < 0) activeIndex = 0;
		if (activeIndex >= years.length) activeIndex = years.length;

		const indexEvents =
			activeIndex >= pivotPoint && activeIndex <= years.length - 1
				? ticks[activeIndex - 1]?.events
				: ticks[
						percentage > ticks[years.length - 1]?.percent
							? years.length - 1
							: activeIndex
				  ]?.events;
		const eventAdjustedPercentage =
			activeIndex >= pivotPoint
				? adjustedPercentage - calculationData.spaceAnnualTicksPercent
				: adjustedPercentage;

		let currentEvent = null;

		if (indexEvents && indexEvents.length > 0 && percentage !== 0 && adjustedPercentage > 0) {
			for (let e of indexEvents) {
				if (
					Math.abs(e.percent! - eventAdjustedPercentage) <=
					Math.floor(calculationData.spaceAnnualTicksPercent / indexEvents.length + 1)
				) {
					currentEvent = e;
				}
			}
		}

		if (timelineBlurbRef.current) {
			const infoStyles = window.getComputedStyle(timelineBlurbRef.current);
			const infoWidth = Number.parseFloat(infoStyles.width.slice(0, -2));
			const screenWidth = window.visualViewport!.width;
			const infoMinPercentX = 10;
			const infoMaxPercentX = Math.floor(
				((screenWidth - 50 - infoWidth) / screenWidth) * 100
			);

			const infoXPixels =
				(((adjustedPercentage! / 100) * (infoMaxPercentX - infoMinPercentX)) / 100) *
				screenWidth;
			const multiplier = (infoXPixels - (infoXPixels % infoWidth)) / infoWidth;
			const translatePercent =
				100 * multiplier +
				Math.floor(((infoXPixels - multiplier * infoWidth) / infoWidth) * 100);

			timelineBlurbRef.current!.animate([{ transform: `translateX(${translatePercent}%)` }], {
				duration: 100,
				iterations: 1,
			});

			timelineBlurbRef.current.style.transform = `translateX(${translatePercent}%)`;
		}

		setActiveEvent(currentEvent);
		setActiveTick(activeIndex);
	}, [percentage]);

	// PORTAL ANIMATION
	useEffect(() => {
		if (ticks.length > 0) {
			canvasControllerRef.current!.activeTick = !canvasControllerRef.current!.activeTick
				? ticks[0]
				: ticks[activeTick === years.length ? activeTick - 1 : activeTick];

			const currentX = canvasControllerRef.current!.sprite.x;
			const xPos = Math.floor(
				(ticks[activeTick === years.length ? activeTick - 1 : activeTick]?.percent / 100) *
					(canvasControllerRef.current!.width -
						(3 * canvasControllerRef.current!.sprite.width) / 4)
			);

			const differenceX = xPos - currentX;

			if (canvasControllerRef.current!.currentKeys.length === 0) {
				const animation =
					Math.sign(differenceX) < 0 ? "portal_entry_left" : "portal_entry_right";
				canvasControllerRef.current!.sprite.setAnimation(animation);
			}
		}
	}, [activeTick, ticks]);

	return (
		<div className=' relative min-h-[800px] w-full flex-1 flex-col bg-[#5eadcc] bg-opacity-[10%] lg:flex'>
			<div className='absolute ml-24 mt-16 w-6/12 lg:w-[30%]'>
				<h3
					className={`mb-8 font-itc text-7xl font-bold tracking-wide transition-all delay-100 duration-500 md:whitespace-nowrap ${
						canvasControllerRef?.current?.sprite &&
						canvasControllerRef?.current?.sprite.x > 50
							? "text-custom-navy opacity-[10%]"
							: "text-custom-black"
					}`}>
					My Journey
				</h3>
				<p
					className={`font-itc text-sm font-medium tracking-[0.021em] transition-all delay-100 duration-500 ${
						canvasControllerRef?.current?.sprite &&
						canvasControllerRef?.current?.sprite.x > 50
							? "text-custom-navy opacity-0"
							: "text-custom-black"
					}`}>
					A overview of events leading up to the current year. Use left and right arrow
					keys to navigate timeline.
				</p>
			</div>
			<div id='blurbContainer' className='absolute top-[0%] h-[38%] w-full'>
				<div className='relative flex h-full min-h-[400px] w-full flex-auto flex-col justify-end overflow-hidden'>
					<div
						ref={timelineBlurbRef}
						className={`w-full max-w-[450px] ${
							activeEvent
								? "translate-y-0 bg-[#71E3DC] bg-opacity-[20%]"
								: "translate-y-[140%]"
						} absolute left-[10%] flex h-auto flex-col p-8 transition-all`}>
						<div
							className={`absolute self-end font-stolzl tracking-wide text-custom-gray-blue opacity-60 ${
								!activeEvent?.image ? (!activeEvent?.title ? "-mt-3" : "-mt-2") : ""
							}`}>
							{activeEvent?.year}
						</div>

						{activeEvent?.image && (
							<div className='mb-6'>
								<Image
									className={
										!activeEvent.image?.className
											? "w-auto"
											: `${activeEvent.image.className}`
									}
									src={activeEvent.image!.src}
									alt={activeEvent.image!.alt}
									width={activeEvent.image!.dimensions.width}
									height={activeEvent.image!.dimensions.height}
								/>
							</div>
						)}

						<div
							className={
								!activeEvent?.image ? (!activeEvent?.title ? "pt-4" : "pt-2") : ""
							}>
							<h5
								className={`mb-3 font-gravesend text-lg font-bold ${
									!activeEvent?.title && "hidden"
								}`}>
								{activeEvent?.title}
							</h5>
							<p className='font-gothic leading-6 tracking-[0.018em]'>
								{activeEvent?.summary}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute left-8 flex h-[90%] w-[15%] flex-col items-center justify-end'>
				<div className='flex h-auto w-5/12 max-w-[180px] flex-col items-center justify-center self-center'>
					<ArrowControls />
				</div>
				<p className='mt-3 text-xs text-custom-gray-blue/75'>
					Use Left and Right Arrow Keys Navigate
				</p>
			</div>
			<div className='absolute bottom-[15%] mb-6 h-auto w-full'>
				<div className='outline-text absolute left-12 flex h-full w-[15%] flex-col items-end justify-items-center overflow-y-clip text-8xl text-transparent xl:left-9 2xl:left-2'>
					{calculationData.totalNumYears > 0 &&
						years.length === calculationData.totalNumYears + 1 && (
							<VerticalYears
								percentage={percentage}
								activeTick={activeTick}
								ticks={ticks}
								years={years}
								pivotPoint={pivotPoint}
							/>
						)}
				</div>
				<div className='relative flex h-full w-full flex-col items-end justify-items-end'>
					<div
						className={`lg:min-w-none absolute top-[207px] z-10 flex h-auto flex-1 justify-end self-end sm:w-[65%] sm:min-w-[520px] sm:max-w-[550px] md:w-[75%] md:min-w-[700px] md:max-w-none lg:w-[85%] lg:max-w-${
							canvasControllerRef.current?.width
								? "[" + canvasControllerRef.current.width + "px]"
								: "none"
						}`}>
						<div
							id='tick-container'
							className={`w-[96%] max-w-[${
								canvasControllerRef.current?.width
									? canvasControllerRef.current.width / 2
									: 0
							}px] flex justify-between`}>
							{years.length === calculationData.totalNumYears + 1 &&
								ticks.map((tick, i) => {
									return (
										<Tickmark
											key={i}
											{...tick}
											totalLength={years.length}
											spriteX={calculationData.spriteTimelineX}
											pivotPoint={pivotPoint}
											timelinePercent={percentage}
											activeIndex={activeTick}
											setActiveTick={setActiveTick}
											spacePercent={calculationData.spaceAnnualTicksPercent}
										/>
									);
								})}
						</div>
					</div>
					<div className='w-[85%] self-end'>
						<div className='flex w-full flex-col-reverse items-end justify-end'>
							<div
								id='timelineContainer'
								className='flex h-0.5 w-[95%] justify-between self-end rounded-full bg-slate-300'>
								<div
									ref={timelineRef}
									className='h-0.5 w-full rounded-full bg-custom-teal'
								/>
							</div>
							<div className='flex h-auto w-full pt-8'>
								<div className='flex w-full flex-col items-center'>
									<canvas
										ref={canvasRef}
										id='canvas'
										className={`w-[${Math.floor(
											canvasDimensions.width / 2
										).toString()}px] h-[200px] border-[1px] border-none border-custom-gray-blue`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
