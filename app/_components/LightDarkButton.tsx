'use client';
import { useTheme } from '../_contexts/ThemeContext';

import Icon from './Icon';

export default function LightDarkButton() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const currentIcon = theme === 'dark' ? 'sun' : 'moon';

	return (
		<button
			type="button"
			onClick={toggleTheme}
			data-testid="light-dark-button"
			className=" rounded-md   px-2 py-2  ring-typescript ring-offset-2 border-theme-secondary  border-2 transition-colors ease-in-out duration-300 hover:shadow-lg
			bg-transparent hover:bg-theme-primary hover:bg-opacity-50"
			aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			<Icon name={currentIcon} padding="p-0" colour="bg-theme-text" />
		</button>
	);
}
