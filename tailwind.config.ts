import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-poppins)', 'Arial', 'sans-serif'],
			},
			colors: {
				typescript: {
					DEFAULT: '#3178C6',
					light: '#358EF1',
					dark: '#235A97',
					'extra-dark': '#00273F',
				},
				theme: {
					text: 'var(--color-text)',
					background: 'var(--color-background)',
					primary: 'var(--color-primary)',
					secondary: 'var(--color-secondary)',
					border: 'var(--color-border)',
				},
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
		},
	},
	plugins: [],
	safelist: [
		...['', '-light', '-dark', '-extra-dark'].flatMap((suffix) => [
			`border-typescript${suffix}`,
			`text-typescript${suffix}`,
		]),
	],
};

export default config;
