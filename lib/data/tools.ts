import { Image } from "./timeline";

interface Technologies {
	items: TechItem[];
	categories: { [key: string]: string[] };
}

export interface TechItem {
	name: string;
	category: string;
	type: string[];
	image?: Image;
}

export interface SkillItem {
	category: string;
	skills: string[];
	classes: string;
}

class Technologies {
	constructor(items: TechItem[]) {
		this.items = items;
		this.categories = items.reduce((acc: any, curr) => {
			return curr?.category
				? { ...acc, [curr.category]: acc?.[curr?.category] ? new Set([...acc?.[curr?.category], ...curr.type]) : [...curr.type] }
				: curr;
		}, {});
	}
}

const tech: TechItem[] = [
	{
		name: "Adobe After Effects",
		category: "Design",
		type: ["Motion Design", "Animation", "Video Production"],
		image: {
			src: "/images/about/tech/after-effects.svg",
			alt: "Adobe After Effects Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Asana",
		category: "Business",
		type: ["Collaboration", "Project Management"],
		image: {
			src: "/images/about/tech/asana.svg",
			alt: "Asana Logo",
			dimensions: {
				height: 60,
				width: 60,
			},
		},
	},
	{
		name: "Balsamiq",
		category: "Design",
		type: ["Wireframing"],
		image: {
			src: "/images/about/tech/balsamiq.svg",
			alt: "Balsamiq Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Bootstrap",
		category: "Code",
		type: ["CSS", "Framework"],
		image: {
			src: "/images/about/tech/bootstrap.svg",
			alt: "Bootstrap Logo",
			dimensions: {
				height: 56,
				width: 56,
			},
		},
	},
	{
		name: "C++",
		category: "Code",
		type: ["Language"],
		image: {
			src: "/images/about/tech/cplusplus.svg",
			alt: "C++ Language Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Confluence",
		category: "Business",
		type: ["Documentation", "Collaboration"],
		image: {
			src: "/images/about/tech/confluence.svg",
			alt: "Confluence Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "CSS",
		category: "Code",
		type: ["Language"],
		image: {
			src: "/images/about/tech/css-3.svg",
			alt: "CSS-3 Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Figma",
		category: "Design",
		type: ["UI/UX", "Collaboration"],
		image: {
			src: "/images/about/tech/figma.svg",
			alt: "Figma Logo",
			dimensions: {
				height: 38,
				width: 38,
			},
		},
	},
	{
		name: "Firebase",
		category: "Code",
		type: ["Application"],
		image: {
			src: "/images/about/tech/firebase.svg",
			alt: "Firebase Logo",
			dimensions: {
				height: 42,
				width: 42,
			},
		},
	},
	{
		name: "Github",
		category: "Code",
		type: ["DevOps", "Project Management", "CI"],
		image: {
			src: "/images/about/tech/github.svg",
			alt: "Github Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Google App Engine",
		category: "Code",
		type: ["Application"],
		image: {
			src: "/images/about/tech/gae.svg",
			alt: "Google App Engine Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Google Workspace",
		category: "Business",
		type: ["Productivity"],
		image: {
			src: "/images/about/tech/google.svg",
			alt: "Google Logo",
			dimensions: {
				height: 46,
				width: 46,
			},
		},
	},
	{
		name: "GraphQL",
		category: "Code",
		type: ["Language", "Database", "Query"],
		image: {
			src: "/images/about/tech/graphql.svg",
			alt: "GraphQL Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
	},
	{
		name: "HTML",
		category: "Code",
		type: ["Language"],
		image: {
			src: "/images/about/tech/html.svg",
			alt: "HTML Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Adobe Illustrator",
		category: "Design",
		type: ["2D", "Vector", "Illustration"],
		image: {
			src: "/images/about/tech/illustrator.svg",
			alt: "Adobe Illustrator Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "InVision",
		category: "Design",
		type: ["UI/UX", "Collaboration"],
		image: {
			src: "/images/about/tech/invision.svg",
			alt: "InVision Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "JavaScript",
		category: "Code",
		type: ["Language"],
		image: {
			src: "/images/about/tech/javascript-2.svg",
			alt: "JavaScript Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Jest",
		category: "Code",
		type: ["Framework", "Testing"],
		image: {
			src: "/images/about/tech/jest.svg",
			alt: "Jest Logo",
			dimensions: {
				height: 44,
				width: 44,
			},
		},
	},
	{
		name: "Jira",
		category: "Business",
		type: ["Project Management", "Agile"],
		image: {
			src: "/images/about/tech/jira.svg",
			alt: "Jira Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Material UI",
		category: "Code",
		type: ["Library", "CSS"],
		image: {
			src: "/images/about/tech/material-ui.svg",
			alt: "Material UI Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Maya",
		category: "Design",
		type: ["3D", "Modeling", "Animation"],
		image: {
			src: "/images/about/tech/maya.svg",
			alt: "Redux Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Microsoft Office",
		category: "Business",
		type: ["Productivity"],
		image: {
			src: "/images/about/tech/microsoft-office.svg",
			alt: "Redux Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Miro",
		category: "Design",
		type: ["Diagramming", "Collaboration"],
		image: {
			src: "/images/about/tech/miro.svg",
			alt: "Miro Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "MongoDB",
		category: "Code",
		type: ["Database"],
		image: {
			src: "/images/about/tech/mongodb.svg",
			alt: "MongoDB Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "MySQL",
		category: "Code",
		type: ["Database"],
		image: {
			src: "/images/about/tech/mysql.svg",
			alt: "MySQL Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "NextJS",
		category: "Code",
		type: ["Framework", "React"],
		image: {
			src: "/images/about/tech/nextjs.svg",
			alt: "NextJS Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Node.js",
		category: "Code",
		type: ["Platform", "Engine"],
		image: {
			src: "/images/about/tech/node.svg",
			alt: "Node.js Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Adobe Photoshop",
		category: "Design",
		type: ["Photography", "2D", "Editing"],
		image: {
			src: "/images/about/tech/photoshop.svg",
			alt: "Adobe Photoshop Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "PostgreSQL",
		category: "Code",
		type: ["Database"],
		image: {
			src: "/images/about/tech/postgresql.svg",
			alt: "PostgreSQL Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Postman",
		category: "Code",
		type: ["Platform", "API"],
		image: {
			src: "/images/about/tech/postman.svg",
			alt: "Postman Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
	},
	{
		name: "Prisma",
		category: "Code",
		type: ["Database", "ORM"],
		image: {
			src: "/images/about/tech/prisma.svg",
			alt: "Prisma Logo",
			dimensions: {
				height: 40,
				width: 40,
			},
		},
	},
	{
		name: "React",
		category: "Code",
		type: ["Library", "JavaScript"],
		image: {
			src: "/images/about/tech/react.svg",
			alt: "React Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Redux",
		category: "Code",
		type: ["Library", "JavaScript"],
		image: {
			src: "/images/about/tech/redux.svg",
			alt: "Redux Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Sass/SCSS",
		category: "Code",
		type: ["Language", "CSS"],
		image: {
			src: "/images/about/tech/sass.svg",
			alt: "Sass Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Sketch",
		category: "Design",
		type: ["UI/UX", "Vector"],
		image: {
			src: "/images/about/tech/sketch.svg",
			alt: "Sketch Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Sublime Text",
		category: "Code",
		type: ["Editor"],
		image: {
			src: "/images/about/tech/sublime-text.svg",
			alt: "Sublime Text Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Tailwind CSS",
		category: "Code",
		type: ["Framework", "CSS"],
		image: {
			src: "/images/about/tech/tailwind.svg",
			alt: "Tailwind Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Trello",
		category: "Business",
		type: ["Collaboration", "Kanban"],
		image: {
			src: "/images/about/tech/trello.svg",
			alt: "Trello Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "TypeScript",
		category: "Code",
		type: ["Language", "JavaScript"],
		image: {
			src: "/images/about/tech/typescript.svg",
			alt: "TypeScript Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Unity",
		category: "Code",
		type: ["Platform", "Game", "Engine"],
		image: {
			src: "/images/about/tech/unity.svg",
			alt: "Unity Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
	},
	{
		name: "VSCode",
		category: "Code",
		type: ["Editor"],
		image: {
			src: "/images/about/tech/vscode.svg",
			alt: "VSCode Logo",
			dimensions: {
				height: 46,
				width: 46,
			},
		},
	},
	{
		name: "Adobe XD",
		category: "Design",
		type: ["UI/UX"],
		image: {
			src: "/images/about/tech/xd.svg",
			alt: "Adobe XD Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
	{
		name: "Zeplin",
		category: "Design",
		type: ["Collaboration"],
		image: {
			src: "/images/about/tech/zeplin.svg",
			alt: "Zeplin.io Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
	},
];

export const technologies = new Technologies(tech);

export const skills: SkillItem[] = [
	{
		category: "General Skills",
		skills: ["Problem solving", "Collaboration", "communication", "Logical Thinking", "Creative Thinking", "Adaptability", "Listening"],
		classes: "max-w-[180px]",
	},
	{
		category: "Programming Languages",
		skills: ["C++", "C#", "CSS", "HTML", "GraphQL", "JavaScript", "TypeScript"],
		classes: "max-w-[180px]",
	},
	{
		category: "Business Analysis & Product Design",
		skills: [
			"Diagramming",
			"Ideation",
			"Interaction Design",
			"Prototyping",
			"Requirements Analysis",
			"Strategy",
			"System Thinking",
			"User Flows & User Stories",
			"User Interface Design",
			"User Experience Design",
			"User Testing",
			"User & Market Research",
			"Wireframing",
			"Writing & Documentation",
		],
		classes: "max-w-[520px] -ml-20",
	},
	{
		category: "Digital Arts & Content Creation",
		skills: ["Animation", "Graphic Design", "Illustration", "Photo Editing", "Video Production", "Print Production", "3D Modeling"],
		classes: "max-w-[200px] block",
	},
];
