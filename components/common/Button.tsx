import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface Props {
	label: string;
	className?: string;
	showArrow?: boolean;
}

export default function Button(props: Props) {
	return (
		<div className={`inline-flex items-center ${props.className}`}>
			<p className='mr-2.5'>{props.label}</p>
			<ArrowLongRightIcon className={`h-6 w-6 ${!props?.showArrow ? "hidden" : ""}`} />
		</div>
	);
}
