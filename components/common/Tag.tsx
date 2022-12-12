import React from "react";

interface Props {
	label: string;
	className?: string;
}

export default function Tag(props: Props) {
	return (
		<div className={`inline-flex items-center border border-custom-gray-blue rounded-md md:rounded-lg py-0.5 px-1.5 mx-1.5 ${props.className}`}>
			<p className='font-itc text-xs lg:text-sm font-light text-custom-gray-blue tracking-wider whitespace-nowrap'>{props.label}</p>
		</div>
	);
}
