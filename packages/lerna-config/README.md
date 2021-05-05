
# Digita Lerna Configuration

This package provides an extendable Lerna configuration, used internally at Digita to adopt a uniform monorepo setup.

## Installation

In the root of your (mono)repo, install `@digita-ai/lerna-config` as a development dependency. From NPM v7 onwards, this will automatically add `lerna` as a peer dependency as well (if you use an earlier version, install this yourself). Also add a `lerna.json` file extending this configuration and containing an initial version number (see example below). Lerna will find this and change it on each release.

```
{
    "extends": "@digita-ai/lerna-config",
    "version": "0.1.0"
},
```
