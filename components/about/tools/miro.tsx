import React from "react";
export default function MiroIcon<T extends { className: string }>(props: T): JSX.Element {
	return (
		<svg
			className={props.className}
			version='1.1'
			id='Layer_1'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			viewBox='0 0 48 48'>
			<g>
				<path
					fill='#FFD02F'
					d='M10.4,0h27.2C43.3,0,48,4.7,48,10.4v27.2C48,43.3,43.3,48,37.6,48H10.4C4.7,48,0,43.3,0,37.6V10.4
		C0,4.7,4.7,0,10.4,0z'></path>
				<path
					fill='#050038'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M33.3,6h-5.3l4.4,7.7L22.8,6h-5.3l4.8,9.4L12.3,6H7l5.3,12L7,42h5.3l10.1-25.7L17.5,42h5.3l9.7-27.4L28.1,42
		h5.3L43,12L33.3,6z'></path>
			</g>
		</svg>
	);
}
