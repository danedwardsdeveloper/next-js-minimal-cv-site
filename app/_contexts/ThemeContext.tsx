'use client';
import { createContext, useState, useEffect, useContext } from 'react';

import { ThemeOptions } from '../_types/types';

type ThemeContext = {
	theme: ThemeOptions;
	setTheme: (theme: ThemeOptions) => void;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<ThemeOptions>('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as ThemeOptions | null;
		if (savedTheme === 'light' || savedTheme === 'dark') {
			setTheme(savedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);

		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
