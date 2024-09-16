import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const hostname = request.headers.get('host') || '';
	const flyDomain = 'dan-edwards-developer-next.fly.dev';
	const customDomain = 'danedwardsdeveloper.com';

	if (hostname === flyDomain) {
		return NextResponse.redirect(
			`https://${customDomain}${request.nextUrl.pathname}${request.nextUrl.search}`
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: '/:path*',
};
