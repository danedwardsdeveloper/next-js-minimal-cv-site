import SimpleAnalyticsBadge from './SimpleAnalyticsBadge';

import { copy } from '../_library/copy';

export default function Footer() {
	return (
		<footer className="w-full col-span-full flex-col-reverse md:flex-row gap-4 md:gap-0 md:row-start-2 flex justify-between md:items-end mb-10">
			<SimpleAnalyticsBadge />
			<p className="text-xs">{copy.copyright}</p>
		</footer>
	);
}
