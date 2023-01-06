import MainHeader from "./Header";
import IntroTextBlurb from "./IntroBlurb";
import Experience from "./Experience";
import Literature from "./Literature";
import Contact from "./Contact";
import RecentWorks from "./RecentWorks";

export default function MainPage() {
	return (
		<>
			<MainHeader />
			<IntroTextBlurb />
			<Experience />
			<RecentWorks />
			<Literature />
			<Contact />
		</>
	);
}
