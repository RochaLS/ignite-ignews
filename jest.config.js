module.exports = {
	testIgnorePatterns: ['/node_modules/', '/.next/'],
	setupFilesAfterEnv: ['<rootDir>/node_modules/babel-jest'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	testEnvironment: 'jsdom',
};
