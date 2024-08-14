import SimpleAnalyticsBadge from './SimpleAnalyticsBadge';

import { copy } from '../_library/copy';
// import FlyoutMenu from './FlyoutMenu';
// import { ThemeSwitcher } from './ThemeSwitcher';

export default function Footer() {
	return (
		<footer className="flex">
			<SimpleAnalyticsBadge />
			{/* <FlyoutMenu /> */}
			{/* <ThemeSwitcher /> */}
			<p className="copyright-notice text-xsm">{copy.copyright}</p>
		</footer>
	);
}
