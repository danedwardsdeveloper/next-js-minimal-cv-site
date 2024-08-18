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
	email: Email;
}

interface Email {
	name: string;
	plainValue: string;
	encodedValue: string;
	copyMessage: string;
	display: boolean;
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

export interface Theme {
	name: ThemeOptions;
	fontFamily: string;
	colors: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
	};
}

export type ThemeOptions = 'light' | 'dark';
