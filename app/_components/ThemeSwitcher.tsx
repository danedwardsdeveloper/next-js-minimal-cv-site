'use client';
import { useTheme } from '../_contexts/ThemeContext';
import { themes } from '../_library/themes';
import { ThemeName } from '../_types/types';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<select
				value={theme}
				className="p-2 rounded border"
				onChange={(event) => setTheme(event.target.value as ThemeName)}
				style={{
					backgroundColor: themes[theme].colors.background,
					color: themes[theme].colors.text,
					borderColor: themes[theme].colors.primary,
				}}
			>
				{Object.keys(themes).map((themeName) => (
					<option key={themeName} value={themeName}>
						{themeName}
					</option>
				))}
			</select>
		</div>
	);
}
