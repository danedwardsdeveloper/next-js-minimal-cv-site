import Script from 'next/script';

import { environment } from '../environment';

export default function SimpleAnalyticsScript() {
	return (
		<>
			{environment.isProd && (
				<>
					<Script
						async
						defer
						src="https://scripts.simpleanalyticscdn.com/latest.js"
						strategy="afterInteractive"
					></Script>
					<noscript>
						<img
							src="https://queue.simpleanalyticscdn.com/noscript.gif"
							alt=""
							referrerPolicy="no-referrer-when-downgrade"
							loading="lazy"
						/>
					</noscript>
				</>
			)}
		</>
	);
}
