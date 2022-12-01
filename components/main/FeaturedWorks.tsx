import Image from "next/image";
import Button from "../common/Button";
import Tag from "../common/Tag";
import ProjectPreview from "./ProjectPreview";

interface WorkProps {
	title: string;
	startYear: string | number;
	isCurrent?: boolean;
	tags: string[];
	color: string;
	image: string;
}

export default function FeaturedWorks() {
	const featured = [
		{
			title: "Sin Pin",
			startYear: 2022,
			isCurrent: true,
			tags: ["Dev", "UI", "UX"],
			color: "bg-project-sinpin-red-logo",
			image: "/images/preview/sinpin-preview-image2x.png",
		},
		{
			title: "Parrot Social Media",
			startYear: 2020,
			tags: ["Case Study", "Product Design", "UX"],
			color: "bg-project-parrot-green-logo",
			image: "/images/preview/parrot-preview-image2x.png",
		},
	];

	return (
		<div className='pb-32 2xl:pb-36 pt-32 px-20 md:px-28 lg:pl-[10%] xl:pl-[18%] min-w-[360px] w-full h-full flex flex-col bg-custom-gray-blue bg-opacity-10'>
			<div className='mb-12 md:mb-20'>
				<h2 className='font-itc font-light text-6xl text-custom-black mb-[52px] lg:mb-10'>Featured Works</h2>
			</div>
			{featured.map((project, i) => (
				<ProjectPreview
				key={`featProject-${i}`}
					title={project.title}
					startYear={project.startYear}
					isCurrent={project?.isCurrent ?? false}
					tags={project.tags}
					color={project.color}
					image={project.image}
				/>
			))}
			<div className='hidden'>
				<Button
					label='View all works'
					showArrow={true}
					className='text-custom-navy text-opacity-70 hover:text-opacity-90 border-custom-navy border-opacity-60 hover:border-opacity-75 bg-white hover:bg-[#D6E7F0] bg-opacity-10 hover:bg-opacity-80 border-2 px-7 py-3.5 font-itc font-normal text-lg tracking-wide'
				/>
			</div>
		</div>
	);
}
