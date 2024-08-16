import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS } from 'react-dom/client';

export interface CopyTypes {
	name: string;
	title: string;
	summary: string;
	portfolio: PortfolioPiece[];
	workHistory: WorkHistoryItem[];
	skills: Skills;
	education: Education;
	contact: Contact;
	copyright: string;
	metadata: Metadata;
}

interface PortfolioPiece {
	name: string;
	githubLink: string;
	link: string;
	description: string;
	details: string[];
}

interface WorkHistoryItem {
	title: string;
	company: string;
	period: string;
	responsibilities: string[];
}

interface Education {
	sectionTitle: string;
	educationItems: EducationItem[];
}

interface EducationItem {
	institution: string;
	period: string;
	course: string;
}

interface Skills {
	[key: string]: string[];
}

interface Contact {
	sectionTitle: string;
	contactItems: ContactItem[];
}

interface ContactItem {
	name: string;
	value: string;
	display: boolean;
}

interface Metadata {
	title: string;
	description: string;
	keywords: string[];
}

type ThemeName = 'Default' | 'Elegant' | '90s' | 'Vibrant' | 'Chaotic';

export interface Theme {
	name: ThemeName;
	fontFamily: string;
	colors: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
	};
}
