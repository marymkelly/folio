import { useEffect, useState } from "react";
import { TimelineTick, translateClass } from "../../../lib/data/timeline";

export function HorizonalYears(props: { percentage: number; activeTick: number; ticks: TimelineTick[]; years: number[] }): JSX.Element {
	const [percentTranslate, setPercentTranslate] = useState<number>(0);

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
