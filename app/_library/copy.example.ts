import type { CopyTypes } from '../_types/types';

export const copy: CopyTypes = {
	name: 'Jane Doe',
	title: 'Full-stack JavaScript Developer',
	summary:
		'Passionate about creating efficient and user-friendly web applications. Experienced in modern JavaScript frameworks and back-end technologies. Strong problem-solving skills and a keen eye for design.',

	portfolio: [
		{
			name: 'Project Alpha',
			githubLink: 'https://github.com/janedoe/project-alpha',
			link: 'https://project-alpha.example.com',
			description: 'A React-based task management application',
			details: [
				'Implemented drag-and-drop functionality for task organization',
				'Integrated with a RESTful API for data persistence',
				'Utilized Redux for state management',
			],
		},
		{
			name: 'Beta Blog',
			githubLink: 'https://github.com/janedoe/beta-blog',
			link: 'https://beta-blog.example.com',
			description: 'A full-stack blog platform using Node.js and Express',
			details: [
				'Developed a custom CMS for content management',
				'Implemented user authentication and authorization',
				'Optimized database queries for improved performance',
			],
		},
	],

	workHistory: [
		{
			title: 'Senior Front-end Developer',
			company: 'Tech Innovations Inc.',
			period: '2020-2023',
			responsibilities: [
				'Led a team of 5 developers in creating responsive web applications',
				'Implemented best practices for code quality and performance',
				'Mentored junior developers and conducted code reviews',
			],
		},
		{
			title: 'Full-stack Developer',
			company: 'WebSolutions Co.',
			period: '2017-2020',
			responsibilities: [
				'Developed and maintained multiple client websites',
				'Collaborated with design team to implement UI/UX improvements',
				'Integrated third-party APIs and services',
			],
		},
	],

	skills: {
		'Front-End Skills': [
			'HTML5',
			'CSS3',
			'JavaScript (ES6+)',
			'React',
			'Vue.js',
			'Webpack',
			'Responsive Design',
		],
		'Back-End Skills': [
			'Node.js',
			'Express',
			'Python',
			'Django',
			'RESTful APIs',
			'GraphQL',
		],
		'Database Skills': ['MongoDB', 'PostgreSQL', 'MySQL'],
	},

	education: {
		sectionTitle: 'Education',
		educationItems: [
			{
				institution: 'University of Technology',
				period: '2013-2017',
				course: 'Bachelor of Science in Computer Science',
			},
			{
				institution: 'Code Academy',
				period: '2018',
				course: 'Advanced JavaScript Certification',
			},
		],
	},

	contact: {
		sectionTitle: 'Contact',
		contactItems: [
			{
				name: 'email',
				value: 'jane.doe@example.com',
				display: true,
			},
			{
				name: 'GitHub',
				value: 'https://github.com/janedoe',
				display: true,
			},
			{
				name: 'Website',
				value: 'https://janedoe.dev',
				display: true,
			},
			{
				name: 'LinkedIn',
				value: 'https://www.linkedin.com/in/janedoe',
				display: false,
			},
		],
	},

	copyright: '© Jane Doe, 2024',

	metadata: {
		title: 'Jane Doe | Full-stack JavaScript Developer',
		description:
			'Portfolio and resume of Jane Doe, an experienced full-stack JavaScript developer specializing in React and Node.js.',
		keywords: [
			'web developer',
			'full-stack',
			'JavaScript',
			'React',
			'Node.js',
			'Express',
			'MongoDB',
			'Vue.js',
		],
	},
};
