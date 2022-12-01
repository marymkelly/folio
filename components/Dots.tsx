import React from "react";

interface DotProps {
	id: string;
	density?: number;
	size?: number;
	className?: string;
}

export default function SvgDots(p: DotProps): JSX.Element {
	const props = {
		density: 1,
		size: 6,
		className: "fill-custom-gray-dots",
		...p,
	};

	return (
		<svg width='100%' height='100%' className={props?.className}>
			<pattern
				id={props.id}
				x='0'
				y='0'
				width={props.density * props.size + props.size}
				height={props.density * props.size + props.size}
				patternUnits='userSpaceOnUse'>
				<circle cx={props.size} cy={props.size} r={props.size} />
			</pattern>
			<rect x='0' y='0' width='100%' height='100%' fill={`url(#${props.id})`}></rect>
		</svg>
	);
}
