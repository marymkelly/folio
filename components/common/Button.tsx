import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface Props {
	label: string;
	className?: string;
	showArrow?: boolean;
	icon?: any;
	onClick?: Function;
}

export default function Button(props: Props) {
	return (
		<div
			onClick={() => (props.onClick ? props.onClick() : null)}
			className={`inline-flex items-center ${props.className}`}>
			{props.icon && <props.icon />}
			<p className={`${props?.showArrow && "mr-2.5"}`}>{props.label}</p>
			<ArrowLongRightIcon className={`h-6 w-6 ${!props?.showArrow ? "hidden" : ""}`} />
		</div>
	);
}
