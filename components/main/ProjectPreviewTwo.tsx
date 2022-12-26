import Image from "next/image";
import { useRouter } from "next/router";
import BulletPoint from "../common/BulletPoint";

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
	let boxCategories: string[] = ["industry", "platforms", "role"];
	const router = useRouter();

	const cardColors: { [key: string]: string } = {
		"#CF0008": "bg-[#CF0008]",
		"#E51B22": "bg-[#E51B22]",
		"#092636": "bg-[#092636]",
		"#1C3E51": "bg-[#1C3E51]",
		"#06D378": "bg-[#06D378]",
		"#00C86F": "bg-[#00C86F]",
	};

	return (
		<div
			onClick={() => {
				router.push(props.href);
			}}
			className='w-full h-full group flex flex-col items-center justify-center mb-20 hover:cursor-pointer'>
			<div
				className={`flex flex-col lg:flex-row w-full lg:w-10/12 lg:brightness-[.7] hover:brightness-100 h-[800px] ${
					cardColors[props.background]
				} overflow-hidden transition-all duration-500 justify-center p-0 pt-20 lg:p-24 lg:pr-0 relative`}>
				<div className={`text-white w-full ${props.divide === "7/5" ? "lg:w-7/12" : "lg:w-6/12"} flex flex-col h-full`}>
					<h2 className='font-gravesend font-bold text-6xl lg:text-[88px] tracking-[0.012em] leading-none'>{props.name}</h2>
					<div className='flex items-center whitespace-nowrap mt-10 font-stolzl font-medium tracking-wide text-base w-full lg:text-[22px] '>
						<p className='lg:ml-2.5'>{props.type}</p>
						<BulletPoint className='mx-2 lg:mx-4' />
						<p>{props.dates}</p>
					</div>
					<div className={`${cardColors[props.overlay]} mt-20 w-full lg:w-10/12 h-auto flex flex-col lg:ml-0.5 lg:px-10 py-9`}>
						{boxCategories
							.map((key: string, i) => {
								return Object.keys(props).includes(key) ? (
									<div
										key={`category-${i}`}
										className='font-stolzl text-lg lg:text-[20px] flex lg:items-center pl-6 mb-6 last:mb-1.5'>
										<label className='tracking-wider lg:min-w-[150px] mr-8 lg:mr-0 capitalize'>{key}</label>
										<p className='font-light'>{typeof props[key] === "string" ? props[key] : props[key].join(", ")}</p>
									</div>
								) : undefined;
							})
							.filter((entry) => entry)}
					</div>
				</div>
				<div
					className={`flex flex-col lg:flex-row w-full ${
						props.divide === "7/5" ? "lg:w-5/12" : "lg:w-6/12"
					} h-full lg:-mt-8 lg:scale-95 lg:translate-x-10 lg:group-hover:translate-x-2 group-hover:scale-100 transition-all duration-500 lg:group-hover:-mt-6 relative`}>
					<div className='w-full h-auto flex'>
						<Image
							src={props.image.src}
							alt={props.image.src}
							className={`rounded-l-2xl object-contain lg:object-cover object-left ${props.image?.classNames}`}
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
