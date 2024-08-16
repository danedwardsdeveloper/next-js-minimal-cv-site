import type { CopyTypes } from '../_types/types';

export const copy: CopyTypes = {
	name: 'Dan Edwards',
	title: 'Full-stack TypeScript developer',
	summary:
		'Specializing in intuitive, responsive, and high-performance websites. Leverages cutting-edge technologies to deliver professional, maintainable code. Known for high standards, strong collaboration skills, and continuous learning. Currently developing a MERN (MongoDB, Express, React and Node.js) eCommerce bookshop.',

	portfolio: [
		{
			name: 'Array of Sunshine',
			githubLink:
				'https://github.com/danedwardsdeveloper/React-Redux-Markdown-Blog',
			link: 'https://www.arrayofsunshine.co.uk/',
			description: 'Personal coding blog built with React, Redux, and Sass',
			details: [
				'Implemented serverless architecture for easy maintenance and rapid deployment',
				'Developed custom markdown parsing script with built-in testing',
				'Created syntax-highlighted code blocks with copy functionality',
			],
		},
		{
			name: 'Metacritic 100',
			githubLink: 'https://github.com/danedwardsdeveloper/metacritic100',
			link: 'https://metacritic100.com',
			description:
				"Full-stack web app for tracking viewed films from Metacritic's top 100 list using SvelteKit, TypeScript, and MongoDB",
			details: [
				'Designed responsive UI with Tailwind CSS',
				'Implemented user authentication using Passport, Bcrypt, and JWT',
				'Integrated Express and Axios for efficient data handling',
				'Deployed front-end on Netlify and back-end on Heroku',
			],
		},
		{
			name: 'Dan Digresses',
			githubLink:
				'https://github.com/danedwardsdeveloper/Custom-WordPress-Theme',
			link: 'https://dandigresses.com',
			description:
				'Custom WordPress theme inspired by TikTok Creator Academy blog',
			details: [
				'Developed mobile-first design using PHP and Less',
				'Optimised performance with JetPack Boost and Yoast SEO',
				'Achieved exceptional Lighthouse scores (Performance: 100, Accessibility: 96, Best Practices: 100, SEO: 100)',
			],
		},
		{
			name: 'Personal CV Website',
			githubLink:
				'https://github.com/danedwardsdeveloper/Dan-Edwards-Developer',
			link: 'https://danedwardsdeveloper.com',
			description: 'Online CV showcasing web development skills',
			details: [
				'Crafted flexible layout using BEM-style CSS',
				'Incorporated CSS animations for enhanced user experience',
				'Optimised for performance across various devices and browsers',
			],
		},
	],

	workHistory: [
		{
			title: 'SEO Writer',
			company: 'Freelance',
			period: '2022-2023',
			responsibilities: [
				'Crafted compelling, keyword-optimised web content to add value, drive traffic, and boost sales, mainly on the topics of music and technology',
				'Demonstrated excellent understanding of on-page SEO best practices',
			],
		},
		{
			title: 'Sub-principal cellist and senior music librarian',
			company: "The Countess of Wessex's String Orchestra, British Army",
			period: '2015-2022',
			responsibilities: [
				'Performed classical background music for investitures at Buckingham Palace, as well as other royal and state events',
				'Managed a team of four as senior music librarian, demonstrating fantastic organisational skills and great teamwork',
				'Collaborated closely with fellow musicians in an elite ensemble, ensuring precision and cohesion in rehearsals and performances',
			],
		},
	],

	skills: {
		'Front-End Skills': [
			'Semantic HTML 5',
			'CSS 3, Less, Sass & BEM',
			'JavaScript ES6 & TypeScript',
			'Asynchronous programming',
			'Mobile-first & responsive design',
			'React (including Router, Helmet & Redux)',
			'Vue, Svelte & SvelteKit',
			'Custom WordPress themes & child themes',
			'Gulp, Webpack & Vite',
			'Bootstrap, Tailwind & jQuery',
			'Accessibility',
			'End-to-end testing, Selenium & Cypress',
		],
		'Back-End Skills': [
			'Node.js & Express',
			'RESTful API development',
			'PostgreSQL, MySQL, SQLite & MongoDB',
			'Authentication (Passport, Bcrypt & JWT)',
			'Deployment (Heroku, Netlify, Vercel & Infinity Free)',
			'MVC architecture',
			'PHP',
			'Postman',
		],
		'Additional Skills': [
			'Version control (Git & GitHub)',
			'Testing & Test-Driven Development',
			'Mocha, Chai & Jest',
			'WordPress CMS & optimisation',
			'WooCommerce',
			'Photoshop, Illustrator & Pixelmator',
			'Canva & Figma',
			'Command line tools',
			'Chrome DevTools',
			'VS Code',
			'SEO',
		],
	},

	education: {
		sectionTitle: 'Education',
		educationItems: [
			{
				institution: 'Codecademy',
				period: 'November 2023-Present',
				course: 'Full-Stack Engineer Career Path',
			},
			{
				institution: 'Trinity College of Music, London',
				period: '2010-2014',
				course: 'Bachelor of Music, Cello',
			},
		],
	},

	contact: {
		sectionTitle: 'Contact',
		contactItems: [
			{
				name: 'email',
				value: 'danedwardscreative@gmail.com',
				display: true,
			},
			{
				name: 'GitHub',
				value: 'https://github.com/danedwardsdeveloper',
				display: true,
			},
			{
				name: 'Website',
				value: 'https://danedwardsdeveloper.com/',
				display: false,
			},
			{
				name: 'Linkedin',
				value: 'https://www.linkedin.com/in/dan-e-8bbb112ab/',
				display: false,
			},
		],
	},

	copyright: '© Dan Edwards, 2024',

	metadata: {
		title: 'Dan Edwards | Full-stack TypeScript Web Developer',
		description:
			'CV / Resume site of Dan Edwards, a full-stack web developer specializing in MERN & Next.js web apps.',
		keywords: [
			'web developer',
			'full-stack',
			'JavaScript',
			'TypeScript',
			'React',
			'Next.js',
			'Svelte',
			'Node.js',
			'MongoDB',
			'Express',
		],
	},
};
