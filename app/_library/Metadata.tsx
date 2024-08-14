import type { Metadata } from 'next';
import { copy } from './copy';

export const baseMetadata: Metadata = generateMetadata();

export function generateMetadata(): Metadata {
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
	};
}
