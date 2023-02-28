import { CanvasController } from "./canvas";

export interface AnimationProps {
	name: string;
	frames: number;
	speed: number;
	loopDelay: number;
}

export interface Point {
	x: number;
	y: number;
}

interface SpriteAnimation {
	location: Point[];
	speed: number;
	delayLoopSeconds: number;
}

export interface SpriteController {
	animator: CanvasController;
	height: number;
	width: number;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	speed: number;
	spriteSheet: HTMLImageElement;
	spriteWidth: number;
	spriteHeight: number;
	src: string;
	animations: {
		[name: string]: SpriteAnimation;
	};
	currentAnimation: string;
	gameFrame: number;
	maxFrames: number;
	delayFrame: number;
	delayAmount: number;
	delaying: boolean;
	update: Function;
}

export class SpriteController {
	constructor(animator: CanvasController, spriteSrc: string, animations: AnimationProps[]) {
		this.animator = animator;
		this.height = 400;
		this.width = 400;
		this.x = 0;
		this.y = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.speed = 0;
		this.spriteWidth = 600;
		this.spriteHeight = 600;
		this.src = spriteSrc;
		this.spriteSheet = new Image();
		this.spriteSheet.src = this.src;
		this.gameFrame = 0;
		this.maxFrames = 120;
		this.delayFrame = 0;
		this.delayAmount = 0;
		this.delaying = false;
		this.configureAnimations(animations);
	}

	configureAnimations(arr: AnimationProps[]) {
		let animationConfig: {
			[name: string]: SpriteAnimation;
		} = {};

		arr.forEach((animation, i) => {
			let frames: {
				location: { x: number; y: number }[];
				speed: number;
				delayLoopSeconds: number;
			} = {
				location: [],
				speed: animation.speed,
				delayLoopSeconds: animation.loopDelay,
			};

			for (let j = 0; j < animation.frames; j++) {
				let posX = j * this.spriteWidth;
				let posY = i * this.spriteHeight;
				frames.location.push({ x: posX, y: posY });
			}

			animationConfig[animation.name] = frames;
		});

		this.animations = animationConfig;
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (this.animator.clearCanvas) {
			this.x = 0;
			this.gameFrame = 0;
			ctx!.clearRect(0, 0, this.width, this.height);
		} else {
			if (!this.currentAnimation) this.setAnimation("idle", 0);
			if (this.gameFrame > this.maxFrames) this.gameFrame = 0;

			const staggerFrames = this.animations[this.currentAnimation].speed;
			const frames = this.animations[this.currentAnimation].location.length;
			let position = Math.floor(this.gameFrame / staggerFrames) % frames; // amount of frames of animation

			const frameX = this.spriteWidth * position;
			const frameY = this.animations[this.currentAnimation].location[position].y;
			ctx!.drawImage(
				this.spriteSheet,
				frameX,
				frameY,
				this.spriteWidth,
				this.spriteHeight,
				this.x,
				this.y,
				this.height,
				this.width
			);
		}
	}

	setAnimation(name: string, startingFramePosition: number = 0) {
		if (this.currentAnimation !== name) {
			this.currentAnimation = name;
			this.gameFrame = Math.floor(
				startingFramePosition * this.animations[this.currentAnimation].speed
			);
			this.maxFrames =
				this.animations[this.currentAnimation].speed *
				this.animations[this.currentAnimation].location.length;
			this.delayFrame = 0;
			this.delaying = false;
			this.delayAmount = Math.floor(
				this.animations[this.currentAnimation].delayLoopSeconds * 60
			);
		}
	}
}
