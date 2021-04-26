
module.exports = {
  //bail: 1, // set to stop testing after N failures
  //clearMocks: true, // set to run jest.clearAllMocks() before each test
  collectCoverage: true,
  collectCoverageFrom: [ 
    "**/*.{ts,js}", 
    "!public-api.ts", 
    "!node_modules", 
    "!dist" 
  ],
  coverageDirectory: "<rootDir>/../", // since current reporters only output json summary
  coverageProvider: "babel", // maybe change to v8 for speed, if it detects full coverage good enough
  coverageReporters: [ "json-summary", "text-summary", "text" ], // disabled json, lcov and clover reporters
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsconfig: {
        //"allowJs": true,
        //"allowUnreachableCode": true,
        "baseUrl": "<rootDir>/",
        //"checkJs": true,
        //"composite": true,
        "declaration": false, // differs from tsconfig
        //"declarationMap": true,
        "downlevelIteration": true,
        //"emitDecoratorMetadata": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "forceConsistentCasingInFileNames": true,
        "importHelpers": true,
        "inlineSourceMap": true, // differs from tsconfig
        "inlineSources": true, // differs from tsconfig
        "module": "es2020", // differs from tsconfig; switch to es2020 in v27
        "moduleResolution": "node",
        //"newLine": "LF",
        "noFallthroughCasesInSwitch": true,
        //"noImplicitOverride": true,
        "noImplicitReturns": true,
        //"noPropertyAccessFromIndexSignature": true,
        //"noUncheckedIndexedAccess": true,
        //"noUnusedLocals": true,
        //"noUnusedParameters": true,
        "outDir": "<rootDir>/dist",
        "sourceMap": false, // differs from tsconfig
        "strict": false, // differs from tsconfig; should be true !
        "target": "es2020"
      }
    },
  },
  moduleFileExtensions: [ "ts", "js" ],
  preset: "ts-jest",
  // resetMocks: true, // set to run jest.resetAllMocks() before each test
  // restoreMocks: true, // set to run jest.restoreAllMocks() before each test
  testMatch: [ "**/*.spec.ts" ],
  // testTimeout: 300000,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  // verbose: true,
};