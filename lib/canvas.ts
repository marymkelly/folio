import { TimelineTick } from "../pages/test";
import { animations } from "./constants";

export interface AnimationProps {
	name: string;
	frames: number;
	speed: number;
	loopDelay: number;
}

export interface CanvasController {
	width: number;
	height: number;
	lastKey: string;
	lastAnimation: number;
	currentKeys: string[];
	activeTick: TimelineTick;
	clearCanvas: boolean;
	input: InputHandler;
	sprite: SpriteController;
	timeline: HTMLDivElement;
	setPercent: Function;
}

interface InputHandler {
	animator: CanvasController;
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

interface SpriteController {
	animator: any;
	height: number;
	width: number;
	x: number;
	y: number;
	speedX: number;
	speedY: number;
	speed: number;
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
}

export class CanvasController {
	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.lastKey;
		this.currentKeys = [];
		this.lastAnimation = 0;
		this.clearCanvas = false;
		this.input = new InputHandler(this);
		this.sprite = new SpriteController(this);
	}

	render(ctx: CanvasRenderingContext2D, timestamp: number = 0) {
		this.lastAnimation = timestamp;
		this.sprite.draw(ctx);
		this.sprite.update();
	}

	resize(dimensions: { width: number; height: number }) {
		this.width = dimensions.width;
		this.height = dimensions.height;
	}

	clear() {
		this.clearCanvas = true;
	}

	show() {
		this.clearCanvas = false;
	}
}

class InputHandler {
	constructor(animator: any) {
		this.animator = animator;

		window.addEventListener("keydown", (e) => {
			this.animator.lastKey = "P" + e.key;

			if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && this.animator.currentKeys.indexOf(e.key) === -1) {
				this.animator.currentKeys.push(e.key);
			}
		});

		window.addEventListener("keyup", (e) => {
			this.animator.lastKey = "R" + e.key;

			if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
				this.animator.currentKeys.splice(this.animator.currentKeys.indexOf(e.key), 1);
			}
		});
	}
}

class SpriteController {
	constructor(animator: any) {
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
		this.src = "/images/Sprite_Board_Extended.png";
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
			let frames: { location: { x: number; y: number }[]; speed: number; delayLoopSeconds: number } = {
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

	draw(ctx: any) {
		if (this.animator.clearCanvas) {
			ctx!.clearRect(0, 0, this.width, this.height);
		} else {
			if (!this.currentAnimation) this.setAnimation("idle", 0);
			// ctx!.clearRect(0, 0, this.width * 2, this.height);
			const spriteboard = new Image();
			spriteboard.src = this.src;

			const staggerFrames = this.animations[this.currentAnimation].speed;
			const frames = this.animations[this.currentAnimation].location.length;
			let position = Math.floor(this.gameFrame / staggerFrames) % frames; // amount of frames of animation
			if (position > frames - 1) {
				position = 0;
				this.gameFrame = 0;
			}
			const frameX = this.spriteWidth * position;
			const frameY = this.animations[this.currentAnimation].location[position].y;
			ctx!.drawImage(spriteboard, frameX, frameY, this.spriteWidth, this.spriteHeight, this.x, 0, 400, 400);
		}
	}

	// setSpeed(speedX: number, speedY: number) {
	// 	this.speedX = speedX;
	// 	// this.speedY = speedY;
	// }

	setAnimation(name: string, startingFramePosition: number = 0) {
		this.currentAnimation = name;
		this.gameFrame = Math.floor(startingFramePosition * this.animations[this.currentAnimation].speed);
		this.maxFrames = this.animations[this.currentAnimation].speed * this.animations[this.currentAnimation].location.length;
		this.delayFrame = 0;
		this.delaying = false;
		this.delayAmount =
			this.animations[this.currentAnimation].delayLoopSeconds > 0 ? this.animations[this.currentAnimation].delayLoopSeconds * 60 : 0;
	}

	update() {
		function getPivotToIdleStart(sprite: SpriteController) {
			const shortPositions = [2, 3, 6, 7];
			const staggerFrames = sprite.animations[sprite.currentAnimation].speed;
			const frames = sprite.animations[sprite.currentAnimation].location.length;
			const position = Math.floor(sprite.gameFrame / staggerFrames) % frames;
			let transitionStartFrame = shortPositions.includes(position) ? 1 : 0;
			return transitionStartFrame;
		}

		if (this.animator.lastKey === "PArrowLeft") {
			if (this.currentAnimation !== "walk_left" && this.currentAnimation !== "pivot_left") {
				this.speedX = 0;
				this.setAnimation("pivot_left", 0);
			}

			if (this.currentAnimation === "walk_left") {
				this.speedX = -2.2;
			}
		} else if (this.animator.lastKey === "PArrowRight") {
			if (this.currentAnimation !== "walk_right" && this.currentAnimation !== "pivot_right") {
				this.speedX = 0;
				this.setAnimation("pivot_right", 0);
			}

			if (this.currentAnimation === "walk_right") {
				this.speedX = 2.2;
			}
		} else if (this.animator.lastKey === "RArrowLeft") {
			if (this.currentAnimation === "walk_left") {
				this.speedX = 0;
				let startFrame = getPivotToIdleStart(this);
				this.setAnimation("crossarms_left", startFrame);
			}
		} else if (this.animator.lastKey === "RArrowRight") {
			if (this.currentAnimation === "walk_right") {
				this.speedX = 0;
				let startFrame = getPivotToIdleStart(this);
				this.setAnimation("crossarms_right", startFrame);
			}
		} else {
			if (this.animator.currentKeys.length === 0) {
				if (!this.currentAnimation.startsWith("portal") && this.currentAnimation !== "idle") {
					this.speedX = 0;
					this.setAnimation("idle", 0);
				}
			}
		}

		if (this.delaying) {
			if (this.delayFrame >= this.delayAmount) {
				this.delayFrame = 0;
				this.delaying = false;
			} else {
				this.delayFrame++;
			}
		} else {
			if (this.gameFrame >= this.maxFrames) {
				if (this.animations[this.currentAnimation].delayLoopSeconds > 0) {
					this.delaying = true;
				}
				this.gameFrame = 0;
			} else {
				this.gameFrame++;

				if (
					this.gameFrame === this.maxFrames &&
					(this.currentAnimation === "crossarms_left" || this.currentAnimation === "crossarms_right")
				) {
					this.speedX = 0;
					this.setAnimation("idle", 0);
				}
				if (this.gameFrame === this.maxFrames && this.currentAnimation === "pivot_left") {
					this.speedX = -2;
					this.setAnimation("walk_left", 0);
				}
				if (this.gameFrame === this.maxFrames && this.currentAnimation === "pivot_right") {
					this.speedX = 2;
					this.setAnimation("walk_right", 0);
				}
				if (
					this.gameFrame === this.maxFrames &&
					(this.currentAnimation === "portal_entry_left" || this.currentAnimation === "portal_entry_right")
				) {
					this.speedX = 0;
					const activeTick = this.animator.activeTick;
					const percentAdjustment = activeTick.index + 1 > 7 ? 1 : 2;
					this.x = ((activeTick.percent - percentAdjustment) / 100) * (this.animator.width - (activeTick.index === 11 ? 225 : 300));

					this.currentAnimation === "portal_entry_right"
						? this.setAnimation("portal_exit_right", 0)
						: this.setAnimation("portal_exit_left", 0);
				}
				if (this.gameFrame === this.maxFrames && this.currentAnimation === "portal_exit_left") {
					this.speedX = 0;
					this.setAnimation("crossarms_left", 0);
				}
				if (this.gameFrame === this.maxFrames && this.currentAnimation === "portal_exit_right") {
					this.speedX = 0;
					this.setAnimation("crossarms_right", 0);
				}
			}
		}

		this.x += this.speedX;

		if (this.x < 0) {
			this.x = 0;
		} else if (this.x > this.animator.width - this.width + 50) {
			this.x = Math.floor(this.animator.width - this.width + 50);
		}

		let timelinePercent = this.x;

		if (timelinePercent < 50) {
			timelinePercent = 2;
		} else if (timelinePercent > this.animator.width - 300) {
			timelinePercent = 100;
		} else {
			timelinePercent = (this.x / (this.animator.width - 300)) * 100;
			if (this.x > this.animator.width - 375) {
				timelinePercent = 100;
			}
		}

		this.animator.timeline.style.width = `${timelinePercent}%`;
		this.animator.setPercent(timelinePercent);
	}
}
