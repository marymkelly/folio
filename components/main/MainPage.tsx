import MainHeader from "./Header";
import IntroTextBlurb from "./IntroBlurb";
import Experience from "./Experience";
import FeaturedWorks from "./FeaturedWorks";
import Literature from "./Literature";

export default function MainPage() {
	return (
		<>
			<MainHeader />
			<IntroTextBlurb />
			<Experience />
			<FeaturedWorks />
			<Literature />
		</>
	);
}
