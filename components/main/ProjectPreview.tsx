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
		<div className='mb-20 flex h-auto max-h-[500px] w-full flex-col items-center justify-center md:max-h-[800px]'>
			<div
				ref={projectRef as LegacyRef<HTMLDivElement>}
				onClick={() => {
					router.push(props.href);
				}}
				className={`group flex w-11/12 flex-col hover:cursor-pointer hover:brightness-105 sm:w-10/12 sm:max-w-[720px] md:h-[800px] lg:max-w-none lg:flex-row ${
					cardColors[props.background]
				} ${
					inBounds ? "brightness-100" : "brightness-[.5] lg:brightness-[.7] "
				} [&.in-bounds]:lg:brightness-70 relative overflow-hidden px-4 pt-12 pb-20 transition-all duration-500 md:pb-24 lg:p-24 lg:pr-0`}>
				<div
					className={`w-full text-white ${
						props.divide === "7/5" ? "lg:w-7/12" : "lg:w-6/12"
					} mb-2 flex h-fit flex-col sm:mb-8 md:mb-0`}>
					<h2 className='whitespace-normal px-6 font-gravesend text-4xl font-bold leading-none tracking-[0.012em] sm:text-6xl md:mt-4 md:px-12 md:text-[66px] lg:mt-0 lg:px-0 lg:text-[76px] xl:mt-2 2xl:text-[88px]'>
						{props.name}
					</h2>
					<div className='mt-6 flex w-full px-6 font-stolzl text-sm font-medium tracking-wide sm:text-base md:items-center md:whitespace-nowrap md:px-12 lg:mt-10 lg:px-0 lg:text-xl xl:text-[22px] '>
						<p className='whitespace-nowrap lg:ml-2.5'>{props.type}</p>
						<BulletPoint className='mx-3 lg:mx-4' />
						<p>{formatDateStrMonths(props.dates, "abbreviation")}</p>
					</div>
					<div
						className={`${
							cardColors[props.overlay]
						} mt-12 hidden h-auto w-11/12 flex-col self-center break-words px-4 py-6 md:mb-4 md:flex md:w-10/12 lg:mt-20 lg:ml-0.5 lg:w-11/12 lg:self-start lg:py-9 lg:pb-8 xl:px-8 2xl:w-10/12`}>
						{boxCategories
							.map((key: string, i) => {
								return Object.keys(props).includes(key) ? (
									<div
										key={`category-${i}`}
										className='mb-6 flex pl-5 font-stolzl last:mb-1.5 md:text-lg lg:items-center xl:text-[20px] 2xl:pl-6'>
										<label className='mr-8 capitalize tracking-wider xl:mr-0 xl:min-w-[150px]'>
											{key}
										</label>
										<p className='break-words font-light'>
											{typeof props[key] === "string"
												? props[key]
												: props[key].join(", ")}
										</p>
									</div>
								) : undefined;
							})
							.filter((entry) => entry)}
					</div>
				</div>
				<div
					className={`flex h-auto min-h-[200px] w-full flex-col lg:flex-row ${
						props.divide === "7/5" ? "lg:w-5/12" : "lg:w-6/12"
					} relative mt-8 transition-all duration-500 group-hover:scale-100 lg:-mt-8 lg:translate-x-10 lg:scale-95 lg:group-hover:-mt-6 lg:group-hover:translate-x-2`}>
					<div className='relative flex h-auto min-h-[200px] w-full'>
						<Image
							src={props.image.src}
							alt={props.image.src}
							className={`rounded-l-2xl object-contain lg:object-cover lg:object-left ${props.image?.classNames}`}
							sizes='(max-width: 768px) 100vw 100vh,
							(max-width: 1200px) 100vw 100vh'
							// placeholder='blur'
							// blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Vg8AAlEBZ0IDjCQAAAAASUVORK5CYII='
							fill
							priority={inBounds ? true : false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
