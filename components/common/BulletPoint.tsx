import React from "react";

interface Props {
	className?: string;
}

export default function BulletPoint(props: Props) {
	return <span className={props.className}>•</span>;
}
