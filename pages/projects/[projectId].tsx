import Link from "next/link";
import SinPinPage from "../../components/projects/sinpin/SinpinPage";
import ParrotProjectPage from "../../components/projects/parrot/ParrotPage";
import GalactorPage from "../../components/projects/galactor/GalactorPage";
import { projects, getPreviewDateString } from "../../lib/data/projects";
import { useContext } from "react";
import ThemeContext, { themeContext } from "../../context/ThemeCtx";

const projectPages: { [key: string]: Function } = {
	sinpin: SinPinPage,
	"parrot-social": ParrotProjectPage,
	galactor: GalactorPage,
};

export default function Projects(props: { projectId: string }) {
	const themeCtx = useContext(ThemeContext);
	const Component: Function = projectPages[props.projectId];
	const projectIndex = projects.findIndex((p) => p.id === props.projectId);
	const prevProject = projectIndex === 0 ? projects[projects.length - 1] : projects[projectIndex - 1];
	const nextProject = projectIndex + 1 === projects.length ? projects[0] : projects[projectIndex + 1];

	const cardColors: { [key: string]: string } = {
		"#CF0008": "border-[3px] border-[#CF0008] text-[#CF0008] hover:bg-[#CF0008] hover:text-white hover:brightness-105 hover:cursor-pointer",
		"#E51B22": "border-[3px] border-[#E51B22] text-[#E51B22] hover:bg-[#E51B22] hover:text-white hover:brightness-105 hover:cursor-pointer",
		"#092636": "border-[3px] border-[#092636] text-[#092636] hover:bg-[#092636] hover:text-white hover:brightness-105 hover:cursor-pointer",
		"#1C3E51": "border-[3px] border-[#1C3E51] text-[#1C3E51] hover:bg-[#1C3E51] hover:text-white hover:brightness-105 hover:cursor-pointer",
		"#06D378": "border-[3px] border-[#06D378] text-[#06D378] hover:bg-[#06D378] hover:text-white hover:brightness-105 hover:cursor-pointer",
		"#00C86F": "border-[3px] border-[#00C86F] text-[#00C86F] hover:bg-[#00C86F] hover:text-white hover:brightness-105 hover:cursor-pointer",
	};

	return (
		<>
			<Component {...props} {...projects[projectIndex]} dates={getPreviewDateString(projects[projectIndex]!.dates)} />
			<div className={`w-full flex pb-20 ${themeCtx.footerColorClass}`}>
				<Link href={prevProject.href} className={`w-6/12 px-12 items-center flex flex-col`}>
					<div className={`w-8/12 pl-[72px] py-12 self-end ${prevProject.preview ? cardColors[prevProject.preview.colors.overlay] : ""} `}>
						<p className='text-xl'>Previous Project</p>
						<h3 className='text-3xl capitalize font-gravesend'>{prevProject.name}</h3>
					</div>
				</Link>
				<Link href={nextProject.href} className={`w-6/12 px-12 flex flex-col`}>
					<div className={`w-8/12 pl-[72px] py-12 ${nextProject.preview ? cardColors[nextProject.preview.colors.overlay] : ""}`}>
						<p className='text-xl'>Next Project</p>
						<h3 className='text-3xl capitalize font-gravesend'>{nextProject.name}</h3>
					</div>
				</Link>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { projectId: "parrot-social" } }, { params: { projectId: "sinpin" } }, { params: { projectId: "galactor" } }],
		fallback: "blocking",
	};
}

export async function getStaticProps(context: any) {
	const projectId = context.params.projectId;

	if (Object.keys(projectPages).includes(projectId.toLowerCase())) {
		return {
			props: { projectId },
		};
	} else {
		return { notFound: true };
	}
}
