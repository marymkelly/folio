import React from "react";
export default function MySqlIcon<T extends { className: string}>(props: T): JSX.Element {
	return (
		<svg className={props.className} id='Layer_2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 134.12 91.08'>
			<g id='Layer_1-2'>
				<path
					d='m32.24,82.98h-5.17c-.18-8.74-.69-16.95-1.51-24.64h-.05l-7.88,24.64h-3.94l-7.83-24.64h-.05c-.58,7.39-.95,15.6-1.1,24.64H0c.3-10.99,1.07-21.3,2.29-30.92h6.41l7.47,22.72h.05l7.51-22.72h6.14c1.34,11.27,2.14,21.57,2.38,30.92m22.44-22.81c-2.11,11.43-4.89,19.74-8.34,24.93-2.69,3.99-5.63,5.99-8.84,5.99-.85,0-1.91-.26-3.16-.77v-2.76c.61.09,1.33.14,2.15.14,1.5,0,2.7-.41,3.62-1.24,1.1-1.01,1.65-2.14,1.65-3.39,0-.86-.43-2.61-1.28-5.27l-5.68-17.64h5.08l4.08,13.19c.92,3,1.3,5.09,1.15,6.28,2.23-5.95,3.79-12.44,4.67-19.47h4.9Z'
					fill='#5d87a1'
				/>
				<path
					d='m123.57,82.98h-14.7v-30.92h4.94v27.11h9.75v3.81Zm-18.55.75l-5.68-2.81c.5-.41.99-.86,1.42-1.38,2.42-2.84,3.62-7.03,3.62-12.59,0-10.23-4.01-15.35-12.04-15.35-3.94,0-7.01,1.3-9.21,3.89-2.41,2.84-3.62,7.02-3.62,12.55s1.07,9.42,3.21,11.95c1.96,2.29,4.9,3.44,8.84,3.44,1.47,0,2.82-.18,4.05-.54l7.4,4.31,2.02-3.47Zm-18.41-6.93c-1.25-2.01-1.88-5.25-1.88-9.71,0-7.78,2.36-11.68,7.1-11.68,2.47,0,4.29.93,5.45,2.79,1.25,2.02,1.88,5.22,1.88,9.62,0,7.85-2.37,11.77-7.1,11.77-2.48,0-4.29-.93-5.45-2.8m-9.26-2.38c0,2.62-.96,4.77-2.88,6.46-1.92,1.68-4.5,2.52-7.74,2.52-3.02,0-5.96-.97-8.79-2.89l1.33-2.65c2.44,1.22,4.65,1.83,6.64,1.83,1.86,0,3.32-.41,4.38-1.23,1.06-.82,1.68-1.97,1.68-3.43,0-1.84-1.28-3.41-3.63-4.72-2.17-1.19-6.5-3.68-6.5-3.68-2.35-1.71-3.53-3.55-3.53-6.58,0-2.51.88-4.53,2.63-6.07,1.76-1.54,4.02-2.32,6.8-2.32s5.48.77,7.83,2.29l-1.19,2.66c-2.01-.85-3.99-1.28-5.95-1.28-1.58,0-2.81.38-3.66,1.15-.86.76-1.39,1.74-1.39,2.93,0,1.83,1.31,3.42,3.72,4.76,2.2,1.19,6.64,3.72,6.64,3.72,2.41,1.71,3.61,3.53,3.61,6.53'
					fill='#f8981d'
				/>
				<path
					d='m129.78,41.7c-2.99-.08-5.3.22-7.25,1.05-.56.22-1.45.22-1.53.93.3.3.34.78.6,1.2.45.75,1.23,1.75,1.94,2.28.78.6,1.57,1.19,2.39,1.72,1.45.9,3.1,1.42,4.52,2.32.82.52,1.65,1.19,2.47,1.76.41.3.67.78,1.19.97v-.11c-.26-.34-.34-.82-.6-1.2l-1.12-1.08c-1.08-1.46-2.43-2.73-3.88-3.77-1.2-.82-3.81-1.94-4.3-3.32l-.08-.08c.82-.08,1.8-.38,2.58-.6,1.27-.33,2.43-.26,3.73-.59.6-.15,1.2-.34,1.8-.52v-.34c-.68-.67-1.16-1.57-1.87-2.2-1.9-1.64-4-3.25-6.16-4.6-1.16-.75-2.65-1.23-3.89-1.87-.44-.22-1.19-.34-1.46-.71-.67-.82-1.05-1.9-1.53-2.88-1.08-2.05-2.13-4.33-3.06-6.5-.67-1.46-1.08-2.91-1.91-4.26-3.85-6.35-8.03-10.2-14.46-13.97-1.38-.79-3.02-1.12-4.78-1.53l-2.8-.15c-.6-.26-1.2-.97-1.72-1.31-2.13-1.34-7.62-4.26-9.19-.41-1.01,2.43,1.49,4.82,2.35,6.05.64.86,1.46,1.83,1.9,2.8.26.63.34,1.31.6,1.98.6,1.64,1.16,3.47,1.94,5.01.41.78.86,1.6,1.38,2.31.3.41.82.6.94,1.27-.52.74-.56,1.87-.86,2.8-1.34,4.22-.82,9.45,1.09,12.55.6.93,2.02,2.99,3.92,2.2,1.68-.67,1.31-2.8,1.79-4.67.11-.45.04-.75.26-1.04v.07c.52,1.05,1.05,2.05,1.53,3.1,1.16,1.83,3.18,3.74,4.86,5,.89.68,1.6,1.83,2.72,2.25v-.11h-.07c-.23-.33-.56-.49-.86-.75-.67-.67-1.42-1.5-1.94-2.24-1.57-2.09-2.95-4.41-4.18-6.8-.6-1.16-1.12-2.43-1.61-3.59-.23-.45-.23-1.12-.6-1.35-.56.82-1.38,1.53-1.79,2.54-.71,1.61-.79,3.59-1.05,5.65l-.15.07c-1.19-.3-1.6-1.53-2.06-2.57-1.12-2.65-1.31-6.91-.34-9.98.26-.78,1.39-3.25.94-3.99-.22-.72-.97-1.12-1.38-1.69-.48-.71-1.01-1.6-1.35-2.39-.9-2.09-1.35-4.41-2.31-6.5-.45-.97-1.23-1.98-1.87-2.88-.71-1.01-1.5-1.72-2.06-2.91-.19-.41-.45-1.08-.15-1.53.07-.3.22-.41.52-.49.48-.41,1.87.11,2.35.34,1.39.56,2.54,1.08,3.7,1.87.52.38,1.08,1.08,1.75,1.27h.79c1.19.26,2.54.07,3.66.41,1.98.64,3.77,1.57,5.38,2.58,4.89,3.1,8.93,7.51,11.65,12.78.45.86.64,1.64,1.04,2.54.79,1.83,1.76,3.7,2.54,5.49.79,1.76,1.53,3.55,2.65,5.01.56.78,2.81,1.19,3.81,1.61.74.33,1.9.63,2.58,1.04,1.27.78,2.54,1.68,3.73,2.54.6.45,2.46,1.38,2.58,2.13M91.67,9.24c-.52,0-1.03.06-1.53.19v.08h.07c.3.6.82,1.01,1.2,1.53.3.6.56,1.19.86,1.79l.07-.07c.53-.37.79-.97.79-1.87-.23-.26-.26-.52-.45-.78-.22-.37-.71-.56-1.01-.86'
					fill='#5d87a1'
				/>
			</g>
		</svg>
	);
}