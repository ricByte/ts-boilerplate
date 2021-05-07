# TS-BOILERPLATE

A boilerplate used for developing in typescript as a POC for libraries. 

## Background

TL;DR

I usually use it for creating new libraries

## Project Structure

```shell

├── LICENSE.md
├── README.md
├── huskyrc.json
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   └── index.ts
├── __tests__
│   └── index.spec.ts
├── tsconfig.json
├── tsconfig.lint.json
└── tslint.json


```

## Usage

### Build

```
yarn build
```

Outputed into `lib/`.

### Test

```
yarn test
```

### Coverage

```
yarn coverage
```

Open `coverage/lcov-report/index.html` in a browser.

## Dependencies
### TypeScript

`yarn build` transpiles the source codes from `src/` to `lib/`.

See `tsconfig.json`.

### husky & lint-staged

husky provides hooks for git, e.g. pre-commit, pre-push.

lint-staged gives the git staging files to any command.

You can format and lint the source codes with them before they are commited.

See `package.json` and `.lintstagedrc.json`.

### Jest(ts-jest)

Jest is a test runner.

ts-jest let Jest run `.ts` files.

### Contributors

Riccardo Vecchi(reackonly)

### Licence

These examples are licensed under the [MIT License](LICENSE.md).
