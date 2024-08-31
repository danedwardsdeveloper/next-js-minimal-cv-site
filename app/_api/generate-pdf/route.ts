import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

import { environment } from '@/app/environment';

export async function GET() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const sourcePageUrl = environment.isProduction
		? 'https://danedwardsdeveloper.com/pdf'
		: 'http://localhost:3000/pdf';

	await page.goto(sourcePageUrl, {
		waitUntil: 'networkidle0',
	});

	const pdf = await page.pdf({ format: 'A4' });

	await browser.close();

	return new NextResponse(pdf, {
		status: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=page.pdf',
		},
	});
}
