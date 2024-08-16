import { Buffer } from 'buffer';

type ColorScheme = 'light' | 'dark';

interface ColorConfig {
	fill: string;
	text: string;
}

const colorConfigs: Record<ColorScheme, ColorConfig> = {
	light: {
		fill: '#3178C6',
		text: '#FFF',
	},
	dark: {
		fill: '#FFF',
		text: '#3178C6',
	},
};

export const generateFaviconSvg = (colorScheme: ColorScheme) => {
	const { fill, text } = colorConfigs[colorScheme];
	return `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path id="Path" fill="${fill}" stroke="none" d="M 40 0 L 472 0 C 494.0914 0 512 17.9086 512 40 L 512 472 C 512 494.0914 494.0914 512 472 512 L 40 512 C 17.908609 512 0 494.0914 0 472 L 0 40 C 0 17.9086 17.908609 0 40 0 Z"/>
      <path id="DE" fill="${text}" fill-rule="evenodd" stroke="none" d="M 348.265991 258.942017 L 472.25 258.942017 L 472.25 218.873993 L 299.881989 218.873993 L 299.881989 471 L 473.384003 471 L 473.384003 430.932007 L 348.265991 430.932007 L 348.265991 359.867981 L 465.824005 359.867981 L 465.824005 324.335999 L 348.265991 324.335999 Z M 69.302002 471 L 195.175995 471 C 239.024002 471 264.350006 458.526001 278.335999 430.932007 C 286.652008 413.166016 288.920013 392.376007 288.920013 324.335999 C 288.920013 280.488007 282.872009 258.942017 264.727997 240.420013 C 250.363998 225.678009 228.440002 218.873993 193.664001 218.873993 L 69.302002 218.873993 Z M 117.685997 429.419983 L 117.685997 260.832001 L 188.75 260.832001 C 211.052002 260.832001 222.770004 264.98999 229.951996 275.195984 C 237.889999 286.15802 239.779999 300.522003 239.779999 344.369995 C 239.779999 387.462006 237.511993 402.582001 229.195999 414.299988 C 221.636002 424.884003 208.783997 429.419983 185.725998 429.419983 Z"/>
    </svg>
  `;
};

export const generateFaviconCode = (colorScheme: ColorScheme) => {
	return `data:image/svg+xml;base64,${Buffer.from(
		generateFaviconSvg(colorScheme)
	).toString('base64')}`;
};

export const getFaviconMetadata = () => {
	return ['light', 'dark'].map((scheme) => ({
		rel: 'icon',
		url: generateFaviconCode(scheme as ColorScheme),
		media: `(prefers-color-scheme: ${scheme})`,
	}));
};
