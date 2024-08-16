import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				theme: 'var(--font-family)',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'fade-in': 'fadeIn 2s ease-out forwards',
			},
			colors: {
				typescript: '#3178C6',
				'typescript-light': '#358EF1',
				'typescript-dark': '#235A97',
				'typescript-extra-dark': '#00273F',
				theme: {
					text: 'var(--color-text)',
					background: 'var(--color-background)',
					primary: 'var(--color-primary)',
					secondary: 'var(--color-secondary)',
				},
			},
		},
	},
	plugins: [],
	safelist: [
		'border-purple-800',
		'border-blue-800',
		'border-black',
		'border-blue-800',
		'border-green-800',
		'border-red-800',
		'border-typescript',
		'text-typescript',
		'border-typescript-light',
		'text-typescript-light',
		'text-typescript-dark',
		'border-typescript-dark',
		'text-typescript-extra-dark',
		'border-typescript-extra-dark',
	],
};

export default config;
