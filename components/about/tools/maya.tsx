import React from "react";
export default function MayaIcon<T extends { className: string }>(props: T): JSX.Element {
	return (
		<svg
			className={props.className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 48 48'
			width='480px'
			height='480px'>
			<path fill='#0097a7' d='M36 18.14L36 42 35 42 33 40 33 22.91z' />
			<path
				fill='#00838f'
				d='M43 7c0 0-2 25-7 35h-1c0 0-.12-10-1.5-17.5L33 22.91l3-4.77L43 7zM12 23h2v1l1 16c0 0-2 2-8 2-1 0-2 0-2 0L12 23z'
			/>
			<path
				fill='#0097a7'
				d='M35 42c0 0 6.25-17.625 8-35v35H35zM5 7L5 42 14 24 14 23 14 7z'
			/>
			<path fill='#33bdcd' d='M28 35L43 7 31.505 7 20 35 20.248 35z' />
			<path fill='#80d5e0' d='M5 7L16.5 6 28 35 20 35 14 24z' />
		</svg>
	);
}
