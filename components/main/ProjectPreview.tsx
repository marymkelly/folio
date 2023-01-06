import Image from "next/image";
import { useRouter } from "next/router";
import BulletPoint from "../common/BulletPoint";
import { useIsRefInBounds } from "../../lib/hooks/hooks";
import { LegacyRef } from "react";
import { formatDateStrMonths } from "../../lib/utils/date";

interface PreviewProps {
	[key: string]: any;
	name: string;
	background: string;
	overlay: string;
	type: string;
	platforms?: string | string[];
	role?: string | string[];
	industry?: string;
	image: {
		src: string;
		alt: string;
		dimensions?: {
			height: number;
			width: number;
		};
		classNames?: string;
	};
	dates: string;
	url?: string;
	divide?: string;
}

export default function ProjectPreviewTwo<T extends PreviewProps>(props: T) {
	const boxCategories: string[] = ["industry", "platforms", "role"];
	const router = useRouter();
	const [projectRef, inBounds] = useIsRefInBounds();

	const cardColors: { [key: string]: string } = {
		"#CF0008": "bg-[#CF0008]",
		"#E51B22": "bg-[#E51B22]",
		"#092636": "bg-[#092636]",
		"#1C3E51": "bg-[#1C3E51]",
		"#06D378": "bg-[#06D378]",
		"#00C86F": "bg-[#00C86F]",
	};

	return (
		<div className='w-full h-auto max-h-[500px] md:max-h-[800px] flex flex-col items-center justify-center mb-20'>
			<div
				ref={projectRef as LegacyRef<HTMLDivElement>}
				onClick={() => {
					router.push(props.href);
				}}
				className={`group flex flex-col lg:flex-row w-11/12 sm:w-10/12 sm:max-w-[720px] lg:max-w-none hover:cursor-pointer hover:brightness-105 md:h-[800px] ${
					cardColors[props.background]
				} ${
					inBounds ? "brightness-100" : "brightness-[.5] lg:brightness-[.7] "
				} [&.in-bounds]:lg:brightness-70 overflow-hidden transition-all duration-500 px-4 pt-12 pb-20 md:pb-24 lg:p-24 lg:pr-0 relative`}>
				<div className={`text-white w-full ${props.divide === "7/5" ? "lg:w-7/12" : "lg:w-6/12"} mb-2 sm:mb-8 md:mb-0 flex flex-col h-fit`}>
					<h2 className='px-6 md:mt-4 md:px-12 xl:mt-2 lg:mt-0 lg:px-0 font-gravesend font-bold text-4xl sm:text-6xl md:text-[66px] lg:text-[76px] 2xl:text-[88px] tracking-[0.012em] leading-none whitespace-normal'>
						{props.name}
					</h2>
					<div className='px-6 md:px-12 lg:px-0 flex md:items-center md:whitespace-nowrap mt-6 lg:mt-10 font-stolzl font-medium tracking-wide text-sm sm:text-base w-full lg:text-xl xl:text-[22px] '>
						<p className='lg:ml-2.5 whitespace-nowrap'>{props.type}</p>
						<BulletPoint className='mx-3 lg:mx-4' />
						<p>{formatDateStrMonths(props.dates, "abbreviation")}</p>
					</div>
					<div
						className={`${
							cardColors[props.overlay]
						} break-words w-11/12 md:w-10/12 lg:w-11/12 self-center lg:self-start mt-12 md:mb-4 lg:mt-20 2xl:w-10/12 h-auto hidden md:flex flex-col lg:ml-0.5 px-4 xl:px-8 py-6 lg:py-9 lg:pb-8`}>
						{boxCategories
							.map((key: string, i) => {
								return Object.keys(props).includes(key) ? (
									<div
										key={`category-${i}`}
										className='font-stolzl md:text-lg xl:text-[20px] flex lg:items-center pl-5 2xl:pl-6 mb-6 last:mb-1.5'>
										<label className='tracking-wider xl:min-w-[150px] mr-8 xl:mr-0 capitalize'>{key}</label>
										<p className='font-light break-words'>
											{typeof props[key] === "string" ? props[key] : props[key].join(", ")}
										</p>
									</div>
								) : undefined;
							})
							.filter((entry) => entry)}
					</div>
				</div>
				<div
					className={`flex flex-col lg:flex-row h-auto min-h-[200px] w-full ${
						props.divide === "7/5" ? "lg:w-5/12" : "lg:w-6/12"
					} mt-8 lg:-mt-8 lg:scale-95 lg:translate-x-10 lg:group-hover:translate-x-2 group-hover:scale-100 transition-all duration-500 lg:group-hover:-mt-6 relative`}>
					<div className='w-full h-auto min-h-[200px] flex relative'>
						<Image
							src={props.image.src}
							alt={props.image.src}
							className={`rounded-l-2xl object-contain lg:object-cover lg:object-left ${props.image?.classNames}`}
							sizes='(max-width: 768px) 100vw 100vh,
							(max-width: 1200px) 100vw 100vh'
							fill
							priority={inBounds ? true : false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
