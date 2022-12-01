import { ReactNode } from "react";

interface Props {
	label: string;
	className?: string;
	icon: ReactNode;
}

export default function IconLabel(props: Props) {
	return (
		<div className={`flex items-center ${props.className}`}>
			{props.icon}
			<p className="ml-5">{props.label}</p>
		</div>
	);
}
