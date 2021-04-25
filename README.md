# dgt-config
Standard configuration of repos, packages etc. Easy to copy or inherit from.

<!-- {
  "root": true
  "env": {
    "browser": true,
    "node": true,
    "worker": true,
    "serviceworker": true,
    "es6": true,
    "es2020": true,
    "jest": true
  },
  "ignorePatterns": ["node_modules", "dist", "coverage", "*.conf.js", "*.config.js", "*.conf.ts", "*.config.ts"],
  "extends:": {
    //"plugin:@typescript-eslint/recommended-requiring-type-checking", // throws a lot of errors in legacy code
    //"plugin:jsdoc/recommended", // throws a lot of warnings in legacy code
    //"plugin:import/errors", // throws some errors in legacy code
  },
  "rules": {
    "id-match": "off", // we might want to add naming convention regex ?
    "id-denylist": "off", // we might want to add some unwanted generic names ?
    "no-underscore-dangle": "off", // we might disallow underscores ?
    "no-invalid-this": "off", // we might turn this on when class properties become supported ?
    "max-classes-per-file": [ "off", 1], // we might want to enforce this ?
    "@typescript-eslint/no-unused-vars": "off", // we might turn these warnings on, even if legacy throws a lot of them
    "@typescript-eslint/no-explicit-any": "off", // we might turn these warnings on, even if legacy throws a lot of them
    "@typescript-eslint/explicit-module-boundary-types": "off", // we might turn these warnings on, even if legacy throws a lot of them
    "@typescript-eslint/member-ordering": "off", // we might devise a standard ordering for class members ?
    "@typescript-eslint/naming-convention": "off", // we might devise standard naming conventions with this powerful rule ?
    "@typescript-eslint/consistent-type-assertions": "error", // requires type casting style (could be stronger)
    "@typescript-eslint/no-shadow": [ // disallow shadowing outer variables with inner ones
        "error",
        {
        "builtinGlobals": false, // should probably be true, but throws a lot of legacy errors
        "hoist": "all",
        "ignoreTypeValueShadow": false,
        "ignoreFunctionTypeParameterNameValueShadow": false
        }
    ],
    "@typescript-eslint/explicit-member-accessibility": [                                       // Requires accessibility modifiers
        "error",
        {
            "accessibility": "explicit", // we might enforce this stronger, even if legacy throws a lot of errors
            "overrides": {
                "accessors": "no-public",
                "constructors": "no-public",
                "methods": "no-public",
                "properties": "off",
                "parameterProperties": "no-public",
            }
        }
    ],
  }
} -->