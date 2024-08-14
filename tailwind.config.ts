import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			theme: 'var(--font-family)',
		},
		colors: {
			theme: {
				text: 'var(--color-text)',
				background: 'var(--color-background)',
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
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
	],
};
export default config;
