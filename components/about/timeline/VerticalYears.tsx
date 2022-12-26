import { useEffect, useState } from "react";
import { TimelineTick } from "../../../lib/data/timeline";

export function VerticalYears(props: { percentage: number; activeTick: number; ticks: TimelineTick[]; years: number[] }): JSX.Element {
	const [percentTranslate, setPercentTranslate] = useState<number>(0);

	const translateClass: { [key: string]: string } = {
		0: "-translate-y-0",
		100: "-translate-y-100",
		200: "-translate-y-200",
		300: "-translate-y-300",
		400: "-translate-y-400",
		500: "-translate-y-500",
		600: "-translate-y-600",
		700: "-translate-y-700",
		800: "-translate-y-800",
		900: "-translate-y-900",
		1000: "-translate-y-1000",
		1100: "-translate-y-1100",
		1200: "-translate-y-1200",
	};

	useEffect(() => {
		if (props.activeTick !== undefined) {
			let offset = Math.abs(props.activeTick * 100);

			if (percentTranslate !== offset) {
				setPercentTranslate(offset);
			}
		}
	}, [props.activeTick, props.ticks, percentTranslate]);

	return (
		<div className={`h-full transition-all duration-300 ${translateClass[percentTranslate.toString()]}`}>
			{props.years.map((year, i) => (
				<div key={`year-${i}`} id={`year-${i}`} className={`h-full min-h-[234px] flex justify-center items-center`}>
					<p className='-mt-1.5'>{year}</p>
				</div>
			))}
		</div>
	);
}
