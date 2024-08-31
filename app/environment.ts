import { cleanEnv, makeValidator } from 'envalid';
import dotenv from 'dotenv';
dotenv.config();

const nonEmptyStr = makeValidator((value) => {
	if (value.trim() === '') throw new Error('Value cannot be an empty string');
	return value;
});

const envConfig = {
	// Next.js sets NODE_ENV automatically and you can't override it
	EMAIL_ONE: nonEmptyStr(),
	EMAIL_TWO: nonEmptyStr(),
};

export const environment = cleanEnv(process.env, envConfig);

export const validateEnvironment = () => {
	cleanEnv(process.env, envConfig);
};
