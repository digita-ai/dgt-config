const merge = require('merge');
const jsWithTs = require('ts-jest/presets/js-with-ts/jest-preset');

module.exports = merge.recursive(true, jsWithTs, {
  //bail: 1, // set to stop testing after N failures
  //clearMocks: true, // set to run jest.clearAllMocks() before each test
  collectCoverage: true,
  collectCoverageFrom: [ 
    "**/*.{ts,js}"
  ],
  coverageDirectory: "<rootDir>", // since current reporters only output json summary
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/coverage/",
    "<rootDir>/node_modules/", 
    "<rootDir>/.*\\.conf(ig)?.ts",
    "<rootDir>/lib/public-api.ts",
  ],
  coverageProvider: "babel", // maybe change to v8 for speed, if it detects full coverage good enough
  coverageReporters: [ "json-summary", "text-summary", "text" ], // disabled json, lcov and clover reporters
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsconfig: "<rootDir>/tsconfig.spec.json"
    },
  },
  moduleFileExtensions: [ "ts", "js" ],
  // resetMocks: true, // set to run jest.resetAllMocks() before each test
  // restoreMocks: true, // set to run jest.restoreAllMocks() before each test
  testMatch: [ "**/*.spec.ts" ],
  // testTimeout: 300000,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  // verbose: true,
});
