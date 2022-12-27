import React from "react";
export default function BootstrapIcon<T extends { className: string }>(props: T): JSX.Element {
	return (
		<svg className={props.className} width='512' height='408' viewBox='0 0 512 408' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1700_53992)'>
				<path
					d='M56.481 53.32C55.515 25.58 77.128 0 106.342 0H405.695C434.909 0 456.522 25.58 455.556 53.32C454.628 79.967 455.833 114.485 464.52 142.63C473.235 170.862 487.931 188.707 512 191V217C487.931 219.293 473.235 237.138 464.52 265.37C455.833 293.515 454.628 328.033 455.556 354.681C456.522 382.42 434.909 408 405.695 408H106.342C77.128 408 55.515 382.42 56.482 354.681C57.409 328.033 56.204 293.515 47.516 265.37C38.802 237.138 24.07 219.293 0 217V191C24.069 188.707 38.802 170.862 47.516 142.63C56.204 114.485 57.409 79.967 56.481 53.32V53.32Z'
					fill='url(#paint0_linear_1700_53992)'
				/>
				<g filter='url(#filter0_d_1700_53992)'>
					<path
						d='M267.103 312.457C314.4 312.457 342.901 289.299 342.901 251.102C342.901 222.229 322.565 201.326 292.369 198.017V196.814C314.554 193.205 331.963 172.603 331.963 149.595C331.963 116.812 306.081 95.457 266.641 95.457H177.901V312.457H267.103ZM212.411 122.977H258.322C283.28 122.977 297.453 134.105 297.453 154.256C297.453 175.761 280.969 187.791 251.081 187.791H212.411V122.977V122.977ZM212.411 284.938V213.507H258.013C290.674 213.507 307.621 225.537 307.621 248.997C307.621 272.456 291.137 284.938 260.016 284.938H212.411V284.938Z'
						fill='url(#paint1_linear_1700_53992)'
					/>
					<path
						d='M267.103 312.457C314.4 312.457 342.901 289.299 342.901 251.102C342.901 222.229 322.565 201.326 292.369 198.017V196.814C314.554 193.205 331.963 172.603 331.963 149.595C331.963 116.812 306.081 95.457 266.641 95.457H177.901V312.457H267.103ZM212.411 122.977H258.322C283.28 122.977 297.453 134.105 297.453 154.256C297.453 175.761 280.969 187.791 251.081 187.791H212.411V122.977V122.977ZM212.411 284.938V213.507H258.013C290.674 213.507 307.621 225.537 307.621 248.997C307.621 272.456 291.137 284.938 260.016 284.938H212.411V284.938Z'
						stroke='white'
					/>
				</g>
			</g>
			<defs>
				<filter
					id='filter0_d_1700_53992'
					x='161.401'
					y='82.957'
					width='198'
					height='250'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='8' />
					<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1700_53992' />
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1700_53992' result='shape' />
				</filter>
				<linearGradient id='paint0_linear_1700_53992' x1='76.079' y1='10.798' x2='523.48' y2='365.945' gradientUnits='userSpaceOnUse'>
					<stop stopColor='#9013FE' />
					<stop offset='1' stopColor='#6610F2' />
				</linearGradient>
				<linearGradient id='paint1_linear_1700_53992' x1='193.508' y1='109.74' x2='293.514' y2='278.872' gradientUnits='userSpaceOnUse'>
					<stop stopColor='white' />
					<stop offset='1' stopColor='#F1E5FC' />
				</linearGradient>
				<clipPath id='clip0_1700_53992'>
					<rect width='512' height='408' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}
