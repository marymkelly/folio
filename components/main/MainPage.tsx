import MainHeader from "./Header";
import IntroTextBlurb from "./IntroBlurb";
import Experience from "./Experience";
import FeaturedWorks from "./FeaturedWorks";
import Literature from "./Literature";
import Contact from "./Contact";
import ProjectPreviewTwo from "./ProjectPreviewTwo";
import { projects, getPreviewDateString } from "../../lib/data/projects";

export default function MainPage() {
	return (
		<>
			<MainHeader />
			<IntroTextBlurb />
			<Experience />
			{/* <FeaturedWorks /> */}
			<>
				{projects.map((p, i) => {
					return (
						<ProjectPreviewTwo
							key={`project-preview-${i}`}
							{...p}
							background={p.preview?.colors.background!}
							overlay={p.preview?.colors.overlay!}
							image={p.preview?.image!}
							repository={p.url?.github}
							url={p.url?.live}
							dates={getPreviewDateString(p.dates)}
							divide={p.preview?.divide}
						/>
					);
				})}
			</>
			{/* <Literature /> */}
			<Contact />
		</>
	);
}
