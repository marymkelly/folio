import React from "react";

interface LinkedinIconProps {
	className?: string;
}

export function LinkedinIcon<T extends LinkedinIconProps>(props: T) {
	return (
		<svg viewBox='0 0 130 130' className={props.className}>
			<path
				fill='currentColor'
				d='M120.03,30.4A65.016,65.016,0,1,0,130,65,65.169,65.169,0,0,0,120.03,30.4ZM34.4,24.98a9.555,9.555,0,1,1-9.56,9.6A9.554,9.554,0,0,1,34.4,24.98Zm-7.21,79c-.94,0-1.13-.38-1.12-1.23q.03-12.615.01-25.22c0-8.38.02-16.75-.02-25.12,0-.97.23-1.3,1.25-1.29,4.74.05,9.47.04,14.21.01.88-.01,1.2.21,1.2,1.14q-.045,25.275-.01,50.55c0,.83-.24,1.16-1.1,1.15C36.8,103.95,31.99,103.94,27.19,103.98Zm76.46-.27a1.436,1.436,0,0,1-1.07.27q-6.945-.06-13.91,0c-1.03.01-1.35-.32-1.35-1.35.03-8.65.06-17.31-.01-25.95a30.82,30.82,0,0,0-.69-6.51c-.86-3.81-3.31-5.65-7.23-5.7a14.219,14.219,0,0,0-3.57.32c-3.8.95-5.44,3.82-6.08,7.38a30.276,30.276,0,0,0-.43,5.21c-.04,8.41-.02,16.82-.02,25.23,0,1.34,0,1.35-1.38,1.35-4.63,0-9.27-.02-13.9.02-1.03.01-1.35-.29-1.35-1.34q.045-25.08.02-50.15c0-1.34.01-1.35,1.37-1.35,4.47,0,8.93.03,13.39-.02.94-.01,1.27.26,1.24,1.22-.07,1.88-.02,3.77-.02,5.66a18.623,18.623,0,0,1,6.66-6.08,19.6,19.6,0,0,1,6.42-2.05c.21-.03.55-.07,1-.12a20.328,20.328,0,0,1,15.11,4.29c4.25,4.25,5.2,9.85,5.59,13.01.44,3.49.48,10.11.49,11V79.1c-.05,13.1-.07,22.49,0,23.56A1.362,1.362,0,0,1,103.65,103.71Z'
			/>
		</svg>
	);
}