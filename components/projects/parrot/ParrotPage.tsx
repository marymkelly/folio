import ProjectPageHeader from "../ProjectHeader";
import ProjectPageOverview from "./ParrotOverview";
import { ImageSection, InfoPoint, FeaturePoint } from "../ProjectSections";

export default function ParrotProjectPage() {
	const projectData = {
		title: "Parrot Social Media",
		role: "Lead Business Analyst",
		platforms: "iOS",
		dates: "September - October 2020 (6 Weeks)",
		textClasses: "text-project-parrot-green-text",
		overviewClasses: "bg-project-parrot-green-fade",
		colorClasses: "bg-project-parrot-green-logo",
	};

	return (
		<>
			<ProjectPageHeader {...projectData} />
			<ProjectPageOverview
				textClasses='text-project-parrot-green-text'
				overviewClasses='bg-project-parrot-green-fade'
			/>
			<ImageSection
				path='/images/projects/parrot/intro.png'
				classes='bg-project-parrot-green-logo h-[75vh] min-h-[600px] lg:h-[800px] w-full mb-10 pt-8 flex items-center justify-center'
				imgClasses='object-contain-cover md:object-contain'
				priority
			/>
			<div className='flex w-full justify-center'>
				<div className='mb-4 mt-20 w-full max-w-[1100px] px-16 lg:px-0'>
					<h1 className='mb-4 font-itc text-5xl'>Process</h1>
				</div>
			</div>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='Weekly Meetings'
				text='Throughout the weeks of this analysis, calls were held at least once a week with major stakeholder(s). During these meetings, it was common for questions to be discuss, brainstorming to occur, and the review of any wireframes, screen designs, or other visual assets would be reviewed. Notes about the meeting were documented for reference.'
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='Research & Interviews'
				text="Competitor research was conducted to assess Parrot's value proposition and it was confirmed that none of the major social media platforms (Facebook, Instagram, Twitter, TikTok, Snapchat) offered a feature similar to the concept that Parrot was proposing, at the time.  Additionally, informal interviews with the target demographic supported the notion of sufficent interest in the solution to move the project forward."
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='WBS'
				text='A Work Breakdown Structure, or WBS, is a document that helps detail the tasks or steps needed within a process. After gaining a sufficent understanding of project requirements, I created a WBS to help outline the various features anticipated for this project.'
			/>
			<ImageSection
				path='/images/projects/parrot/wbs.png'
				classes='h-[50vh] md:[75vh] min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-8 lg:px-0'
				caption='Example of WBS'
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='Wireframes'
				text='I designed all of the wireframes for the project.'
			/>
			<ImageSection
				path='/images/projects/parrot/wireframes.png'
				classes='bg-project-parrot-green-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center'
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='User Flows'
				text='As the wireframes for different feature areas were completed, I constructed user flows, which I used as a tool when presenting wireframes to stakeholders and provided as a deliverable at the end of the phase. User flows are a great tool in helping viewers identify interactable elements available to them and understand the correlation between each screen.'
			/>
			<ImageSection
				path='/images/projects/parrot/userflows.png'
				classes='h-[60vh] md:min-h-[400px] lg:h-[800px] 2xl:h-[1400px] w-full mt-16 mb-10 items-center justify-center px-12 md:px-0'
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='Design & Branding'
				text="Parrot provided swatches of a mint green color as examples for the primary color of their branding. It was important for the design to appeal to Parrot's target demographic of teens and young adults and have a sense of sophistication."
			/>
			<p className='mt-12 mb-2 self-center px-16 font-stolzl text-2xl font-light lg:w-[1100px] lg:px-0'>
				Therefore, the design direction chosen was a clean, modern look.
			</p>
			<ImageSection
				path='/images/projects/parrot/designbranding.png'
				classes='bg-project-parrot-green-logo h-[60vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 lg:py-24 items-center justify-center'
			/>
			<FeaturePoint
				title='Group Posts'
				text='All content on Parrot will be of a shared format.  This means, in order for a post to be shared, more than one user must participate.'
			/>
			<FeaturePoint
				title='Shared Likes'
				text='To encourage inclusion and equality, any “likes” received by a post are applied to all of its collaborators and helps its performance in content feeds.'
			/>
			<FeaturePoint
				title='Collaborations'
				text='Users can see and interact with content shared between them and other users under their collaborations. To start a collaboration, users can share content with others to start a collaboration. When all users respond or the time limit ends, eligible posts will become public'
			/>
			<ImageSection
				path='/images/projects/parrot/collaborations.png'
				classes='h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0'
			/>
			<FeaturePoint
				title='Collaborative Editing'
				text="Content sharing is a cornerstone of today's social media. Users will be able to edit their own content, as well as content that has been share with them, using built-in editors."
			/>
			<ImageSection
				path='/images/projects/parrot/collab-editing.png'
				classes='h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0'
			/>
			<FeaturePoint
				title='Interest-cultivated Content'
				text='The content automatically generated by the Parrot platform as a suggestion specific to each user, will adapt based on different posts and connections that a users express interest in (likes or follows).'
			/>
			<ImageSection
				path='/images/projects/parrot/interest-cultivation.png'
				classes='bg-project-parrot-green-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center'
			/>
			<InfoPoint
				textClasses='text-project-parrot-green-text'
				title='Functional Requirements Document'
				text="I wrote a Functional Requirements Document (FRS) that works in conjunction with the visual components to detail the solution was produced. The document aids in the project's preparedness for moving into development, in addition to providing other benefits."
			/>
			<ImageSection
				path='/images/projects/parrot/frd.png'
				classes='h-[475px] md:min-h-[400px] w-full mt-16 mb-10 items-center justify-center'
			/>
			<div className='flex w-full justify-center'>
				<div className='mt-20 mb-12 w-full max-w-[1100px] px-16 lg:px-0'>
					<h1 className='mb-4 font-itc text-5xl'>Reflection</h1>
				</div>
			</div>
			<div className='flex w-full flex-col items-center'>
				<div className='flex w-full max-w-[1100px] flex-col items-start px-16 pb-40 lg:px-0'>
					<p className='mb-8 font-gothic text-lg font-light leading-10 tracking-[0.02em]'>
						Something I learned from this project was that sometimes it&apos;s better
						not to reinvent the wheel. One of the concerns at the start of the project
						was being “different enough” from other social media platforms. Ultimately,
						the core feature concept for this project was unique enough in itself, so
						then the question was, how do we deliver it to the users?
					</p>
					<p className='font-gothic text-lg font-light leading-10 tracking-[0.02em]'>
						When designing wireframes, my primary concern was making app intuitive for
						the user, so I chose to pull inspiration from existing social media
						applications and adapted it for functionality needed. This decision seemed
						to be positively reinforced by the full-color designs, which have a fresh
						look but have elements of familiarity, making it easy for the user to
						navigate correctly based on assumption.
					</p>
				</div>
			</div>
		</>
	);
}
