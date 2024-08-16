import type { Metadata } from 'next';

import { copy } from './copy';
import { getFaviconMetadata } from './Favicon';

export const generateMetadata = (): Metadata => {
	return {
		title: {
			default: copy.metadata.title,
			template: '%s | ' + copy.metadata.title,
		},
		description: copy.metadata.description,
		keywords: copy.metadata.keywords,
		openGraph: {
			title: copy.metadata.title,
			description: copy.metadata.description,
			siteName: copy.metadata.title,
			locale: 'en_GB',
			type: 'website',
			url: 'https://danedwardsdeveloper.com',
		},
		twitter: {
			card: 'summary_large_image',
			title: copy.metadata.title,
			description: copy.metadata.description,
		},
		icons: getFaviconMetadata(),
	};
};

export const baseMetadata: Metadata = generateMetadata();
