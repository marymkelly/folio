import SinPinPage from "../../components/projects/sinpin/SinpinPage";
import ParrotProjectPage from "../../components/projects/parrot/ParrotPage";
import GalactorPage from "../../components/projects/galactor/GalactorPage";
import { projects, getPreviewDateString } from "../../lib/data/projects";

const projectPages: { [key: string]: Function } = {
	sinpin: SinPinPage,
	"parrot-social": ParrotProjectPage,
	galactor: GalactorPage,
};

export default function Projects(props: { projectId: string }) {
	const Component: Function = projectPages[props.projectId];
	const projectProps = projects.find((p) => p.id === props.projectId);

	return <Component {...props} {...projectProps} dates={getPreviewDateString(projectProps!.dates)} />;
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
