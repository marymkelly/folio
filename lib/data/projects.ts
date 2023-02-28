interface DateMY {
	month: string | number;
	year: number;
}

interface DateRangeMY {
	start: {
		month: string;
		year: number;
	};
	end?: {
		month?: string;
		year?: number;
	};
}

export interface ProjectProps {
	id: string;
	name: string;
	role: string | string[];
	platforms?: string | string[];
	industry?: string;
	dates: {
		start: {
			month: string;
			year: number;
		};
		end?: {
			month?: string;
			year?: number;
		};
	};
	type: string;
	href: string;
	technologies?: string | string[];
	preview?: {
		divide: string;
		colors: {
			background: string;
			overlay: string;
		};
		image: {
			src: string;
			alt: string;
			dimensions?: {
				height: number;
				width: number;
			};
			classNames?: string;
		};
	};
	url?: {
		live?: string;
		github?: string;
		design?: string;
	};
}

export function getPreviewDateString<T extends DateRangeMY>(dates: T): string {
	if (dates?.end && dates.end?.year && dates.end.year === dates.start.year) {
		return dates.start.month === dates.end.month
			? `${dates.end.month} ${dates.end.year}`
			: `${dates.start.month} - ${dates.end.month} ${dates.end.year}`;
	} else if (!dates?.end?.year && dates.end?.month?.toLowerCase() === "current") {
		return `${dates.start.month} ${dates.start.year} - ${dates.end.month}`;
	} else {
		return `${dates.start.month} ${dates.start.year}`;
	}
}

export const projects: ProjectProps[] = [
	{
		id: "sinpin",
		name: "Sin Pin",
		role: ["Lead Software Developer", "Interface Designer"],
		type: "Case Study",
		platforms: "Web",
		industry: "Telecommunications",
		dates: {
			start: { month: "April", year: 2022 },
			end: { month: "Current" },
		},
		href: "/projects/sinpin",
		preview: {
			divide: "6/6",
			colors: {
				background: "#CF0008",
				overlay: "#E51B22",
			},
			image: {
				src: "/images/projects/sinpin/intro.png",
				alt: "Sinpin Dashboard Screenshot",
				dimensions: {
					width: 2260,
					height: 1316,
				},
				classNames: "mt-6 px-6 md:px-0",
			},
		},
	},
	{
		id: "galactor",
		name: "Galactor",
		role: ["Developer", "Designer"],
		type: "ReactJS",
		platforms: "Web",
		technologies: [
			"React.js",
			"Node.js",
			"Tailwind CSS",
			"Globe.gl",
			"Three.js",
			"Aladin API",
			"Skymap API",
			"Google Maps",
		],
		dates: {
			start: { month: "December", year: 2022 },
			end: { month: "December", year: 2022 },
		},
		href: "/projects/galactor",
		preview: {
			divide: "6/6",
			colors: {
				background: "#092636",
				overlay: "#1C3E51",
			},
			image: {
				src: "/images/projects/galactor/preview.png",
				alt: "Galactor III Screenshot",
				dimensions: {
					width: 1104,
					height: 640,
				},
				classNames: "border-slate-200 lg:border-[4px] mt-6 px-6 md:px-0",
			},
		},
		url: {
			live: "https://galactor.marykelly.tech",
			github: "https://github.com/marymkelly/galactor-v3",
		},
	},
	{
		id: "parrot-social",
		name: "Parrot Social Media",
		role: ["Lead Business Analyst", "User Experience Design"],
		type: "Case Study",
		platforms: "iOS",
		industry: "Social Media",
		href: "/projects/parrot-social",
		dates: {
			start: { month: "September", year: 2020 },
			end: { month: "October", year: 2020 },
		},
		preview: {
			divide: "7/5",
			colors: {
				background: "#06D378",
				overlay: "#00C86F",
			},
			image: {
				src: "/images/projects/parrot/intro.png",
				alt: "Parrot Group Screen",
				dimensions: {
					width: 1604,
					height: 1595,
				},
				classNames: "mt-8 md:mt-36",
			},
		},
		url: {
			live: "https://apps.apple.com/us/app/parrot-social-media/id1581330910",
		},
	},
];

export interface Article {
	title: string;
	author?: string;
	date?: DateMY;
	href: string;
}
export const articles: Article[] = [
	{
		title: "What is a Funtional Requirements Document (FRD)?",
		author: "Mary Kelly",
		date: {
			month: "November",
			year: 2022,
		},
		href: "/words/what-are-frds",
	},
	{
		title: "What is a Work Breakdown Structure (WBS)?",
		author: "Mary Kelly",
		date: {
			month: "October",
			year: 2022,
		},
		href: "/words/what-is-a-wbs",
	},
];
