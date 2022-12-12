import SinPinPage from "../../components/projects/sinpin/SinpinPage";
import ParrotProjectPage from "../../components/projects/parrot/ParrotPage";

const projectPages: { [key: string]: Function } = {
	sinpin: SinPinPage,
	"parrot-social": ParrotProjectPage,
};

export default function Projects(props: { projectId: string }) {
	const Component: Function = projectPages[props.projectId];

	return <Component />;
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { projectId: "parrot-social" } }, { params: { projectId: "sinpin" } }],
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
