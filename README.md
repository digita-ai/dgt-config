
# Digita Configuration Repository

This repository provides a standard configuration for repositories and packages, used internally at Digita to adopt a uniform clean coding environment. It contains the following configuration packages:

- [`commitlint-config`](./packages/commitlint-config#readme)
- [`eslint-config`](./packages/eslint-config#readme)
- [`jest-config`](./packages/jest-config#readme)
- [`lerna-config`](./packages/lerna-config#readme)
- [`typescript-config`](./packages/typescript-config#readme)

## Git hooks

The Git hooks of this repository also serve as an instantly copyable base for new (mono)repos. We use Husky to share them via Git. Set it up by installing `husky` in the repo root and adding `husky install` as `postinstall` script to the root `package.json`. Then copy the `.husky` directory from this repo, and make sure to make the hooks themselves executable (e.g. `chmod a+x .husky/*`).