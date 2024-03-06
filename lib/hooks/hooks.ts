import { useState, useRef, useEffect, RefObject } from "react";

//reference hook used with custom event to trigger animations when in view
export function useIsRefInBounds(): [RefObject<HTMLDivElement | null>, boolean] {
	const [inBounds, setInBounds] = useState<boolean>(false);
	const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleScroll() {
			const node = ref.current;
			if (node) {
				const { top, bottom } = node.getBoundingClientRect();

				const viewHeight = window.innerHeight;
				const viewFifth = window.innerHeight / 5;

				if (
					(top < viewFifth && bottom < viewFifth) ||
					(top > viewHeight - viewFifth && bottom > viewHeight - viewFifth)
				) {
					if (inBounds) setInBounds(false);
				} else {
					if (!inBounds) setInBounds(true);
				}
			}
		}

		document.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [ref, inBounds]);

	return [ref, inBounds];
}

type Dimensions = { width: number; height: number };

function getWindowDimensions(): Dimensions {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

export function useScreenDimensions(): Dimensions {
	const [windowDimensions, setWindowDimensions] = useState<Dimensions>({ width: 0, height: 0 });

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
