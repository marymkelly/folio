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
	href: string;
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
			href: "/projects/sinpin",
		},
		{
			title: "Parrot Social Media",
			startYear: 2020,
			tags: ["Case Study", "Product Design", "UX"],
			color: "bg-project-parrot-green-logo",
			image: "/images/preview/parrot-preview-image2x.png",
			href: "/projects/parrot-social",
		},
	];

	return (
		<div className='pb-8 pt-20 sm:pt-24 3xl:pb-20 3xl:pt-32 sm:px-20 md:px-28 min-w-[360px] w-full h-full flex flex-col items-center bg-custom-gray-blue bg-opacity-10'>
			<div className='mb-4 lg:mb-12 3xl:mb-20 md:w-full max-w-[1200px] self-center'>
				<h2 className='section-header--main w-full'>Featured Works</h2>
			</div>
			<div className='3xl:w-[1200px] max-w-[1200px] w-full'>
				{featured.map((project, i) => (
					<ProjectPreview
						key={`featProject-${i}`}
						title={project.title}
						startYear={project.startYear}
						isCurrent={project?.isCurrent ?? false}
						tags={project.tags}
						color={project.color}
						image={project.image}
						href={project.href}
					/>
				))}
			</div>
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
