import React from "react";
import { TickmarkProps, TimelineTick } from "../../../lib/data/timeline";

export function Tickmark<T extends Omit<TimelineTick, "element"> & TickmarkProps>(
	props: T
): JSX.Element {
	const active =
		props.activeIndex > props.pivotPoint
			? props.activeIndex - 1 === props.index
			: props.activeIndex === props.index;

	// related to calcuating sprite if needed.
	// 	const spriteX = props.spriteX;
	// 	const el = document.getElementById(`tick-${props.index}`);
	// 	dimensions = el!.getBoundingClientRect();
	// 	const tickCenter = dimensions.width / 2 + dimensions.x;

	return (
		<div
			id={`tick-${props.index}`}
			className={`h-14 w-14 left-[${
				props.percent - props.spacePercent
			}%] group flex items-center justify-center`}
			onClick={() => props.setActiveTick(props.index)}>
			<div
				className={`${
					active
						? "mb-1 h-2 w-2 rotate-45 bg-custom-teal"
						: `mb-1 h-[5px] w-[5px] rounded-full ${
								props.activeIndex >= props.index
									? "bg-logo-teal opacity-70"
									: "bg-slate-300"
						  }`
				} transition-all group-hover:h-[22px] group-hover:w-[22px] group-hover:rounded-full group-hover:border-[1.5px] group-hover:border-custom-teal group-hover:bg-[#F1F6F9] group-hover:opacity-100`}
			/>
			<span className={`${active ? "text-sm" : "text-xs"} ml-1 hidden group-hover:text-sm`}>
				{props.year.toString().slice(2)}
			</span>
		</div>
	);
}
