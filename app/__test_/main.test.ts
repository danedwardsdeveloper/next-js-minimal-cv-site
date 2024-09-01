import { test, expect, beforeAll, afterAll } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';
import SpellChecker from 'spellchecker';

import { getDataIdContains } from './utilities/select-by-id';
import { environment } from '../environment';
import {
	spellCheckIgnoreList,
	commonWords,
	multiWordTerms,
} from './utilities/words';
import { fetchWithTimeout } from './utilities/fetchWithTimeout';

const testDevelopmentSite = true;
const testUrl = testDevelopmentSite
	? 'http://localhost:3000'
	: 'https://danedwardsdeveloper.com';

let browser: Browser;
let page: Page;

beforeAll(async () => {
	console.log(
		`Testing ${
			testDevelopmentSite ? 'development' : `deployed`
		} site at ${testUrl}`
	);

	try {
		const response = await fetch(testUrl);
		if (!response.ok) {
			throw new Error(`Server responded with status: ${response.status}`);
		}
	} catch (error) {
		console.error(`Run "pnpm dev" in another terminal before running tests.`);
		process.exit(1);
	}

	browser = await puppeteer.launch();
	page = await browser.newPage();
	await page.goto(testUrl);
}, 30000);

afterAll(async () => {
	await browser.close();
}, 30000);

test('Email addresses are not visible on the page', async () => {
	const pageContent = await page.content();
	expect(pageContent).not.toContain(environment.EMAIL_ONE);
	expect(pageContent).not.toContain(environment.EMAIL_TWO);
});

test('No duplicate skill items', async () => {
	const skillItems = await getDataIdContains(page, 'skill-list-item');
	const skillTexts = await Promise.all(
		skillItems.map((item) => page.evaluate((el) => el.textContent, item))
	);

	const uniqueItems = new Set(skillTexts);
	const duplicates = skillTexts.filter(
		(item, index) => skillTexts.indexOf(item) !== index
	);

	if (duplicates.length > 0) {
		console.log('Duplicate skill items found:', duplicates);
	}
	expect(uniqueItems.size, 'There are duplicate skill items').toBe(
		skillTexts.length
	);

	const wordOccurrences: { [key: string]: string[] } = {};

	skillTexts.forEach((skillText, index) => {
		if (skillText) {
			let lowerSkillText = skillText.toLowerCase();

			multiWordTerms.forEach((term) => {
				const regex = new RegExp(term, 'g');
				lowerSkillText = lowerSkillText.replace(
					regex,
					term.replace(/\s+/g, '_')
				);
			});

			const words = lowerSkillText
				.split(/\s+/)
				.filter((word) => word.length > 1);
			words.forEach((word) => {
				if (!commonWords.has(word)) {
					if (!wordOccurrences[word]) {
						wordOccurrences[word] = [];
					}
					wordOccurrences[word].push(`Skill ${index + 1}`);
				}
			});
		}
	});

	const repeatedWords = Object.entries(wordOccurrences)
		.filter(([_, occurrences]) => occurrences.length > 1)
		.reduce((acc, [word, occurrences]) => {
			acc[word] = occurrences;
			return acc;
		}, {} as { [key: string]: string[] });

	const repeatedWordCount = Object.keys(repeatedWords).length;

	if (repeatedWordCount > 0) {
		console.log('Repeated words found across skill items:');
		for (const [word, items] of Object.entries(repeatedWords)) {
			console.log(
				`  "${word.replace(/_/g, ' ')}" in items: ${items.join(', ')}`
			);
		}
	}

	expect(
		repeatedWordCount,
		`Found ${repeatedWordCount} words repeated across skill items`
	).toBe(0);
});

test('No spelling mistakes in the content', async () => {
	const listItems = await page.$$eval('li', (items) =>
		items.map((item) => item.textContent?.trim())
	);

	const misspelledWords: string[] = [];

	listItems.forEach((item, index) => {
		if (item) {
			const words = item.split(/\s+/);
			words.forEach((word) => {
				if (/[^a-zA-Z]/.test(word)) return;
				if (spellCheckIgnoreList.includes(word)) return;
				if (SpellChecker.isMisspelled(word)) {
					misspelledWords.push(`"${word}" in Item ${index + 1}`);
				}
			});
		}
	});

	if (misspelledWords.length > 0) {
		console.warn('Potential misspelled words:', misspelledWords);
	}
	expect(misspelledWords.length).toBe(0);
});

test('No link to https://danedwardsdeveloper.com', async () => {
	const links = await page.$$eval('a', (anchors) =>
		anchors.map((a) => a.href)
	);
	expect(links).not.toContain('https://danedwardsdeveloper.com');
});

test('All links are unique', async () => {
	const links = await page.$$eval('a', (anchors) =>
		anchors.map((a) => a.href)
	);

	const normalizeUrl = (url: string) => {
		return url
			.replace(/^https?:\/\//, '')
			.replace(/\/$/, '')
			.toLowerCase();
	};

	const normalizedLinks = links.map(normalizeUrl);
	const uniqueLinks = new Set(normalizedLinks);

	const duplicates = normalizedLinks.filter(
		(link, index, self) => self.indexOf(link) !== index
	);

	if (duplicates.length > 0) {
		console.log('Duplicate links found:', duplicates);
	}

	expect(uniqueLinks.size, 'There are duplicate links on the page').toBe(
		links.length
	);
});

const totalTimeLimit = 60 * 1000;

test.skip(
	'No broken links',
	async () => {
		const links = await page.$$eval('a', (anchors) =>
			anchors.map((a) => a.href)
		);

		const brokenLinks: string[] = [];

		for (const link of links) {
			const individualTimeLimit = 10 * 1000;
			try {
				const response = await fetchWithTimeout(link, individualTimeLimit);

				if (!response.ok) {
					brokenLinks.push(`${link} (Status: ${response.status})`);
				}
			} catch (error: unknown) {
				if (error instanceof Error) {
					brokenLinks.push(`${link} (Error: ${error.message})`);
				} else {
					brokenLinks.push(`${link} (Unknown error)`);
				}
			}
		}

		if (brokenLinks.length > 0) {
			console.log('Broken links found:', brokenLinks);
		}

		expect(
			brokenLinks.length,
			`Found ${brokenLinks.length} broken links`
		).toBe(0);
	},
	totalTimeLimit
);
