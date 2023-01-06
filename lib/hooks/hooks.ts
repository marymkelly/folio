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

				if ((top < viewFifth && bottom < viewFifth) || (top > viewHeight - viewFifth && bottom > viewHeight - viewFifth)) {
					if (inBounds) setInBounds(false);
				} else {
					if (!inBounds) setInBounds(true);
				}
			}
		}

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [ref.current, inBounds]);

	return [ref, inBounds];
}
