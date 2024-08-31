import { test, expect, beforeAll, afterAll } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';
import SpellChecker from 'spellchecker';

import { environment } from '../environment';

let browser: Browser;
let page: Page;

beforeAll(async () => {
	browser = await puppeteer.launch();
	page = await browser.newPage();
	await page.goto('http://localhost:3000');
});

afterAll(async () => {
	await browser.close();
});

test('Email addresses are not visible on the page', async () => {
	const pageContent = await page.content();
	expect(pageContent).not.toContain(environment.EMAIL_ONE);
	expect(pageContent).not.toContain(environment.EMAIL_TWO);
});

test("All list items are unique and don't have repeated words", async () => {
	const listItems = await page.$$eval('li', (items) =>
		items.map((item) => item.textContent)
	);

	const uniqueItems = new Set(listItems);
	if (uniqueItems.size !== listItems.length) {
		const duplicates = listItems.filter(
			(item, index) => listItems.indexOf(item) !== index
		);
		console.log('Duplicate list items found:', duplicates);
		expect.fail('There are duplicate list items');
	}

	const repeatedWords: { [key: string]: string[] } = {};

	listItems.forEach((item, index) => {
		if (item) {
			const words = item.toLowerCase().split(/\s+/);
			const wordCounts: { [key: string]: number } = {};

			words.forEach((word) => {
				wordCounts[word] = (wordCounts[word] || 0) + 1;
				if (wordCounts[word] > 1) {
					if (!repeatedWords[word]) {
						repeatedWords[word] = [];
					}
					repeatedWords[word].push(`Item ${index + 1}`);
				}
			});
		}
	});

	const repeatedWordCount = Object.keys(repeatedWords).length;

	if (repeatedWordCount > 0) {
		console.log('Repeated words found:');
		for (const [word, items] of Object.entries(repeatedWords)) {
			console.log(`  "${word}" in items: ${items.join(', ')}`);
		}
		expect.fail(
			`Found ${repeatedWordCount} words repeated within list items`
		);
	}
});

test('No spelling mistakes in the content', async () => {
	const textContent = await page.$eval('body', (el) => el.textContent);
	if (textContent) {
		const words = textContent.split(/\s+/);
		const misspelledWords = words.filter((word) => {
			// Ignore words with numbers or special characters
			if (/[^a-zA-Z]/.test(word)) return false;
			return SpellChecker.isMisspelled(word);
		});

		if (misspelledWords.length > 0) {
			console.warn('Potential misspelled words:', misspelledWords);
		}
		expect(misspelledWords.length).toBe(0);
	}
});

test('No link to https://danedwardsdeveloper.com', async () => {
	const links = await page.$$eval('a', (anchors) =>
		anchors.map((a) => a.href)
	);
	expect(links).not.toContain('https://danedwardsdeveloper.com');
});
