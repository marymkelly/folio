import { TimelineCalculationData, TimelineTick } from "../data/timeline";
import { SpriteController, AnimationProps } from "./sprite";

export interface InputHandler {
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
	sprite: SpriteController;
	timeline?: HTMLDivElement;
	timelineInformation?: HTMLDivElement;
	calculationData: TimelineCalculationData;
	setPercent: Function;
}

export interface InputListener {
	el: HTMLElement | Window;
	event: string;
	action: EventListener;
}

export class CanvasController {
	protected input: InputHandler;

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

	set update(cb: Function) {
		this.sprite.update = cb.bind(this.sprite);
	}

	set listeners(arr: InputListener[]) {
		const events: InputListener[] = [];

		for (let listener of arr) {
			const dispatch = listener.action.bind(this.input);
			listener.el.addEventListener(listener.event, dispatch);

			events.push({ ...listener, action: dispatch });
		}

		this.input.listeners = events;
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

	remove() {
		this.input.stop();
	}
}

export class InputHandler {
	private events: InputListener[] = [];

	constructor(animator: CanvasController) {
		this.animator = animator;
	}

	set listeners(l: InputListener[]) {
		this.events = l;
	}

	stop() {
		for (let listener of this.events) {
			listener.el.removeEventListener(listener.event, listener.action);
		}
	}
}
