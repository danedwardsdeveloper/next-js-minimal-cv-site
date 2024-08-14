'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';

import { ThemeName } from '../_types/types';
import { themes } from '../_library/themes';

type ThemeContext = {
	theme: ThemeName;
	setTheme: (theme: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<ThemeName>('Default');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as ThemeName | null;
		if (savedTheme && themes[savedTheme]) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		const currentTheme = themes[theme];

		root.style.setProperty('--font-family', currentTheme.fontFamily);
		root.style.setProperty(
			'--color-background',
			currentTheme.colors.background
		);
		root.style.setProperty('--color-text', currentTheme.colors.text);
		root.style.setProperty('--color-primary', currentTheme.colors.primary);
		root.style.setProperty(
			'--color-secondary',
			currentTheme.colors.secondary
		);

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
