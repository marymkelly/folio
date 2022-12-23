import GaleLogo from "../../components/about/clients/Gale";
import MonsterEnergyLogo from "../../components/about/clients/Monster";
import ParrotLogo from "../../components/about/clients/Parrot";
import PrincessLogo from "../../components/about/clients/Princess";

interface ExperienceItem {
	role: string;
	company: string;
	dates: {
		start: number | string;
		end?: number | string;
	};
}

interface EducationItem {
	degree: {
		major: string;
		minor?: string;
	};
	institution: string;
	dates: {
		start: number | string;
		end?: number | string;
	};
}

const experience: ExperienceItem[] = [
	{
		role: "Lead Web Developer",
		company: "Sin Pin",
		dates: {
			start: 2022,
			end: "Current",
		},
	},
	{
		role: "Mercury Development",
		company: "Business Analyst",
		dates: {
			start: 2018,
			end: 2022,
		},
	},
	{
		role: "Web Application Developer",
		company: "National High Magnetic Laboratory",
		dates: {
			start: 2016,
			end: 2016,
		},
	},
	{
		role: "Lead Web Developer",
		company: "Student Opportunity Center",
		dates: {
			start: 2014,
			end: 2016,
		},
	},
];
const education: EducationItem[] = [
	{
		degree: {
			major: "Digital Arts & Sciences",
		},
		institution: "University of Florida",
		dates: {
			start: 2021,
			end: "Current",
		},
	},
	{
		degree: {
			major: "Sociology",
			minor: "Psychology",
		},
		institution: "Florida State University",
		dates: {
			start: 2011,
			end: 2015,
		},
	},
];

const clients = [
	{
		name: "Monster Energy",
		component: MonsterEnergyLogo,
		height: 60,
		width: 60,
	},
	{
		name: "Princess Cruises",
		component: PrincessLogo,
		height: 60,
		width: 72,
	},
	{
		name: "Gale Healthcare",
		component: GaleLogo,
		height: 60,
		width: 60,
	},
	{
		name: "Parrot Social Media",
		component: ParrotLogo,
		height: 60,
		width: 60,
	},
];

export { experience, education, clients };
