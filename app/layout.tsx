import type { Viewport, Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.tailwind.css';
import { validateEnvironment } from './_utilities/environment';
validateEnvironment();

import { baseMetadata } from './_library/Metadata';
import SimpleAnalyticsScript from './_components/SimpleAnalyticsScript';
import { ThemeProvider } from './_contexts/ThemeContext';

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
};

export const metadata: Metadata = {
	...baseMetadata,
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider>
			<html lang="en-GB">
				<body
					className={`${inter.className} m-0`}
					style={{
						fontFamily: 'var(--font-family)',
						backgroundColor: 'var(--color-background)',
						color: 'var(--color-text)',
					}}
				>
					<div className="page-container text-primary line-height--1-3 font-mono text-md grid">
						{children}
					</div>
					<SimpleAnalyticsScript />
				</body>
			</html>
		</ThemeProvider>
	);
}
