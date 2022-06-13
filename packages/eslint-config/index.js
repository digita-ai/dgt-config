
module.exports = {
    
    "plugins": [
        "eslint-plugin-deprecation",
        "eslint-plugin-import",
        "eslint-plugin-jest",
        "eslint-plugin-jest-formatting",
        "eslint-plugin-jsdoc",
        "eslint-plugin-no-null",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint/eslint-plugin",
    ],
    
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:jest/style",
        "plugin:jest/recommended",
        "plugin:jest-formatting/strict",
        //"plugin:jsdoc/recommended",
    ],
    
    "ignorePatterns": [ 
        "node_modules", 
        "dist", 
        "coverage", 
        "*.conf.js", 
        "*.config.js", 
        "*.conf.ts", 
        "*.config.ts",
    ],

    "parser": "@typescript-eslint/parser",

    "parserOptions": {
        "sourceType": "module",
        "project": [ 
            "tsconfig.json", 
            "tsconfig.*.json",
        ],
    },

    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "jest/globals": true,
        "node": true,
        "serviceworker": true,
        "worker": true,
    },
    
    "settings": {

        "import/parsers": {
            "@typescript-eslint/parser": [ ".ts" ]
        },

        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": [ 
                    "tsconfig.json", 
                    "tsconfig.*.json" 
                ],
            },
        },

    },
    
    "rules": {

        "array-bracket-newline": [                                                      // Enforces consistent newlines inside array brackets
            "error",
            "consistent",
        ],
        
        "array-bracket-spacing": [                                                      // Enforces spacing inside array brackets
            "error",
            "always",
        ],
        
        "array-element-newline": [                                                      // Enforces consistent newlines between array elements
            "error",
            "consistent",
        ],
        
        "arrow-body-style": [                                                           // Enforces implicit return for simple expressions in arrow functions
            "error",
            "as-needed",
        ],
        
        "arrow-parens": [                                                               // Enforces parentheses around single argument in arrow functions argument (P arrowParens)
            "error",
            "always",
        ],

        "block-spacing": [                                                              // Enforces spacing inside same-line block statements
            "error",
            "always"
        ],
        
        "brace-style": [                                                                // Enforces block brace placement or single line
            "error",
            "1tbs",
            {
                "allowSingleLine": true,
            },
        ],
        
        "comma-dangle": [                                                               // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "comma-spacing": [                                                              // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "curly": [                                                                      // Enforces single statement block braces
            "error",
            "multi-line",
        ],

        "deprecation/deprecation": [                                                    // Warns for use of deprecated code
            "warn",
        ],
        
        "dot-notation": [                                                               // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "eol-last": [                                                                   // Enforces a newline at the end of each file (EC insert_final_newline)
            "error",
            "always",
        ],
        
        "eqeqeq": [                                                                     // Enforces strong equality checks
            "error",
            "smart",
        ],
        
        "function-call-argument-newline": [                                             // Enforces consistent newlines in function calls
            "error",
            "consistent",
        ],
        
        "function-paren-newline": [                                                     // Enforces consistent newlines in parameter lists
            "error",
            "consistent",
        ],
        
        "guard-for-in": [                                                               // Requires property check in for-in loops
            "error",
        ],
        
        "import/no-unresolved": [                                                       // Disables checking for module resolution
            "off",
        ],

        "import/order": [                                                               // Enforces correct ordering of import statements
            "error",
        ],
        
        "indent": [                                                                     // Functionality subsumed by typescript plugin (P useTabs / P tabWidth / EC indent_style / EC indent_size)
            "off",
        ],
        
        "jsdoc/check-alignment": [                                                      // Requires consistent alignment in comments (also in req.)
            "error",
        ],
        
        "jsdoc/check-indentation": [                                                    // Requires consistent indentation in comments
            "error",
            {
                "excludeTags": [
                    "example",
                    "description",
                ]
            },
        ],
        
        "jsdoc/newline-after-description": [                                            // Requires consistent padding in comments (also in req.)
            "error",
        ],

        "keyword-spacing": [                                                            // Enforces spaces around keywords
            "error",
        ],
        
        "linebreak-style": [                                                            // Enforces unix style line breaks (P endOfLine / EC end_of_line)
            "error",
            "unix",
        ],

        "max-len": [                                                                    // Requires max line length (P printWidth / EC max_line_length)
            "error", {
            "code": 120,
            "tabWidth": 2,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true,
            "ignoreTrailingComments": true,
            "ignoreComments": true,
        }],
        
        "new-parens": [                                                                 // Enforces parentheses for empty constructor call
            "error",
            "always",
        ],
        
        "no-bitwise": [                                                                 // Disallows bitwise operators
            "error",
        ],
        
        "no-caller": [                                                                  // Disallows deprecated caller and callee properties
            "error",
        ],
        
        "no-console": [                                                                 // Disallows console logs
            "error",
        ],
        
        "no-eval": [                                                                    // Disallows the use of eval()
            "error",
        ],

        "no-invalid-this": [                                                            // Warns for use of this in dangerous places
            "warn",
            // {
            //     "capIsConstructor": false,
            // }
        ],

        "no-multi-spaces": [                                                            // Disallows multiple spaces (with formatting exceptions)
            "error", 
            { 
                "exceptions": {
                    "Property": true,
                    "BinaryExpression": true,
                    "VariableDeclarator": true,
                    "ImportDeclaration": true,
                },
            },
        ],

        "no-multiple-empty-lines": [                                                    // Removes multiple empty lines
            "error",
            {
                "max": 1
            },
        ],
        
        "no-new-wrappers": [                                                            // Disallows primitive wrappers
            "error",
        ],

        "no-null/no-null": [                                                            // Disallows use of null
            "error",
        ],

        "no-param-reassign": [                                                          // Warns for reassignment of parameters and their properties
            "warn", 
            { 
                "props": true 
            }
        ],
        
        "no-shadow": [                                                                  // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "no-throw-literal": [                                                           // Disallows literal throws
            "error",
        ],
        
        "no-trailing-spaces": [                                                         // Removes all trailing whitespace (EC trim_trailing_whitespace)
            "error",
        ],
        
        "no-undef-init": [                                                              // Removes explicit undefined initializations
            "error",
        ],

        "no-underscore-dangle": [                                                       // Disallows dangling underscores
            "error",
            {
                "enforceInMethodNames": true,
                "allowFunctionParams": false,
            },
        ],
        
        "no-unused-expressions": [                                                      // Functionality subsumed by typescript plugin
            "off",
        ],

        "no-unused-vars": [                                                             // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "no-use-before-define": [                                                       // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "no-useless-escape": [                                                          // Warns for useless escapes (sometimes clashes with nested quotes)
            "warn",
        ],
        
        "no-var": [                                                                     // Enforces let or const instead of var
            "error",
        ],

        "object-curly-newline": [                                                       // Enforces consistent newlines in brackets
            "error",
            {
                "consistent": true,
            },
        ],
        
        "object-curly-spacing": [                                                       // Functionality subsumed by typescript plugin (P bracketSpacing)
            "off",
        ],
        
        "object-shorthand": [                                                           // Enforce use of object shorthand
            "error",
            "always",
        ],
        
        "one-var": [                                                                    // Enforces multiple variable declarations per scope
            "error",
            "never",
        ],
        
        "padded-blocks": [                                                              // Enforces padding inside block statements
            "error",
            "always", 
            {
                "allowSingleLineBlocks": true,
            },
        ],
        
        "padding-line-between-statements": [                                            // Enforces padding lines ...
            "error",
            { 
                blankLine: "always",                                                        // ... before return statements
                prev: "*", 
                next: "return",
            },
            { 
                blankLine: "always",                                                        // ... before block statements
                prev: "*", 
                next: [
                    "block-like",
                    "multiline-var",
                    "multiline-let",
                    "multiline-const",
                    "multiline-expression",
                ],
            },
            { 
                blankLine: "always",                                                        // ... after block statements
                prev: [
                    "block-like",
                    "multiline-var",
                    "multiline-let",
                    "multiline-const",
                    "multiline-expression",
                ],
                next: "*",
            },
        ],

        "prefer-arrow/prefer-arrow-functions": [                                        // Enforces use of arrow functions where possible
            "error",
        ],
        
        "prefer-const": [                                                               // Enforces const instead of un-reassigned let
            "error",
        ],
        
        "quotes": [                                                                     // Functionality subsumed by typescript plugin (P singleQuote / EC quote_type)
            "off",
        ],
        
        "radix": [                                                                      // Requires radix in parseInt()
            "error",
        ],

        "rest-spread-spacing": [                                                        // Enforces space after spread operator
            "error", 
            "always"
        ],
        
        "semi": [                                                                       // Functionality subsumed by typescript plugin
            "off",
        ],
        
        "sort-imports": [                                                               // Functionality subsumed by imports plugin
            "off",
        ],
        
        "space-in-parens": [                                                            // Removes spaces from inside parentheses
            "error",
            "never",
        ],
        
        "spaced-comment": [                                                             // Enforces spaces around comments
            "error", 
            "always",
            {
                "markers": [
                    "/",
                ]
            },
        ],
        
        "@typescript-eslint/array-type": [                                              // Enforces array type notation
            "error",
            {
                "default": "array",
            },
        ],
        
        "@typescript-eslint/await-thenable": [                                          // Warns for redundant awaits (weaker than recommendation)
            "warn",
        ],
        
        "@typescript-eslint/ban-types": [                                               // Disallows dangerous type names
            "error",
        ],
        
        "@typescript-eslint/comma-dangle": [                                            // Enforces trailing commas (P trailingComma)
            "error",
            "always-multiline",
        ],
        
        "@typescript-eslint/comma-spacing": [                                           // Enforces space after but not before commas
            "error",
        ],
        
        "@typescript-eslint/consistent-type-assertions": [                              // Disallows type casting
            "error",
            {
                "assertionStyle": "never",
                //"objectLiteralTypeAssertions": "never",
            }
        ],
        
        "@typescript-eslint/consistent-type-definitions": [                             // Enforces use of interface keyword
            "error",
            "interface",
        ],
        
        "@typescript-eslint/dot-notation": [                                            // Removes unnecessary bracket notations
            "error",
            {
                "allowPattern": "^[A-Z]",
            },
        ],

        "@typescript-eslint/explicit-member-accessibility": [                           // Requires accessibility modifiers except public                      
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "no-public",
                    "constructors": "no-public",
                    "methods": "no-public",
                    "properties": "off",
                    "parameterProperties": "no-public",
                },
            },
        ],
        
        "@typescript-eslint/indent": [                                                  // Enforces two-space indentation (P useTabs / P tabWidth / EC indent_style / EC indent_size)
            "error", 
            2, 
            { 
                "SwitchCase": 1,
                /* fine-tuning possible */ 
            },
        ],
        
        "@typescript-eslint/member-delimiter-style": [                                  // Enforces semicolon delimiters in interfaces
            "error",
        ],
        
        "@typescript-eslint/no-empty-function": [                                       // Disallows empty functions
            "error",
        ],

        "@typescript-eslint/no-explicit-any": [                                         // Warns for explicit typing as any
            "warn",
            // {
            //     "fixToUnknown": true,
            // },
        ],

        "@typescript-eslint/no-shadow": [                                               // Warns about shadowing outer variables with inner ones
                                                                    
            "warn",
            {
                "builtinGlobals": true,
                "hoist": "all",
                "ignoreTypeValueShadow": false,
                "ignoreFunctionTypeParameterNameValueShadow": false,
            },
       
        ],

        "@typescript-eslint/no-unsafe-assignment": [                                    // Warns for assignment of any (weaker than recommendation)
            "warn",
        ],

        "@typescript-eslint/no-unsafe-call": [                                          // Warns for function call on any (weaker than recommendation)
            "warn",
        ],

        "@typescript-eslint/no-unsafe-member-access": [                                 // Warns for property access on any (weaker than recommendation)
            "warn",
        ],

        "@typescript-eslint/no-unsafe-return": [                                        // Warns for return of any (weaker than recommendation)
            "warn",
        ],
        
        "@typescript-eslint/no-unused-expressions": [                                   // Disallows unused expressions
            "error", 
            { 
                "allowTernary": true,
            },
        ],
        
        "@typescript-eslint/no-unused-vars": [                                          // Disallows unused vars except before used function arguments
            "error", 
            { 
                "args": "after-used",
                //"argsIgnorePattern": "^_",
            },
        ],
        
        "@typescript-eslint/no-use-before-define": [                                    // Disallows using not-yet-defined names
            "error",
        ],
        
        "@typescript-eslint/object-curly-spacing": [                                    // Enforces spacing inside braces (P bracketSpacing)
            "error",
            "always",
        ],
        
        "@typescript-eslint/prefer-for-of": [                                           // Requires for-of loops where possible
            "error",
        ],
        
        "@typescript-eslint/prefer-function-type": [                                    // Enforces functions instead of interfaces with call signatures
            "error",
        ],
 
        "@typescript-eslint/quotes": [                                                  // Enforces use of single quotes (P singleQuote / EC quote_type)                                                     
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true,
            },
        ],
        
        "@typescript-eslint/require-await": [                                           // Warns for possible redundant async functions (weaker than recommendation)
            "warn",
        ],

        "@typescript-eslint/restrict-template-expressions": [                           // Warns for hard to print template expressions (weaker than recommendation)
            "warn",
            {
                "allowNumber": true,
                "allowBoolean": true,
                "allowAny": false,
                "allowNullish": false,
            },
        ],
        
        "@typescript-eslint/semi": [                                                    // Enforces a semicolon at the end of each statement (P semi)
            "error",
            "always",
        ],
        
        "@typescript-eslint/type-annotation-spacing": [                                 // Enforces space after but nor before type colon
            "error",
        ],
        
        "@typescript-eslint/unified-signatures": [                                      // Requires reduction of overloads
            "error",
        ],

    },

    "overrides": [

        {

            "files": [ "**/*.ts" ],

            "rules": {

                "@typescript-eslint/explicit-module-boundary-types": [                  // Enforces return types (only it TS files)
                    "error",
                    {
                        "allowArgumentsExplicitlyTypedAsAny": true,
                    },
                ],

            },

        },

        {

            "files": [ "**/*.spec.ts" ],

            "rules": {

                "no-null/no-null": [                                                    // Allows use of null in tests
                    "off",
                ],
                
                "@typescript-eslint/consistent-type-assertions": [                      // Enforces type casting with 'as' in tests
                    "error",
                    {
                        "assertionStyle": "as",
                    }
                ],

            },

        },

    ],

}