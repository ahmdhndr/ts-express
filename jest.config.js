/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['<rootDir>/src/setupFilesAfterEnv.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
