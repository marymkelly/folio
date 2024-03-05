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
		dates: "April 2022 - March 2023",
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
	}, [themeCtx]);

	return (
		<>
			<ProjectPageHeader {...projectData} />
			<ProjectPageOverview
				textClasses='text-project-sinpin-red-text'
				overviewClasses='bg-project-sinpin-red-fade'
			/>
			<ImageSection
				path='/images/projects/sinpin/intro.png'
				classes='bg-project-sinpin-red-logo h-[50vh] min-h-[600px] lg:h-[800px] w-full mb-10 pt-8 py-12 flex items-center justify-center'
				priority
			/>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Requirements Gathering'
				text='Upon introduction, company leadership provided a documenting outlining project requirements and conducted a thorough walkthrough of the platform. While comprehensive coverage of the scope was provided, much of it was written at a high-level, leaving many ambiguities for anyone not familiar with the product. 
				Through analysis of the existing website and further collaboration with the CEO, I was able to clarify additional specifications.'
			/>
			<p className='mt-12 mb-2 self-center px-16 font-stolzl text-2xl font-light xl:w-[1100px] xl:px-0'>
				With the existing platform affording three different account roles, it was decided
				early on to work from the top down, starting with the administrative portal.
			</p>

			<FeaturePoint
				title='Internal Interviews'
				text="To gain an understanding of users' experience, concerns, and desires of the current platform, I conducted employee interviews. They provided insight into practial problems, needs, and solutions and were useful in future planning, designs, and implementation of bugs and features."
			/>
			<FeaturePoint
				title='Wireframes'
				text='I created wireframes for any areas of the platform introducing any new functionality or major interface changes.'
			/>
			<ImageSection
				imgClasses='object-cover md:object-contain py-10 md:py-0'
				path='/images/projects/sinpin/wireframes.png'
				classes='h-[50vh] md:[75vh] min-h-[400px] lg:h-[500px] max-w-[1300px] w-full flex self-center items-center justify-center px-8 lg:px-0'
			/>
			<p className='mt-12 mb-2 self-center px-16 font-stolzl text-2xl font-light lg:my-8 xl:w-[1100px] xl:px-0'>
				The redesign needed to bring a fresh, current face to the existing platform and have
				high legibility.
			</p>

			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Design & Branding'
				text='Right before embarking on new interface designs, I learned that Sin Pin had no official brand colors or design documentation. As part of the redesign, I made the establishment of some official brand and design guidelines a priority; not only would this be beneficial during the new interface development, it would be be a useful resource for Sin Pin.'
			/>
			<FeaturePoint
				title='Color'
				text="It was generally accepted that red, orange, and teal were Sin Pin's brand colors based on some of their marketing assets. I was able to discern “official” brand colors of red and orange from the company's logo and used them as the foundation to build a color scheme from for the interface designs. There was an effort made to work with the existing teal color (often used a background), but ultimately better balance was found in a split complementary scheme using more blue hues."
			/>
			<p className='self-center px-16 pt-8 pb-12 font-gothic text-lg font-light leading-8 tracking-[0.02em] xl:w-[1100px] xl:px-0'>
				In addition to the logo colors, the palette includes black, white, blues, and grays.
				In practical application, limited palettes of the blue and gray values are used;
				there are two specific sets making up those colors - one used in a light design
				scheme, and one in a dark design scheme
			</p>
			<ImageSection
				path='/images/projects/sinpin/designcolors.png'
				classes='h-[20vh] sm:h-[60vh] md:min-h-[220px] lg:h-[240px] 2xl:h-[300px] w-full my-8 md:mt-16 md:mb-10 2xl:mt-20 2xl:mb-20 items-center justify-center px-12 md:px-0'
			/>
			<FeaturePoint
				title='Typography'
				text='The existing website, at the time, had a mix of serif and sans-serif fonts. For the redesign, sans-serif fonts were exclusively used for legibility. I compiled a type scale from interface designs which was a great resource during development.'
			/>
			<ImageSection
				path='/images/projects/sinpin/designtypography.png'
				classes='h-[25vh] sm:h-[60vh] md:min-h-[400px] lg:h-[800px] 2xl:h-[515px] w-full mt-16 mb-10  lg:mt-24 items-center justify-center px-12 md:px-0'
			/>
			<p className='mt-12 mb-2 self-center px-16 font-stolzl text-2xl font-light lg:my-8 xl:w-[1100px] xl:px-0'>
				We went for a clean and simple design as to not confuse the viewer’s eye
				unncessarily.
			</p>
			<ImageSection
				path='/images/projects/sinpin/beforeAfterAccount.png'
				classes='bg-project-sinpin-red-logo px-4 md:px-16 h-[30vh] xs:px-8 xs:h-[45vh] sm:h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 sm:py-20 items-center justify-center'
			/>
			<ImageSection
				path='/images/projects/sinpin/beforeAfterServices.png'
				classes='bg-project-sinpin-red-logo px-4 md:px-16 h-[30vh] xs:px-8 xs:h-[45vh] sm:h-[60vh] md:min-h-[400px] lg:h-[800px] w-full mb-10 lg:py-12 items-center justify-center'
			/>

			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Site Information & Architecture'
				text='The rebuild of this platform opended a hugh opportunity for efficiency through restructuring the paths to access information. Previously, administrative users often would have to click six (6) or more times to get to their end goal. I was able to reduce this for platform users, regardless of account type, to an average of two (2) or less clicks (or actions) to access their target area or content.'
			/>
			<p className='mt-12 mb-2 self-center px-16 font-stolzl text-2xl font-light xl:w-[1100px] xl:px-0'>
				Speed and efficiency were priorities, both for user and software performance.
			</p>
			<InfoPoint
				textClasses='text-project-sinpin-red-text'
				title='Building the Solution'
				text='The front-end of the web platform is React application built using NextJS. Tailwind CSS was used for styling, and much of the platform functionality was custom built with the primary exception being data tables. '
			/>
			<FeaturePoint
				title='Internationalization'
				text='The Sin Pin platform supports three languages: English, Spanish, and French.'
			/>
			<FeaturePoint
				title='MUI Datagrid'
				text='Due to all the functionality required by the company in relation to tables, it made sense to utilize a pre-existing solution. We used Material UI’s Datagrid Pro for displaying tabular data and built upon it to fit custom needs.  User’s have the ability to take advantage of inline editing, exporting data, filtering, sorting, and more.'
			/>
			<ImageSection
				path='/images/projects/sinpin/internationalization.png'
				classes='bg-project-sinpin-red-logo h-[40vh] md:h-[75vh] px-8 md:px-0  md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10  sm:py-8 md:py-24 items-center justify-center'
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
				text='Dashboards were tailored to best fit the needs of each role level, displaying useful data via chart or graph, announcements, and promotional materials where relevant.'
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
				text='The sidebar is dynamic both in it’s layout, which users can choose to fix open or allow to collapse (also extended to layouts with a nested sidebar), and in how it displays data, which generates based off the authenticated user’s permissions.'
			/>
			<ImageSection
				path='/images/projects/sinpin/sidebars.gif'
				classes='bg-project-sinpin-red-logo h-[35vh] xs:h-[75vh] px-8 md:px-0  md:min-h-[400px] lg:h-[800px] w-full mt-16 md:py-24 items-center justify-center'
			/>
		</>
	);
}
