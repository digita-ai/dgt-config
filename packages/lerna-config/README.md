
# Digita Lerna Configuration

This package provides an extendable Lerna configuration, used internally at Digita to adopt a uniform monorepo setup.

## Installation

In the root of your (mono)repo, install `@digita-ai/lerna-config` as a development dependency. From NPM v7 onwards,, this will automatically add `lerna` as a peer dependency as well (if you use an earlier version, install this yourself). 

In the root `package.json`, add the following `lerna` object, with an initial version number. Lerna will find this and change it on each release.

```
"lerna": {
    "extends": "@digita-ai/lerna-config",
    "version": "0.1.0"
},
```
