import React, { useEffect, useRef, useState } from "react";
import { CanvasController } from "../../lib/canvas";
import { TimelineTick } from "../../pages/test";

export default function WalkJourney(props: { setPercentage: Function; activeTick: number; ticks: TimelineTick[] }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasControllerRef = useRef<CanvasController>();
	const timelineRef = useRef<HTMLDivElement>(null);
	const [canvasDimensions, setCanvasDimensions] = useState<{ width: number; height: number }>({ width: 4000, height: 400 });

	useEffect(() => {
		let canvasHeight = 400;
		let canvasWidth = Math.floor(window.visualViewport!.width * 2 * 0.85);

		let ctx: any;
		let canvas: any;

		canvasRef.current!.width = canvasWidth;
		canvasRef.current!.height = canvasHeight;

		setCanvasDimensions({ height: canvasHeight, width: Math.floor(window.visualViewport!.width * 2 * 0.85) });

		if (!canvasControllerRef.current) {
			ctx = canvasRef.current!.getContext("2d");
			canvas = new CanvasController(canvasWidth, canvasHeight);
			canvas.timeline = timelineRef.current!;
			canvas.setPercent = (num: number) => {
				props.setPercentage(num);
			};

			canvasControllerRef.current = canvas;
			animate();
		}

		function animate(timestamp?: number) {
			if (timestamp !== canvasControllerRef.current!.lastAnimation) {
				ctx!.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
				canvas.render(ctx, timestamp);
			}
			requestAnimationFrame(animate);
		}

		function resizeCanvas() {
			setCanvasDimensions({ height: canvasHeight, width: Math.floor(window.visualViewport!.width * 2 * 0.85) });
		}

		window.addEventListener("resize", resizeCanvas);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	useEffect(() => {
		canvasRef.current!.width = canvasDimensions.width;
		canvasRef.current!.height = canvasDimensions.height;
		canvasControllerRef.current!.resize(canvasDimensions);
		canvasRef.current?.getContext("2d")!.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
	}, [canvasDimensions]);

	useEffect(() => {
		if (props.ticks.length > 0) {
			canvasControllerRef.current!.activeTick = !canvasControllerRef.current!.activeTick ? props.ticks[0] : props.ticks[props.activeTick];

			const eightPercentDist = Math.floor(0.08 * (canvasControllerRef.current!.width - 300));
			const currentX = canvasControllerRef.current!.sprite.x;
			const xPos = Math.floor((props.ticks[props.activeTick].percent / 100) * (canvasControllerRef.current!.width - 300));
			const differenceX = xPos - currentX;

			if (canvasControllerRef.current!.currentKeys.length === 0) {
				if (Math.abs(differenceX) > eightPercentDist * 2) {
					const animation = Math.sign(differenceX) < 0 ? "portal_entry_left" : "portal_entry_right";
					canvasControllerRef.current!.sprite.setAnimation(animation);
				}
			}
		}
	}, [props.activeTick]);

	return (
		<div className='w-full flex flex-col-reverse items-end justify-end'>
			<div id='timelineContainer' className='w-[95%] h-1 bg-slate-200 self-end flex justify-between rounded-full'>
				<div ref={timelineRef} className='h-1 bg-cyan-400 rounded-full w-full' />
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
	);
}
