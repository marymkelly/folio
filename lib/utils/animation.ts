import { SpriteController } from "../classes/sprite";
import { InputHandler, InputListener } from "../classes/canvas";

export const update = {
	saga: function (this: SpriteController) {
		function getPivotToIdleStart(sprite: SpriteController) {
			const shortPositions = [2, 3, 6, 7];
			const staggerFrames = sprite.animations[sprite.currentAnimation].speed;
			const frames = sprite.animations[sprite.currentAnimation].location.length;
			const position = Math.floor(sprite.gameFrame / staggerFrames) % frames;
			let transitionStartFrame = shortPositions.includes(position) ? 1 : 0;
			return transitionStartFrame;
		}

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

			if (!this.currentAnimation.startsWith("portal") && !this.currentAnimation.startsWith("crossarms") && this.currentAnimation !== "idle") {
				this.speedX = 0;
				this.setAnimation("idle", 0);
				this.animator.lastKey = "";
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
						this.animator.lastKey = "";
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
	},
	home: function (this: SpriteController) {
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
			} else {
				if (this.animations[this.currentAnimation].delayLoopSeconds > 0) {
					this.delaying = true;
				}
				this.gameFrame = 0;
			}
		}
	},
};

export const input: { saga: <T extends Window | HTMLElement>(el: T) => InputListener[] } = {
	saga: (element) => {
		const events: InputListener[] = [
			{
				el: element,
				event: "keydown",
				action: function (this: InputHandler, e: Event & { key?: string }) {
					if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
						if (this.animator.currentKeys.indexOf(e.key) === -1) {
							this.animator.currentKeys.push(e.key);
						}

						if (this.animator.lastKey !== "P" + e.key && this.animator.currentKeys[this.animator.currentKeys.length - 1] == e.key) {
							this.animator.lastKey = "P" + e.key;
						}

						if (this.animator.currentKeys.length === 0 && this.animator.lastKey.startsWith("R")) {
							this.animator.lastKey = "";
						}
					}
				},
			},
			{
				el: element,
				event: "keyup",
				action: function (this: InputHandler, e: Event & { key?: string }) {
					if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
						if (this.animator.currentKeys.length === 1 || e.key.slice(1) === this.animator.lastKey.slice(1)) {
							this.animator.lastKey = "R" + e.key;
						}

						this.animator.currentKeys.splice(this.animator.currentKeys.indexOf(e.key), 1);
					}
				},
			},
		];

		return events;
	},
};
