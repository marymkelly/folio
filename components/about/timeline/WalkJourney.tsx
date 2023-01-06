import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { CanvasController } from "../../../lib/classes/canvas";
import Image from "next/image";
import { TimelineTick, TimelineEvent, timelineData } from "../../../lib/data/timeline";
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
	const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasControllerRef = useRef<CanvasController>();
	const timelineRef = useRef<HTMLDivElement>(null);
	const timelineBlurbRef = useRef<HTMLDivElement>(null);
	const [canvasDimensions, setCanvasDimensions] = useState<{ width: number; height: number }>({ width: 4000, height: 400 });

	function generateTimelineTicks() {
		const timelineTicks: TimelineTick[] = [];
		const yearsArr = [];
		const eventData: TimelineEvent[] = [...timelineData];

		for (let i = 0; i < 12; i++) {
			const yearEvents: TimelineEvent[] = [];
			const yr = 2011 + i;
			const percent = 8 * (i + 1);

			while (eventData?.length > 0 && eventData[0].year === yr) {
				const event: TimelineEvent = eventData.shift()!;
				yearEvents.push(event);
			}

			const eventPercentInverval = Math.floor(8 / yearEvents.length);
			const eventPercentSpace = Math.floor((Math.floor(8 / yearEvents.length) - Math.floor(8 / yearEvents.length + 1)) / yearEvents.length);

			for (let j = 0; j < yearEvents.length; j++) {
				const eventPercent = 8 * i + eventPercentInverval * (j + 1) - eventPercentSpace * (j + 1);
				yearEvents[j] = { ...yearEvents[j], percent: eventPercent };
			}

			const tick: TimelineTick = { year: yr, percent, index: i, events: yearEvents };

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
			ctx = canvasRef.current!.getContext("2d");
			canvas = new CanvasController(canvasWidth, canvasHeight, "/images/sprites/Sprite_Board_Extended.png", animations);
			canvas.listeners = input.saga(window);
			canvas.update = update.saga;
			canvas.timeline = timelineRef.current!;
			canvas.timelineInformation = timelineBlurbRef.current!;
			canvas.setPercent = (num: number) => {
				setPercentage(num);
			};

			canvasControllerRef.current = canvas;
			animate();
			generateTimelineTicks();
		}

		function animate(timestamp?: number) {
			if (timestamp !== canvasControllerRef.current!.lastAnimation) {
				ctx!.clearRect(0, 0, Math.floor(window.visualViewport!.width * 2 * 0.85), canvasDimensions.height);
				canvas.render(ctx!, timestamp);
			}
			requestAnimationFrame(animate);
		}

		function resizeCanvas() {
			setCanvasDimensions({ height: canvasHeight, width: Math.floor(window.visualViewport!.width * 2 * 0.85) });

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
		canvasRef.current!.width = Math.floor(window.visualViewport!.width * 2 * 0.85);
		canvasRef.current!.height = canvasDimensions.height;
		canvasControllerRef.current!.resize(canvasDimensions);
		canvasRef.current?.getContext("2d")!.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
	}, [canvasDimensions]);

	// CALCULATE NEAREST TICK/EVENT
	useEffect(() => {
		const nearIndex = (percentage - (percentage % 8)) / 8;
		const activeIndex = nearIndex >= 11 ? 11 : nearIndex;
		const indexEvents = ticks[activeIndex]?.events;
		let currentEvent = null;

		if (indexEvents && indexEvents?.length > 0 && percentage > 0) {
			for (let e of indexEvents) {
				if (Math.abs(e.percent! - percentage) <= Math.floor(8 / indexEvents.length + 1)) {
					currentEvent = e;
				}
			}
		}

		if (timelineBlurbRef.current) {
			const infoStyles = window.getComputedStyle(timelineBlurbRef.current);
			const infoWidth = Number.parseFloat(infoStyles.width.slice(0, -2));
			const screenWidth = window.visualViewport!.width;
			const infoMinPercentX = 10;
			const infoMaxPercentX = Math.floor(((screenWidth - 70 - infoWidth) / screenWidth) * 100);

			const infoXPixels = (((percentage! / 100) * (infoMaxPercentX - infoMinPercentX)) / 100) * screenWidth;
			const multiplier = (infoXPixels - (infoXPixels % infoWidth)) / infoWidth;
			const translatePercent = 100 * multiplier + Math.floor(((infoXPixels - multiplier * infoWidth) / infoWidth) * 100);

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
			canvasControllerRef.current!.activeTick = !canvasControllerRef.current!.activeTick ? ticks[0] : ticks[activeTick];

			const currentX = canvasControllerRef.current!.sprite.x;
			const xPos = Math.floor((ticks[activeTick].percent / 100) * (canvasControllerRef.current!.width - 300));
			const differenceX = xPos - currentX;

			if (canvasControllerRef.current!.currentKeys.length === 0) {
				const animation = Math.sign(differenceX) < 0 ? "portal_entry_left" : "portal_entry_right";
				canvasControllerRef.current!.sprite.setAnimation(animation);
			}
		}
	}, [activeTick, ticks]);

	return (
		<div className=' lg:flex min-h-[800px] w-full flex-col flex-1 relative bg-[#5eadcc] bg-opacity-[10%]'>
			<div className='w-6/12 lg:w-[30%] absolute ml-24 mt-16'>
				<h3
					className={`font-itc font-bold md:whitespace-nowrap text-7xl tracking-wide mb-8 transition-all duration-500 delay-100 ${
						canvasControllerRef?.current?.sprite && canvasControllerRef?.current?.sprite.x > 50
							? "text-custom-navy opacity-[10%]"
							: "text-custom-black"
					}`}>
					My Journey
				</h3>
				<p
					className={`font-itc text-sm font-medium tracking-[0.021em] transition-all duration-500 delay-100 ${
						canvasControllerRef?.current?.sprite && canvasControllerRef?.current?.sprite.x > 50
							? "text-custom-navy opacity-0"
							: "text-custom-black"
					}`}>
					A overview of events leading up to the current year. Use left and right arrow keys to navigate timeline.
				</p>
			</div>
			<div id='blurbContainer' className='w-full h-[38%] absolute top-[0%]'>
				<div className='w-full min-h-[400px] h-full overflow-hidden flex flex-col justify-end flex-auto relative'>
					<div
						ref={timelineBlurbRef}
						className={`w-full max-w-[450px] ${
							activeEvent ? "translate-y-0 bg-[#71E3DC] bg-opacity-[20%]" : "translate-y-[140%]"
						} h-auto flex flex-col p-8 absolute left-[10%] transition-all`}>
						<div
							className={`self-end font-stolzl tracking-wide text-custom-gray-blue opacity-60 absolute ${
								!activeEvent?.image ? (!activeEvent?.title ? "-mt-3" : "-mt-2") : ""
							}`}>
							{activeEvent?.year}
						</div>

						{activeEvent?.image && (
							<div className='mb-6'>
								<Image
									className={!activeEvent.image?.className ? "w-auto" : `${activeEvent.image.className}`}
									src={activeEvent.image!.src}
									alt={activeEvent.image!.alt}
									width={activeEvent.image!.dimensions.width}
									height={activeEvent.image!.dimensions.height}
								/>
							</div>
						)}

						<div className={!activeEvent?.image ? (!activeEvent?.title ? "pt-4" : "pt-2") : ""}>
							<h5 className={`mb-3 font-bold font-gravesend text-lg ${!activeEvent?.title && "hidden"}`}>{activeEvent?.title}</h5>
							<p className='font-gothic leading-6 tracking-[0.018em]'>{activeEvent?.summary}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[15%] absolute left-8 h-[90%] items-center justify-end flex flex-col'>
				<div className='max-w-[180px] h-auto w-5/12 self-center flex flex-col items-center justify-center'>
					<ArrowControls />
				</div>
				<p className='text-xs mt-3 text-custom-gray-blue/75'>Use Left and Right Arrow Keys Navigate</p>
			</div>
			<div className='w-full h-auto absolute bottom-[15%] mb-6'>
				<div className='absolute h-full w-[15%] left-12 xl:left-9 2xl:left-2 items-end justify-items-center flex flex-col text-8xl overflow-y-clip outline-text text-transparent'>
					{years.length === 12 && <VerticalYears percentage={percentage} activeTick={activeTick} ticks={ticks} years={years} />}
				</div>
				<div className='relative flex flex-col items-end justify-items-end h-full w-full'>
					<div className='sm:min-w-[520px] sm:max-w-[550px] sm:w-[65%] md:min-w-[700px] md:max-w-[800px] md:w-[75%] lg:w-[78%] lg:min-w-[800px] lg:max-w-[1000px] xl:w-[calc(85%-50px)] xl:pl-[25px] xl:pr-[25px] xl:max-w-none self-end flex justify-between h-auto absolute flex-1 top-[207px] z-10'>
						{ticks.length === 12 &&
							ticks.map((tick, i) => {
								return <Tickmark key={i} {...tick} activeIndex={activeTick} setActiveTick={setActiveTick} />;
							})}
					</div>
					<div className='w-[85%] self-end'>
						<div className='w-full flex flex-col-reverse items-end justify-end'>
							<div id='timelineContainer' className='w-[95%] h-0.5 bg-slate-300 self-end flex justify-between rounded-full'>
								<div ref={timelineRef} className='h-0.5 bg-custom-teal rounded-full w-full' />
							</div>
							<div className='w-full h-auto flex pt-8'>
								<div className='flex flex-col items-center w-full'>
									<canvas
										ref={canvasRef}
										id='canvas'
										className={`w-[${Math.floor(
											canvasDimensions.width / 2
										).toString()}px] h-[200px] border-none border-custom-gray-blue border-[1px]`}
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
