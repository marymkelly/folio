import React from "react";

interface Props {
	label: string;
	className?: string;
}

export default function Tag(props: Props) {
	return (
		<div
			className={`mx-1.5 inline-flex items-center rounded-md border border-custom-gray-blue py-0.5 px-1.5 md:rounded-lg ${props.className}`}>
			<p className='whitespace-nowrap font-itc text-xs font-light tracking-wider text-custom-gray-blue lg:text-sm'>
				{props.label}
			</p>
		</div>
	);
}
