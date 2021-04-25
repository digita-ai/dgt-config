module.exports = {
  collectCoverageFrom: [ '**/*.{ts,js}' ],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [ 'public-api.ts' ],
  // coverageThreshold: {
  //   global: {
  //     branches: 60,
  //     functions: 60,
  //     lines: 60,
  //     statements: 60,
  //   },
  // },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/../tsconfig.spec.json',
    },
  },
  moduleFileExtensions: [ 'ts', 'js' ],
  preset: 'ts-jest',
  rootDir: 'lib',
  testRegex: '.spec.ts$',
  testTimeout: 300000,
  testEnvironment: 'node',
  verbose: true,
};