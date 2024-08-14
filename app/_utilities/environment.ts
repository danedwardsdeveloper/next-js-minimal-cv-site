import { cleanEnv, makeValidator, str } from 'envalid';

const nonEmptyStr = makeValidator((value) => {
	if (value.trim() === '') throw new Error('Value cannot be an empty string');
	return value;
});

const envConfig = {};

export const environment = cleanEnv(process.env, envConfig);

export const validateEnvironment = () => {
	cleanEnv(process.env, envConfig);
};
