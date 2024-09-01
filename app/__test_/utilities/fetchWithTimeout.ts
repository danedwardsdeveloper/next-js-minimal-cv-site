export const fetchWithTimeout = (url: string, timeout: number) => {
	return Promise.race([
		fetch(url, { method: 'HEAD' }),
		new Promise((_, reject) =>
			setTimeout(() => reject(new Error('Request timed out')), timeout)
		),
	]) as Promise<Response>;
};
