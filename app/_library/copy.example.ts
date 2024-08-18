import type { CopyTypes } from '../types';

export const copy: CopyTypes = {
	name: 'Example Name',
	title: 'Example Title',
	summary: 'This is an example summary. Replace with your actual summary.',

	portfolio: [
		{
			name: 'Example Project',
			githubLink: 'https://github.com/example/project',
			link: 'https://example-project.com',
			description: 'This is an example project description',
			details: ['Example detail 1', 'Example detail 2', 'Example detail 3'],
		},
		// Add more example projects as needed
	],

	workHistory: [
		{
			title: 'Example Job Title',
			company: 'Example Company',
			period: 'YYYY-YYYY',
			responsibilities: [
				'Example responsibility 1',
				'Example responsibility 2',
				'Example responsibility 3',
			],
		},
		// Add more example work history items as needed
	],

	skills: {
		'Example Skill Category 1': [
			'Example Skill 1',
			'Example Skill 2',
			'Example Skill 3',
		],
		'Example Skill Category 2': [
			'Example Skill 4',
			'Example Skill 5',
			'Example Skill 6',
		],
		'Example Skill Category 3': [
			'Example Skill 7',
			'Example Skill 8',
			'Example Skill 9',
		],
	},

	education: {
		sectionTitle: 'Education',
		educationItems: [
			{
				institution: 'Example Institution',
				period: 'YYYY-YYYY',
				course: 'Example Course',
			},
			// Add more example education items as needed
		],
	},

	contact: {
		sectionTitle: 'Contact',
		email: {
			name: 'Email',
			plainValue: 'example@example.com',
			// Encode your email address at https://www.base64encode.org/
			encodedValue: 'ZXhhbXBsZUBleGFtcGxlLmNvbQ==',
			copyMessage: 'Copied to clipboard',
			display: true,
		},
		contactItems: [
			{
				name: 'GitHub',
				value: 'https://github.com/example',
				display: true,
			},
			{
				name: 'Website',
				value: 'https://example.com',
				display: true,
			},
			{
				name: 'LinkedIn',
				value: 'https://www.linkedin.com/in/example',
				display: true,
			},
		],
	},

	copyright: '© Example Name, YYYY',

	metadata: {
		title: 'Example Name | Example Title',
		description: 'Example description for metadata.',
		keywords: ['example', 'keywords', 'for', 'metadata'],
	},
};
