import type { Viewport, Metadata } from 'next';
import { Poppins } from 'next/font/google';
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

const poppins = Poppins({
	weight: ['500', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-GB" className={poppins.variable}>
			<ThemeProvider>
				<body
					className="m-0 font-sans transition-all duration-1000"
					style={{
						backgroundColor: 'var(--color-background)',
						color: 'var(--color-text)',
					}}
				>
					<div className="page-container text-primary line-height--1-3  text-md grid">
						{children}
					</div>
					<SimpleAnalyticsScript />
				</body>
			</ThemeProvider>
		</html>
	);
}
