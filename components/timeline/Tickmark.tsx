import React from "react";
import { TickmarkProps, TimelineTick } from "../../lib/data/timeline";

export function Tickmark<T extends Omit<TimelineTick, "element"> & TickmarkProps>(props: T): JSX.Element {
	const active = props.activeIndex === props.index;

	return (
		<div
			id={`tick-${props.index}`}
			className={`w-14 h-14 left-[${props.percent - 8}%] flex group items-center justify-center`}
			onClick={() => props.setActiveTick(props.index)}>
			<div
				className={`${
					active
						? "w-2 h-2 rotate-45 bg-custom-teal mb-1"
						: `w-[5px] rounded-full h-[5px] mb-1 ${props.activeIndex >= props.index ? "opacity-70 bg-logo-teal" : "bg-slate-300"}`
				} group-hover:h-[22px] group-hover:w-[22px] group-hover:border-[1.5px] group-hover:rounded-full group-hover:opacity-100 transition-all group-hover:border-custom-teal group-hover:bg-[#F1F6F9]`}
			/>
			<span className={`${active ? "text-sm" : "text-xs"} ml-1 group-hover:text-sm hidden`}>{props.year.toString().slice(2)}</span>
		</div>
	);
}
