import Link from 'next/link';

export default function SimpleAnalyticsBadge() {
	return (
		<Link
			href="https://dashboard.simpleanalytics.com/danedwardsdeveloper.com?utm_source=danedwardsdeveloper.com&utm_content=badge"
			referrerPolicy="origin"
			target="_blank"
		>
			<picture>
				<source
					srcSet="
							https://simpleanalyticsbadges.com/danedwardsdeveloper.com?mode=dark
						"
					media="(prefers-color-scheme: dark)"
				/>
				<img
					src="https://simpleanalyticsbadges.com/danedwardsdeveloper.com?mode=light"
					alt="Simple analytics"
					loading="lazy"
					referrerPolicy="no-referrer"
					crossOrigin="anonymous"
				/>
			</picture>
		</Link>
	);
}
