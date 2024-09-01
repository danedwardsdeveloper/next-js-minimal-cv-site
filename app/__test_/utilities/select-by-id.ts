import { Page, ElementHandle } from 'puppeteer';

export const getByTestId = async (page: Page, testId: string) => {
	return await page.$(`[data-testid="${testId}"]`);
};

export const getAllByTestId = async (page: Page, testId: string) => {
	return await page.$$(`[data-testid="${testId}"]`);
};

export const getTextByTestId = async (page: Page, testId: string) => {
	const element = await getByTestId(page, testId);
	if (!element) {
		throw new Error(`Element with data-testid="${testId}" not found`);
	}
	return await page.evaluate((el) => el.textContent, element);
};

export const clickByTestId = async (page: Page, testId: string) => {
	const element = await getByTestId(page, testId);
	if (!element) {
		throw new Error(`Element with data-testid="${testId}" not found`);
	}
	await element.click();
};

export const typeByTestId = async (
	page: Page,
	testId: string,
	text: string
) => {
	const element = await getByTestId(page, testId);
	if (!element) {
		throw new Error(`Element with data-testid="${testId}" not found`);
	}
	await element.type(text);
};

export const getDataIdContains = async (
	page: Page,
	partialTestId: string
): Promise<ElementHandle[]> => {
	const elements = await page.$$('[data-testid]');
	const matchingElements: ElementHandle[] = [];
	for (const element of elements) {
		const testId = await page.evaluate(
			(el) => el.getAttribute('data-testid'),
			element
		);
		if (testId && testId.includes(partialTestId)) {
			matchingElements.push(element);
		}
	}
	return matchingElements;
};
