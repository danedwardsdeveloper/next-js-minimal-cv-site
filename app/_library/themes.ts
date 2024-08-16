import { Theme, ThemeName } from '../_types/types';

export const globalStyles = {
	listItemMargin: 'mb-3',
};

export const themes: Record<ThemeName, Theme> = {
	Default: {
		name: 'Default',
		fontFamily: `'Poppins', 'Arial', sans-serif`,
		colors: {
			primary: 'typescript',
			secondary: '#2ecc71',
			background: '#ffffff',
			text: '#333333',
		},
	},
	Elegant: {
		name: 'Elegant',
		fontFamily: 'serif',
		colors: {
			primary: 'red-800',
			secondary: '#34495e',
			background: '#f5f5f5',
			text: '#2c3e50',
		},
	},
	'90s': {
		name: '90s',
		fontFamily: 'cursive',
		colors: {
			primary: '#e74c3c',
			secondary: '#f39c12',
			background: '#ecf0f1',
			text: '#2980b9',
		},
	},
	Vibrant: {
		name: 'Vibrant',
		fontFamily: 'monospace',
		colors: {
			primary: '#1abc9c',
			secondary: '#16a085',
			background: '#2c3e50',
			text: '#ecf0f1',
		},
	},
	Chaotic: {
		name: 'Chaotic',
		fontFamily: 'Georgia, serif',
		colors: {
			primary: '#27ae60',
			secondary: '#f1c40f',
			background: '#d5e8d4',
			text: '#34495e',
		},
	},
};
