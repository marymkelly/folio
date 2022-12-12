import Tag from "../common/Tag";
import Image from "next/image";
import Link from "next/link";

interface WorkProps {
	title: string;
	startYear: number;
	endYear?: number;
	isCurrent?: boolean;
	tags: string[];
	color: string;
	image: string;
	href: string;
}

export default function ProjectPreview(props: WorkProps) {
	return (
		<>
			<div className='flex items-baseline mb-5 max-w-[360px] xs:max-w-none  flex-wrap justify-center md:justify-start md:flex-nowrap px-3'>
				<div className='flex items-baseline'>
					<h2 className='text-custom-navy dark:text-white font-itc font-light tracking-wide text-2xl md:text-3xl lg:text-4xl whitespace-nowrap'>
						{props.title}
					</h2>
					<p className='text-custom-gray-blue font-stolzl font-light tracking-wide text-sm md:text-base lg:text-[22px] ml-3 md:ml-6 mr-1.5 md:mr-[14px]'>
						{props.startYear} {props?.isCurrent ? "- Current" : props?.endYear ? "- " + props?.endYear : ""}
					</p>
				</div>
				<div className='flex self-center mt-2.5'>
					{props.tags.map((tag, i) => (
						<Tag key={`${props.title}-featTag-${i}`} label={tag} />
					))}
				</div>
			</div>
			<Link
				href={props.href}
				className={`${props.color} brightness-100 lg:brightness-[.82] hover:brightness-100  h-[75vh] md:min-h-[400px] lg:h-[560px] w-full 3xl:w-[1200px] mb-20  flex items-center justify-center duration-200 group transition-all`}>
				<div className='relative w-[75%] h-[75%] group-hover:w-[77%] group-hover:h-[77%] transition-all duration-200'>
					<Image
						src={props.image}
						className='object-contain group-hover:drop-shadow-xl transition-all duration-150'
						fill
						alt='Image preview'
						priority
					/>
				</div>
			</Link>
		</>
	);
}
