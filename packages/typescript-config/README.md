
# Digita Typescript Configuration

This package provides a Typescript configurations, one for building and one for testing, used internally at Digita to adopt a uniform build mechanism.

## Installation

In the root of your (mono)repo, install `@digita-ai/typescript-config` as a development dependency. From NPM v7 onwards, this will automatically add the following peer dependencies as well (if you use an earlier version, install these yourself). 

- `typescript`
- `@types/node`
- `ts-node`

Put the following in the `tsconfig.json` of your Typescript package(s).

```
{
  "extends": "@digita-ai/typescript-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./lib",
    "outDir": "./dist",
    "rootDir": "./lib",
    "module": "commonjs"
  }
}
```

Put the following in the `tsconfig.spec.json` of your Typescript package(s).

```
{
  "extends": "@digita-ai/typescript-config/tsconfig.spec.json",
  "compilerOptions": {
    "baseUrl": "./lib",
    "outDir": "./dist",
    "rootDir": "./lib",
    "module": "commonjs"
  }
}
```

In each of the above config files, change the `baseUrl` (base for relative imports), `outDir` (output directory for builds) and `rootDir` (root directory of source files) to the relevant paths (`rootDir` maps on `outDir` during build). Also set the `module` type to `commonjs` for Node.js packages or to the desired ECMAScript version (e.g. `es2020`) for browser packages. Overwrite any of the preset directives if needed.