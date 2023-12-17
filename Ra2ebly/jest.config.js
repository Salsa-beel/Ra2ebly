module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  collectCoverage: true,
  coverageReporters: ['html'],
};
