import { timelineAnimations as animations } from "../constants";
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
	animator: any;
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
		this.spriteSheet = new Image();
		this.src = spriteSrc;
		this.gameFrame = 0;
		this.maxFrames = 120;
		this.delayFrame = 0;
		this.delayAmount = 0;
		this.delaying = false;
		this.configureAnimations(animations);

		this.spriteSheet.src = this.src;
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
			ctx!.drawImage(this.spriteSheet, frameX, frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.height, this.width);
		}
	}
	setAnimation(name: string, startingFramePosition: number = 0) {
		if (this.currentAnimation !== name) {
			this.currentAnimation = name;
			this.gameFrame = Math.floor(startingFramePosition * this.animations[this.currentAnimation].speed);
			this.maxFrames = this.animations[this.currentAnimation].speed * this.animations[this.currentAnimation].location.length;
			this.delayFrame = 0;
			this.delaying = false;
			this.delayAmount = Math.floor(this.animations[this.currentAnimation].delayLoopSeconds * 60);
		}
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

		if (Object.keys(this.animations).length > 1) {
			if (this.animator.lastKey === "PArrowLeft") {
				document.getElementById("left-arrow-container")!.classList.add("pressed");
				document.getElementById("right-arrow-container")!.classList.remove("pressed");

				if (this.currentAnimation === "idle" || this.currentAnimation.startsWith("crossarms") || this.currentAnimation === "walk_right") {
					this.speedX = 0;
					this.setAnimation("pivot_left", 0);
					return;
				}

				if (this.currentAnimation === "walk_left" && this.speedX !== -2.4) this.speedX = -2.4;
			}

			if (this.animator.lastKey === "PArrowRight") {
				document.getElementById("right-arrow-container")!.classList.add("pressed");
				document.getElementById("left-arrow-container")!.classList.remove("pressed");

				if (this.currentAnimation === "idle" || this.currentAnimation.startsWith("crossarms") || this.currentAnimation === "walk_left") {
					this.speedX = 0;
					this.setAnimation("pivot_right", 0);
					return;
				}

				if (this.currentAnimation === "walk_right" && this.speedX !== 2.4) this.speedX = 2.4;
			}

			if (this.animator.lastKey === "RArrowLeft") {
				if (this.currentAnimation === "walk_left" || this.currentAnimation.startsWith("pivot")) {
					this.speedX = 0;
					let startFrame = getPivotToIdleStart(this);
					this.setAnimation("crossarms_left", startFrame);
				}

				document.getElementById("left-arrow-container")!.classList.remove("pressed");
			}

			if (this.animator.lastKey === "RArrowRight") {
				if (this.currentAnimation === "walk_right" || this.currentAnimation.startsWith("pivot")) {
					this.speedX = 0;
					let startFrame = getPivotToIdleStart(this);
					this.setAnimation("crossarms_right", startFrame);
				}

				document.getElementById("right-arrow-container")!.classList.remove("pressed");
			}

			if (this.animator.currentKeys.length === 0) {
				if (this.animator.lastKey) {
					document.getElementById("right-arrow-container")!.classList.remove("pressed");
					document.getElementById("left-arrow-container")!.classList.remove("pressed");
				}

				if (
					!this.currentAnimation.startsWith("portal") &&
					!this.currentAnimation.startsWith("crossarms") &&
					this.currentAnimation !== "idle"
				) {
					this.speedX = 0;
					this.setAnimation("idle", 0);
					this.animator.lastKey = "";
				}
			}
		}

		if (this.delaying) {
			if (this.delayFrame <= this.delayAmount) {
				this.delayFrame++;
			} else {
				this.delayFrame = 0;
				this.delaying = false;
			}
		} else {
			if (this.gameFrame < this.maxFrames) {
				this.gameFrame++;
				if (this.gameFrame === this.maxFrames) {
					if (this.currentAnimation.startsWith("crossarms")) {
						this.speedX = 0;
						this.setAnimation("idle", 0);
						this.animator.lastKey = undefined;
					} else if (this.currentAnimation.startsWith("pivot")) {
						this.speedX = this.currentAnimation === "pivot_left" ? -2.4 : 2.4;
						this.currentAnimation === "pivot_left" ? this.setAnimation("walk_left", 0) : this.setAnimation("walk_right", 0);
					} else if (this.currentAnimation.startsWith("portal_entry")) {
						this.speedX = 0;
						const activeTick = this.animator.activeTick;
						const percentAdjustment = activeTick.index + 1 > 7 ? 1 : 2;
						this.x =
							activeTick.index === 0
								? 0
								: ((activeTick.percent - percentAdjustment) / 100) * (this.animator.width - (activeTick.index === 11 ? 225 : 300));

						this.currentAnimation === "portal_entry_right"
							? this.setAnimation("portal_exit_right", 0)
							: this.setAnimation("portal_exit_left", 0);
					} else if (this.currentAnimation.startsWith("portal_exit")) {
						this.speedX = 0;
						this.currentAnimation === "portal_exit_left"
							? this.setAnimation("crossarms_left", 0)
							: this.setAnimation("crossarms_right", 0);
					} else {
					}
				}
			} else {
				if (this.animations[this.currentAnimation].delayLoopSeconds > 0) {
					this.delaying = true;
				}

				this.gameFrame = 0;
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
			timelinePercent = 0;
		} else if (timelinePercent > this.animator.width - 300) {
			timelinePercent = 100;
		} else {
			timelinePercent = (this.x / (this.animator.width - 300)) * 100;
			if (this.x > this.animator.width - 375) {
				timelinePercent = 100;
			}
		}

		if (this.animator.timeline) {
			this.animator.timeline.style.width = `${timelinePercent}%`;
			this.animator.setPercent(timelinePercent);
		}
	}
}
