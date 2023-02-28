import React from "react";
export default function NodeIcon<T extends { className: string }>(props: T): JSX.Element {
	return (
		<svg
			className={props.className}
			id='Layer_2'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 94.44 107.49'>
			<defs>
				<linearGradient
					id='linear-gradient'
					x1='64.35'
					y1='18.79'
					x2='26.28'
					y2='96.44'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0' stopColor='#3f873f' />
					<stop offset='.33' stopColor='#3e8a3d' />
					<stop offset='.64' stopColor='#3e9537' />
					<stop offset='.93' stopColor='#3da82d' />
					<stop offset='1' stopColor='#3dae2b' />
				</linearGradient>
				<clipPath id='clippath'>
					<path
						d='m49.77.68c-1.57-.91-3.51-.91-5.09,0L2.55,25C.97,25.9,0,27.58,0,29.4v48.67c0,1.82.97,3.5,2.54,4.41l42.13,24.33c1.58.91,3.52.91,5.09,0l42.12-24.33c1.57-.91,2.54-2.59,2.54-4.41V29.4c0-1.82-.97-3.5-2.55-4.41L49.77.68Z'
						clipRule='evenodd'
						fill='url(#linear-gradient)'
					/>
				</clipPath>
				<linearGradient
					id='linear-gradient-2'
					x1='40.8'
					y1='59.43'
					x2='147.61'
					y2='-19.49'
					gradientUnits='userSpaceOnUse'>
					<stop offset='.14' stopColor='#3f873f' />
					<stop offset='.4' stopColor='#519f44' />
					<stop offset='.71' stopColor='#63b649' />
					<stop offset='.91' stopColor='#6abf4b' />
				</linearGradient>
				<linearGradient
					id='linear-gradient-3'
					x1='-1.49'
					y1='53.73'
					x2='95.93'
					y2='53.73'
					gradientUnits='userSpaceOnUse'>
					<stop offset='.09' stopColor='#6abf4b' />
					<stop offset='.29' stopColor='#63b649' />
					<stop offset='.6' stopColor='#519f44' />
					<stop offset='.86' stopColor='#3f873f' />
				</linearGradient>
				<linearGradient
					id='linear-gradient-4'
					x1='-1.49'
					y1='94.11'
					x2='95.93'
					y2='94.11'
					href='#linear-gradient-3'
				/>
				<linearGradient
					id='linear-gradient-5'
					x1='110.12'
					y1='16.49'
					x2='50.04'
					y2='139.05'
					href='#linear-gradient'
				/>
			</defs>
			<g id='Layer_1-2'>
				<g>
					<path
						d='m49.77.68c-1.57-.91-3.51-.91-5.09,0L2.55,25C.97,25.9,0,27.58,0,29.4v48.67c0,1.82.97,3.5,2.54,4.41l42.13,24.33c1.58.91,3.52.91,5.09,0l42.12-24.33c1.57-.91,2.54-2.59,2.54-4.41V29.4c0-1.82-.97-3.5-2.55-4.41L49.77.68Z'
						fill='url(#linear-gradient)'
						fillRule='evenodd'
					/>
					<g clipPath='url(#clippath)'>
						<g>
							<path
								d='m44.59.68L2.37,25c-1.58.91-2.72,2.59-2.72,4.41v48.67c0,1.2.51,2.34,1.31,3.24L48.4.16c-1.27-.31-2.65-.14-3.81.53Z'
								fill='none'
							/>
							<path
								d='m48.63,107.3c.41-.11.81-.28,1.19-.49l42.18-24.33c1.57-.91,2.65-2.59,2.65-4.41V29.4c0-1.34-.6-2.6-1.54-3.53l-44.47,81.44Z'
								fill='none'
							/>
							<path
								d='m91.97,25L49.72.68c-.42-.24-.86-.41-1.32-.53L.96,81.31c.41.46.89.86,1.42,1.17l42.32,24.33c1.2.69,2.62.85,3.93.49L93.11,25.87c-.34-.34-.72-.63-1.13-.87Z'
								fill='url(#linear-gradient-2)'
							/>
						</g>
						<g>
							<path
								d='m94.65,78.07V29.4c0-1.82-1.1-3.5-2.67-4.41L49.72.68c-.49-.28-1.01-.46-1.55-.57l46.32,79.13c.1-.38.16-.77.16-1.17Z'
								fill='none'
							/>
							<path
								d='m2.37,25c-1.58.91-2.72,2.59-2.72,4.41v48.67c0,1.82,1.16,3.5,2.73,4.41l42.32,24.33c1,.57,2.15.78,3.26.63L2.62,24.85l-.25.15Z'
								fill='none'
							/>
							<path
								d='m92,82.48c1.23-.71,2.14-1.89,2.49-3.24L48.17.11c-1.21-.24-2.49-.06-3.58.57L2.62,24.85l45.34,82.59c.65-.09,1.28-.3,1.86-.63l42.18-24.33Z'
								fill='url(#linear-gradient-3)'
							/>
							<path
								d='m92,82.48l-42.18,24.33c-.58.33-1.21.54-1.86.63l.84,1.53,46.85-27.12v-.64l-1.16-1.98c-.35,1.35-1.26,2.53-2.49,3.24Z'
								fill='url(#linear-gradient-4)'
							/>
							<path
								d='m92,82.48l-42.18,24.33c-.58.33-1.21.54-1.86.63l.84,1.53,46.85-27.12v-.64l-1.16-1.98c-.35,1.35-1.26,2.53-2.49,3.24Z'
								fill='url(#linear-gradient-5)'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}
