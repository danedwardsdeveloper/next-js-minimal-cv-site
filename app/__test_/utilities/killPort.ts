import { exec } from 'child_process';

export const killPort = (port = 3000) => {
	return new Promise<void>((resolve) => {
		exec('lsof -ti :3000 | xargs kill -9', (error) => {
			if (!error) {
				console.log(`Killed process on port ${port}`);
			}
			resolve();
		});
	});
};
