'use client';
import { useTheme } from '../_contexts/ThemeContext';

import { ThemeOptions } from '../_types/types';

import Icon from './Icon';

export default function LightDarkButton() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme((prevTheme: ThemeOptions) =>
			prevTheme === 'light' ? 'dark' : 'light'
		);
	};

	const currentIcon = theme === 'dark' ? 'sun' : 'moon';

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className=" items-center rounded-md bg-white dark:bg-gray-800 px-2 py-2  ring-gray-300  border-typescript  border-2 hover:bg-gray-200 dark:hover:bg-gray-700  hover:text-white transition-colors ease-in-out duration-300 shadow-lg"
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			<Icon name={currentIcon} padding="p-0" colour="typescript" />
		</button>
	);
}
