import { TimelineTick } from "../data/timeline";
import { SpriteController, AnimationProps } from "./sprite";

interface InputHandler {
	animator: CanvasController;
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
	timeline?: HTMLDivElement;
	timelineInformation?: HTMLDivElement;
	setPercent: Function;
}

export class CanvasController {
	constructor(width: number, height: number, spriteSrc: string, animations: AnimationProps[]) {
		this.width = width;
		this.height = height;
		this.lastKey;
		this.currentKeys = [];
		this.lastAnimation = 0;
		this.clearCanvas = false;
		this.input = new InputHandler(this);
		this.sprite = new SpriteController(this, spriteSrc, animations);
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
		});

		window.addEventListener("keyup", (e) => {
			if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
				if (this.animator.currentKeys.length === 1 || e.key.slice(1) === this.animator.lastKey.slice(1)) {
					this.animator.lastKey = "R" + e.key;
				}

				this.animator.currentKeys.splice(this.animator.currentKeys.indexOf(e.key), 1);
			}
		});
	}
}
