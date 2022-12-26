import ProjectPageHeader from "../ProjectHeader";
import ProjectPageOverview from "./SinpinOverview";
import { ImageSection, InfoPoint, FeaturePoint } from "../ProjectSections";
import { useContext, useEffect } from "react";
import ThemeContext from "../../../context/ThemeCtx";

export default function SinPinPage() {
	const projectData = {
		title: "Sin Pin",
		role: "Lead Software Developer & Interface Designer",
		platforms: "Web",
		dates: "April 2022 - Present (ongoing)",
		textClasses: "text-project-sinpin-red-text",
		overviewClasses: "bg-project-sinpin-red-fade",
		colorClasses: "bg-project-sinpin-red-logo",
	};

	const themeCtx = useContext(ThemeContext);

	useEffect(() => {
		themeCtx.setFooterColorClass("bg-[#E9151D]");
		return () => {
			themeCtx.setFooterColorClass("bg-transparent");
		};
	}, []);

	return (
		<>
			<ProjectPageHeader {...projectData} />
			<ProjectPageOverview textClasses='text-project-sinpin-red-text' overviewClasses='bg-project-sinpin-red-fade' />
			<ImageSection
				path='/images/projects/sinpin/intro.png'
				classes='bg-project-sinpin-red-logo h-[50vh] min-h-[600px] lg:h-[800px] w-full mb-10 pt-8 py-12 flex items-center justify-center'
			/>
			<p className='font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0'>
				With the existing platform affording three different account roles, the strategy that was decided upon early on, was to work from the
				top down, starting with the administrative portal.
			</p>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Internal Interviews'
				text='To gain a better understanding of what the current platform lacked and what users desired, I interviewed different employees within company and used the information in early wireframe concepts I created for the updated platform. '
			/>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Wireframes'
				text='Due to the pace and direction of the project from executive leadership, I only created wireframes for more complex areas of the platform which required a major update (behaivor or design did not have to mimic existing systems). '
			/>
			<ImageSection
				path='/images/projects/sinpin/wireframes.png'
				classes='h-[50vh] md:[75vh] min-h-[400px] lg:h-[500px] max-w-[1300px] w-full flex self-center items-center justify-center px-8 lg:px-0'
			/>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Design & Branding'
				text='When I first joined the Sin Pin team, the company had no official brand colors or design system, but it was generally accepted that red, teal, and black were their brand colors, based off certain versions of their existing logo. 
                I was able to discern “official” brand colors of red and orange though existing copies of the company’s logo, and used them as a foundaton to work from, as I tried to establish a balanced color scheme. An effort was made to try and work teal in, but ultimately I chose to pursue a split-complementary theme and use a bluer hue. '
			/>
			<ImageSection
				path='/images/projects/sinpin/designbranding.png'
				classes='h-[60vh] md:min-h-[400px] lg:h-[800px] 2xl:h-[815px] w-full mt-16 mb-10 items-center justify-center px-12 md:px-0'
			/>
			<ImageSection
				path='/images/projects/sinpin/beforeAfterAccount.png'
				classes='bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 py-20 items-center justify-center'
			/>
			<ImageSection
				path='/images/projects/sinpin/beforeAfterServices.png'
				classes='bg-project-sinpin-red-logo h-[60vh] md:min-h-[400px] lg:h-[800px] w-full mb-10 lg:py-12 items-center justify-center'
			/>
			<p className='font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0'>
				The redesign needed to bring a fresh, current face to the existing platform and have high legibility.
			</p>
			<p className='font-gothic font-light text-lg tracking-[0.02em] lg:w-[1100px] pt-8 pb-12 leading-8 self-center px-16 lg:px-0'>
				Due to this, I chose to keep the design clean and simple as to not confuse the viewer’s eye unncessarily.{" "}
			</p>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Site Information & Architecture'
				text='The rebuild of this platform opended a hugh opportunity for efficiency through restructuing the paths to access information. Previously, administrative users often would have to click six (6) or more times to get to their end goal. I have been able to reduce this for platform users, regardless of account type, to an average of two (2) or less clicks (or actions) to access their target area or content.'
			/>
			<p className='font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0'>
				Speed and efficiency were priorities, both for user and software performance.
			</p>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Building the Solution'
				text='The front-end of the web platform is React application built using NextJS. Tailwind CSS is used for styling, and much of the platform functionality is custom built with the primary exception being data tables. '
			/>

			<FeaturePoint
				title='Internationalization'
				text='The Sin Pin platform currently supports three languages: English, Spanish, and French.'
			/>
			<FeaturePoint
				title='MUI Datagrid'
				text='Due to all the functionality required by the company in relation to tables, it made sense to utilize a pre-existing solution. We use Material UI’s Datagrid Pro for displaying tabular data and have built upon it to fit custom needs.  User’s can take advantage of inline editing, exporting data, filtering, sorting, and more.'
			/>

			<ImageSection
				path='/images/projects/sinpin/internationalization.png'
				classes='bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center'
			/>

			<FeaturePoint
				title='Saved User Preferences'
				text='For convenience, user preferences including language, sidebar display, and theme (dark mode is planned to be offered in the future) are saved. '
			/>
			<FeaturePoint
				title='Branded Loading Animation'
				text='Per the request of company leadership, I built a custom CSS loading animation incorporating a version of the Sin Pin logo. '
			/>
			<ImageSection
				path='/images/projects/sinpin/loader.gif'
				classes='h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0'
			/>
			<FeaturePoint
				title='Custom Dashboards'
				text='Dashboards have been tailored to best fit the needs of each role level, displaying useful data via chart or graph, announcements, and promotional materials where relevant.'
			/>
			<FeaturePoint
				title='Command Palette'
				text='I built a custom command palette that makes navigating, searching certain data, and other actions accessible at the stroke of the keyboard (or by clicking the search icon available upon login).'
			/>
			<ImageSection
				path='/images/projects/sinpin/command.png'
				classes='h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0'
			/>
			<FeaturePoint
				title='Dynamic Sidebar'
				text='The sidebar is dynamic both in it’s layout, which users can fix open or allow to collapse (also extended to layouts with a nested sidebar), and in how it displays data, which generates based off the authenticated user’s permissions.'
			/>
			<ImageSection
				path='/images/projects/sinpin/sidebars.gif'
				classes='bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 py-24 items-center justify-center'
			/>
		</>
	);
}
