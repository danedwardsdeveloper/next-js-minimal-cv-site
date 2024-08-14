export interface CopyTypes {
	name: string;
	title: string;
	summary: string;
	portfolio: PortfolioPiece[];
	workHistory: WorkHistoryItem[];
	skills: Skills;
	education: EducationItem[];
	contact: Contact;
	copyright: string;
	metadata: Metadata;
}

export interface PortfolioPiece {
	name: string;
	githubLink: string;
	link: string;
	description: string;
	details: string[];
}

export interface WorkHistoryItem {
	title: string;
	company: string;
	period: string;
	responsibilities: string[];
}

interface EducationItem {
	institution: string;
	period: string;
	program?: string;
	degree?: string;
}

interface Skills {
	[key: string]: string[];
}

interface Contact {
	email: boolean;
}

interface Metadata {
	title: string;
	description: string;
	keywords: string[];
}

export type ThemeName = 'Default' | 'Elegant' | '90s' | 'Vibrant' | 'Chaotic';

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
