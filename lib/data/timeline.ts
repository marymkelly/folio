export interface Image {
	src: string;
	alt: string;
	dimensions: { height: number; width: number };
	className?: string;
}

export interface TimelineTick {
	year: number;
	percent: number;
	index: number;
	events?: TimelineEvent[];
}

export interface TimelineEvent {
	year: number;
	title?: string;
	summary: string;
	percent?: number;
	image?: Image;
	x?: number | string;
}

export interface TickmarkProps {
	activeIndex: number;
	setActiveTick: Function;
}

export const timelineData: TimelineEvent[] = [
	{
		year: 2011,
		title: "Off to College",
		summary: "Began pursuing an undergraduate degree at the Florida State University.",
		image: {
			src: "/images/timeline/fsu-watercolor-opaque.png",
			alt: "Watercolor of FSU/'s Wescott Fountain",
			dimensions: { height: 180, width: 376 },
			className: "opacity-60 w-auto",
		},
	},
	{
		year: 2012,
		title: "First-time Coding",
		summary:
			"I first started to learn how program in C++ by taking the 'Intro to C++' (and later 'Object Oriented Programming') course(s) through my University.",
	},
	{
		year: 2014,
		title: "",
		summary: "Took a web development class and extended coding knowledge in the direcion of web languages.",
	},
	{
		year: 2014,
		title: "Practical Experience",
		summary: `Started fall internship with a startup company named Student Opportunity Center (SOC), Inc., where I was able to apply my skills and gain more exposure to web-related products and programming.`,
		image: {
			src: "/images/timeline/SOC.png",
			alt: "Student Opportunity Center Original Logo",
			dimensions: { height: 75, width: 75 },
			className: "h-auto bg-blend-multiply",
		},
	},
	{
		year: 2014,
		title: "Career Choice",
		summary:
			"My experiences that semester revealed a genuine interest and led me to my resolve of pursuing a career path in software development and/or the field of human-computer interaction.",
	},
	{
		year: 2015,
		title: "First Web Development Job",
		summary: "Stayed on with SOC as a web developer; a position extended to me near end of my internship",
		image: {
			src: "/images/timeline/SOC2-transparent.png",
			alt: "Student Opportunity Center Updated Logo",
			dimensions: { height: 75, width: 75 },
			className: "h-auto bg-blend-multiply",
		},
	},
	{
		year: 2015,
		title: "B.S. Sociology",
		summary: "Graduated with a Bachelor of Science in Sociology with a minor in Psychology.",
		image: {
			src: "/images/timeline/gradcap.png",
			alt: "Image of Graduation Cap",
			dimensions: { height: 60.3, width: 90 },
			className: "w-auto",
		},
	},
	{
		year: 2016,
		title: "More Web Development Experience",
		summary: "Contract job as a web application at the National High Manget Laboratory.",
		image: {
			src: "/images/timeline/maglab-transparent.png",
			alt: "National High Magnet Laboratory Logo",
			dimensions: { height: 59.2, width: 200 },
			className: "h-auto",
		},
	},
	{
		year: 2016,
		title: "Left Student Opportunity Center",
		summary:
			"Even thought the company relocated late 2015 and I did not move with them, I continued working remote for them until eventually leaving late 2016.",
	},
	{
		year: 2017,
		title: "Time for a Move",
		summary:
			"After difficulty finding new opportunities to work in tech where I lived, I decided to move back to my hometown of Stuart, FL for a fresh start and to figure out how to advance towards my career goals.",
	},
	{
		year: 2017,
		title: "Back to School",
		summary:
			"Decided that going back to school would be advantageous for my goals of working in software development or human-computer interaction and started taking classes again.",
	},
	{
		year: 2018,
		title: "Business Analysis Intern",
		summary: "Began a business analysis internship with custom software development company, Mercury Development",
		image: {
			src: "/images/timeline/mercury.png",
			alt: "Mercury Development Logo",
			dimensions: { height: 75, width: 100 },
			className: "h-auto",
		},
	},
	{
		year: 2019,
		title: "Hired as a Business Analyst",
		summary: "Transitioned into full-time role as a Business Analyst with, Mercury Development",
		image: {
			src: "/images/timeline/mercury.png",
			alt: "Mercury Development Logo",
			dimensions: { height: 75, width: 100 },
			className: "h-auto",
		},
	},
	{
		year: 2020,
		title: "",
		summary: "Started actively coding in free-time and reignited my love for coding.",
	},
	{
		year: 2021,
		title: "Digital Arts Degree",
		summary:
			"Accepted by the University of Florida to pursue a second bachelor's in Digital Arts and Science and started attending in August 2021.",
		image: {
			src: "/images/timeline/uf-watercolor.png",
			alt: "Watercolor of UF/'s Century Tower",
			dimensions: { height: 200, width: 358 },
			className: "opacity-60 w-auto",
		},
	},
	{
		year: 2022,
		title: "Lead Developer",
		summary:
			"After working for as a BA for four years, I decided to leave Mercury Development and accepted a new role working as the full-time lead developer for a telecomunications company, Sin Pin.",
		image: {
			src: "/images/timeline/sinpin.png",
			alt: "Sin Pin Logo",
			dimensions: { height: 20, width: 150 },
			className: "h-auto",
		},
	},
];

export const translateClass: { [key: string]: string } = {
	"0": "-translate-y-0",
	"100": "-translate-y-100",
	"200": "-translate-y-200",
	"300": "-translate-y-300",
	"400": "-translate-y-400",
	"500": "-translate-y-500",
	"600": "-translate-y-600",
	"700": "-translate-y-700",
	"800": "-translate-y-800",
	"900": "-translate-y-900",
	"1000": "-translate-y-1000",
	"1100": "-translate-y-1100",
	"1200": "-translate-y-1200",
};
