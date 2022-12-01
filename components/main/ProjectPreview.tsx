import Tag from "../common/Tag";
import Image from "next/image";
interface WorkProps {
	title: string;
	startYear: number;
	endYear?: number;
	isCurrent?: boolean;
	tags: string[];
	color: string;
	image: string;
}

export default function ProjectPreview(props: WorkProps) {
	return (
		<>
			<div className='flex items-baseline mb-5'>
				<h2 className='text-custom-navy font-itc font-light tracking-wide text-4xl mr-6'>{props.title}</h2>
				<p className='text-custom-gray-blue font-stolzl font-light tracking-wide text-[22px] mr-[14px]'>
					{props.startYear} {props?.isCurrent ? "- Current" : props?.endYear ? "- " + props?.endYear : ""}
				</p>
				<div className='flex self-center mt-2.5'>
					{props.tags.map((tag, i) => (
						<Tag key={`${props.title}-featTag-${i}`} label={tag} />
					))}
				</div>
			</div>
			<div
				className={`${props.color} brightness-100 lg:brightness-[.82] hover:brightness-100 h-[560px] w-[1000px] 3xl:w-[1200px] lg:-ml-[50px] mb-24 flex items-center justify-center duration-200 group transition-all`}>
				<div className='relative w-[75%] h-[75%] group-hover:w-[77%] group-hover:h-[77%] transition-all duration-200'>
					<Image
						src={props.image}
						className='object-contain group-hover:drop-shadow-xl transition-all duration-150'
						fill
						alt='Image preview'
						priority
					/>
				</div>
			</div>
		</>
	);
}
