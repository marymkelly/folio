import { useEffect, useRef, useState } from "react";
import SvgDots from "../Dots";
import { CanvasController } from "../../lib/classes/canvas";
import { sittingAnimation as animations } from "../../lib/constants";
import { update } from "../../lib/utils/animation";

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default function MainHeader() {
	const adjArray = [
		["Software", "Developer"],
		["Business", "Analyst"],
		["Designer"],
		["Product", "Designer"],
		["Digital", "Solutionist"],
		["Problem", "Solver"],
	];
	const [adjIndex, setAdjIndex] = useState(0);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasControllerRef = useRef<CanvasController>();
	const hitTimerRef = useRef<boolean>();

	// INIT
	useEffect(() => {
		let ctx: CanvasRenderingContext2D | null;
		let canvas: CanvasController;
		let canvasDimensions = { width: 400, height: 400 };

		canvasRef.current!.width = canvasDimensions.width;
		canvasRef.current!.height = canvasDimensions.height;

		function animate(timestamp?: number) {
			if (canvasControllerRef.current) {
				if (timestamp !== canvasControllerRef.current!.lastAnimation) {
					ctx!.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
					canvas.render(ctx!, timestamp);
				}
				requestAnimationFrame(animate);
			}
		}

		if (!canvasControllerRef.current) {
			ctx = canvasRef.current!.getContext("2d");
			canvas = new CanvasController(
				canvasDimensions.width,
				canvasDimensions.height,
				"/images/sprites/Sitting_Sprite_Board_Extended.png",
				animations
			);
			canvas.update = update.home;
			canvasControllerRef.current = canvas;
			animate();
		}

		return () => {
			if (canvasControllerRef.current) {
				canvasControllerRef.current?.remove();
				canvasControllerRef.current = undefined;
			}
		};
	}, []);

	useEffect(() => {
		let timerId: NodeJS.Timeout | undefined;
		if (typeof hitTimerRef.current === "undefined") hitTimerRef.current = true;

		if (hitTimerRef.current) {
			let newIndex = getRandomInt(!adjIndex ? 1 : 0, adjArray.length);

			if (newIndex === adjIndex) newIndex--;

			hitTimerRef.current = false;

			timerId = setTimeout(() => {
				hitTimerRef.current = true;
				setAdjIndex(newIndex);
				timerId = undefined;
			}, 3000);
		}
	}, [adjIndex, adjArray.length]);

	return (
		<header
			id='landing'
			className='align-center relative flex h-full min-h-[90vh] w-full items-center justify-center 2xl:pl-[2%] 3xl:justify-start 3xl:pl-[18%]'>
			<section className='z-40 -mt-40 flex flex-col lg:-mr-[3%] lg:mt-0 lg:flex-row 2xl:-mr-[4%] 3xl:-mr-0'>
				<div className='flex flex-col'>
					<h3 className='pl-1.5 font-itc text-7xl font-medium text-custom-navy lg:text-[60px] 2xl:text-[90px]'>
						Hello! <span className='text-custom-gray-blue '>I&apos;m</span>
					</h3>
					<h1 className='font-itc text-9xl font-medium leading-snug lg:text-[120px] lg:leading-none 2xl:text-[160px]'>
						Mary
					</h1>
					<div className='hidden w-[97px] border-custom-orange lg:ml-[8px] lg:mt-8 lg:block lg:border-[4px] 2xl:ml-[10px] 2xl:mt-9 2xl:border-[5px]' />
				</div>
				<div className='mt-1.5 mb-16 hidden border-custom-navy lg:mx-16 lg:block lg:border-[3px] 2xl:mx-20 2xl:mt-3 2xl:mb-[60px] 2xl:border-[4px]' />
				<div className='mt-3.5 ml-1.5 flex justify-center border border-custom-orange py-1 lg:mt-0 lg:ml-0 lg:hidden lg:flex-col lg:justify-start lg:border-none lg:py-0'>
					<p className='mr-3 animate-tailfade font-itc text-[28px] font-light tracking-wider text-custom-orange lg:-mt-1 lg:mr-0 lg:animate-none lg:text-[65px] lg:font-medium lg:leading-none lg:tracking-normal 2xl:text-[100px]'>
						{adjArray[adjIndex][0]}
					</p>
					<p className='animate-tailfade font-itc text-[28px] font-light leading-normal tracking-wider text-custom-orange lg:animate-none lg:text-[85px] lg:font-medium lg:tracking-normal 2xl:text-[130px] 2xl:leading-snug'>
						{adjArray[adjIndex][1]}
					</p>
				</div>
				<div className='mt-3.5 ml-1.5 hidden justify-center border border-custom-orange py-1 lg:-mt-2 lg:ml-0 lg:flex lg:flex-col lg:justify-start lg:border-none lg:py-0'>
					<p className='mr-3 font-itc text-[28px] font-light leading-snug tracking-wider text-custom-orange lg:mr-0 lg:text-[60px] lg:font-medium lg:tracking-normal'>
						Designer,
					</p>
					<p className='font-itc text-[28px] font-light leading-snug tracking-wider text-custom-orange lg:text-[60px] lg:font-medium lg:tracking-normal'>
						Developer,
					</p>
					<p className='font-itc text-[28px] font-light leading-snug tracking-wider text-custom-orange lg:text-[60px] lg:font-medium lg:tracking-normal'>
						Problem Solver
					</p>
				</div>
			</section>
			<div className='absolute top-28 left-0 h-36 w-4/6 dark:opacity-[3%] sm:w-[48%] xl:w-4/12 3xl:w-[24%]'>
				<SvgDots id='small-main-dots' density={3.25} size={3.5} />
			</div>
			<div className='absolute right-0 -bottom-[22%] h-[400px] w-5/12 dark:opacity-[3%]'>
				<SvgDots
					id='large-main-dots'
					density={3.5}
					size={4.5}
					className='fill-custom-gray-dots opacity-70'
				/>
			</div>
			<div className='absolute right-7 -bottom-4 flex w-auto flex-col items-center lg:right-48'>
				<canvas
					ref={canvasRef}
					id='canvas'
					className={`h-[300px] w-[300px] border-[1px] border-none border-custom-gray-blue`}
				/>
			</div>
		</header>
	);
}
