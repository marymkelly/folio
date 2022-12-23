import { AnimationProps } from "./classes/sprite";

export const animations: AnimationProps[] = [
	{
		name: "idle",
		frames: 6,
		speed: 20,
		loopDelay: 3.5,
	},
	{
		name: "walk_right",
		frames: 8,
		speed: 18,
		loopDelay: 0,
	},
	{
		name: "walk_left",
		frames: 8,
		speed: 18,
		loopDelay: 0,
	},
	{
		name: "crossarms_right",
		frames: 6,
		speed: 11,
		loopDelay: 0,
	},
	{
		name: "crossarms_left",
		frames: 6,
		speed: 11,
		loopDelay: 0,
	},
	{
		name: "pivot_right",
		frames: 3,
		speed: 12,
		loopDelay: 0,
	},
	{
		name: "pivot_left",
		frames: 3,
		speed: 12,
		loopDelay: 0,
	},
	{
		name: "portal_entry_right",
		frames: 7,
		speed: 9,
		loopDelay: 0,
	},
	{
		name: "portal_entry_left",
		frames: 7,
		speed: 9,
		loopDelay: 0,
	},
	{
		name: "portal_exit_right",
		frames: 7,
		speed: 10,
		loopDelay: 0,
	},
	{
		name: "portal_exit_left",
		frames: 7,
		speed: 10,
		loopDelay: 0,
	},
];
