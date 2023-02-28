import React from "react";
import { Image } from "./timeline";
import AfterEffectsIcon from "../../components/about/tools/after-effects";
import BalsamiqIcon from "../../components/about/tools/balsamiq";
import ConfluenceIcon from "../../components/about/tools/confluence";
import AsanaIcon from "../../components/about/tools/asana";
import BootstrapIcon from "../../components/about/tools/bootstrap";
import CPlusPlusIcon from "../../components/about/tools/cplusplus";
import CssIcon from "../../components/about/tools/css-3";
import FirebaseIcon from "../../components/about/tools/firebase";
import FigmaIcon from "../../components/about/tools/figma";
import GithubIcon from "../../components/about/tools/github";
import GaeIcon from "../../components/about/tools/gae";
import GoogleIcon from "../../components/about/tools/google";
import HtmlIcon from "../../components/about/tools/html";
import IllustratorIcon from "../../components/about/tools/illustrator";
import JsIcon2 from "../../components/about/tools/javascript-2";
import InvisionIcon from "../../components/about/tools/invision";
import JestIcon from "../../components/about/tools/jest";
import JiraIcon from "../../components/about/tools/jira";
import MuiIcon from "../../components/about/tools/material-ui";
import MayaIcon from "../../components/about/tools/maya";
import MsOfficeIcon from "../../components/about/tools/microsoft-office";
import MiroIcon from "../../components/about/tools/miro";
import MongoIcon from "../../components/about/tools/mongodb";
import MySqlIcon from "../../components/about/tools/mysql";
import NextIcon from "../../components/about/tools/nextjs";
import NodeIcon from "../../components/about/tools/node";
import PhotoshopIcon from "../../components/about/tools/photoshop";
import PostgreIcon from "../../components/about/tools/postgresql";
import PostmanIcon from "../../components/about/tools/postman";
import PrismaIcon from "../../components/about/tools/prisma";
import ReactIcon from "../../components/about/tools/react";
import ReduxIcon from "../../components/about/tools/redux";
import SassIcon from "../../components/about/tools/sass";
import SketchIcon from "../../components/about/tools/sketch";
import SublimeIcon from "../../components/about/tools/sublime-text";
import TailwindIcon from "../../components/about/tools/tailwind";
import TrelloIcon from "../../components/about/tools/trello";
import TypescriptIcon from "../../components/about/tools/typescript";
import UnityIcon from "../../components/about/tools/unity";
import VsCodeIcon from "../../components/about/tools/vscode";
import XdIcon from "../../components/about/tools/xd";
import ZeplinIcon from "../../components/about/tools/zeplin";
import GraphQlIcon from "../../components/about/tools/graphql";

interface Technologies {
	items: TechItem[];
	categories: { [key: string]: string[] };
}

export interface TechItem {
	name: string;
	category: string;
	type: string[];
	image?: Image;
	component: Function;
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
				? {
						...acc,
						[curr.category]: acc?.[curr?.category]
							? new Set([...acc?.[curr?.category], ...curr.type])
							: [...curr.type],
				  }
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
		component: AfterEffectsIcon,
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
		component: AsanaIcon,
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
		component: BalsamiqIcon,
	},
	{
		name: "Bootstrap",
		category: "Dev",
		type: ["CSS", "Framework"],
		image: {
			src: "/images/about/tech/bootstrap.svg",
			alt: "Bootstrap Logo",
			dimensions: {
				height: 56,
				width: 56,
			},
		},
		component: BootstrapIcon,
	},
	{
		name: "C++",
		category: "Dev",
		type: ["Language"],
		image: {
			src: "/images/about/tech/cplusplus.svg",
			alt: "C++ Language Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: CPlusPlusIcon,
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
		component: ConfluenceIcon,
	},
	{
		name: "CSS",
		category: "Dev",
		type: ["Language"],
		image: {
			src: "/images/about/tech/css-3.svg",
			alt: "CSS-3 Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: CssIcon,
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
		component: FigmaIcon,
	},
	{
		name: "Firebase",
		category: "Dev",
		type: ["Application"],
		image: {
			src: "/images/about/tech/firebase.svg",
			alt: "Firebase Logo",
			dimensions: {
				height: 42,
				width: 42,
			},
		},
		component: FirebaseIcon,
	},
	{
		name: "Github",
		category: "Dev",
		type: ["DevOps", "Project Management", "CI"],
		image: {
			src: "/images/about/tech/github.svg",
			alt: "Github Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: GithubIcon,
	},
	{
		name: "Google App Engine",
		category: "Dev",
		type: ["Application"],
		image: {
			src: "/images/about/tech/gae.svg",
			alt: "Google App Engine Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: GaeIcon,
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
		component: GoogleIcon,
	},
	{
		name: "GraphQL",
		category: "Dev",
		type: ["Language", "Database", "Query"],
		image: {
			src: "/images/about/tech/graphql.svg",
			alt: "GraphQL Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
		component: GraphQlIcon,
	},
	{
		name: "HTML",
		category: "Dev",
		type: ["Language"],
		image: {
			src: "/images/about/tech/html.svg",
			alt: "HTML Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: HtmlIcon,
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
		component: IllustratorIcon,
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
		component: InvisionIcon,
	},
	{
		name: "JavaScript",
		category: "Dev",
		type: ["Language"],
		image: {
			src: "/images/about/tech/javascript-2.svg",
			alt: "JavaScript Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: JsIcon2,
	},
	{
		name: "Jest",
		category: "Dev",
		type: ["Framework", "Testing"],
		image: {
			src: "/images/about/tech/jest.svg",
			alt: "Jest Logo",
			dimensions: {
				height: 44,
				width: 44,
			},
		},
		component: JestIcon,
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
		component: JiraIcon,
	},
	{
		name: "Material UI",
		category: "Dev",
		type: ["Library", "CSS"],
		image: {
			src: "/images/about/tech/material-ui.svg",
			alt: "Material UI Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: MuiIcon,
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
		component: MayaIcon,
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
		component: MsOfficeIcon,
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
		component: MiroIcon,
	},
	{
		name: "MongoDB",
		category: "Dev",
		type: ["Database"],
		image: {
			src: "/images/about/tech/mongodb.svg",
			alt: "MongoDB Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: MongoIcon,
	},
	{
		name: "MySQL",
		category: "Dev",
		type: ["Database"],
		image: {
			src: "/images/about/tech/mysql.svg",
			alt: "MySQL Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: MySqlIcon,
	},
	{
		name: "NextJS",
		category: "Dev",
		type: ["Framework", "React"],
		image: {
			src: "/images/about/tech/nextjs.svg",
			alt: "NextJS Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: NextIcon,
	},
	{
		name: "Node.js",
		category: "Dev",
		type: ["Platform", "Engine"],
		image: {
			src: "/images/about/tech/node.svg",
			alt: "Node.js Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: NodeIcon,
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
		component: PhotoshopIcon,
	},
	{
		name: "PostgreSQL",
		category: "Dev",
		type: ["Database"],
		image: {
			src: "/images/about/tech/postgresql.svg",
			alt: "PostgreSQL Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: PostgreIcon,
	},
	{
		name: "Postman",
		category: "Dev",
		type: ["Platform", "API"],
		image: {
			src: "/images/about/tech/postman.svg",
			alt: "Postman Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
		component: PostmanIcon,
	},
	{
		name: "Prisma",
		category: "Dev",
		type: ["Database", "ORM"],
		image: {
			src: "/images/about/tech/prisma.svg",
			alt: "Prisma Logo",
			dimensions: {
				height: 40,
				width: 40,
			},
		},
		component: PrismaIcon,
	},
	{
		name: "React",
		category: "Dev",
		type: ["Library", "JavaScript"],
		image: {
			src: "/images/about/tech/react.svg",
			alt: "React Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: ReactIcon,
	},
	{
		name: "Redux",
		category: "Dev",
		type: ["Library", "JavaScript"],
		image: {
			src: "/images/about/tech/redux.svg",
			alt: "Redux Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: ReduxIcon,
	},
	{
		name: "Sass/SCSS",
		category: "Dev",
		type: ["Language", "CSS"],
		image: {
			src: "/images/about/tech/sass.svg",
			alt: "Sass Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: SassIcon,
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
		component: SketchIcon,
	},
	{
		name: "Sublime Text",
		category: "Dev",
		type: ["Editor"],
		image: {
			src: "/images/about/tech/sublime-text.svg",
			alt: "Sublime Text Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: SublimeIcon,
	},
	{
		name: "Tailwind CSS",
		category: "Dev",
		type: ["Framework", "CSS"],
		image: {
			src: "/images/about/tech/tailwind.svg",
			alt: "Tailwind Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: TailwindIcon,
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
		component: TrelloIcon,
	},
	{
		name: "TypeScript",
		category: "Dev",
		type: ["Language", "JavaScript"],
		image: {
			src: "/images/about/tech/typescript.svg",
			alt: "TypeScript Logo",
			dimensions: {
				height: 50,
				width: 50,
			},
		},
		component: TypescriptIcon,
	},
	{
		name: "Unity",
		category: "Dev",
		type: ["Platform", "Game", "Engine"],
		image: {
			src: "/images/about/tech/unity.svg",
			alt: "Unity Logo",
			dimensions: {
				height: 54,
				width: 54,
			},
		},
		component: UnityIcon,
	},
	{
		name: "VSCode",
		category: "Dev",
		type: ["Editor"],
		image: {
			src: "/images/about/tech/vscode.svg",
			alt: "VSCode Logo",
			dimensions: {
				height: 46,
				width: 46,
			},
		},
		component: VsCodeIcon,
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
		component: XdIcon,
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
		component: ZeplinIcon,
	},
];

export const technologies = new Technologies(tech);

export const skills: SkillItem[] = [
	{
		category: "General Skills",
		skills: [
			"Problem Solving",
			"Collaboration",
			"Communication",
			"Logical Thinking",
			"Creative Thinking",
			"Adaptability",
			"Listening",
		],
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
		skills: [
			"Animation",
			"Graphic Design",
			"Illustration",
			"Photo Editing",
			"Video Production",
			"Print Production",
			"3D Modeling",
		],
		classes: "max-w-[200px] block",
	},
];
