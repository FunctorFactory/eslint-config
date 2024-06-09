<!-- Title -->
<h1 align="center">
  eslint-config
</h1>

<!-- Description -->
<h4 align="center"> 
  The <a href="https://eslint.org/docs/latest/extend/shareable-configs">shareable configuration</a>
  for <a href="https://eslint.org/">ESLint</a> used in all Functor Factory projects
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@functorfactory/eslint-config">
    <img
      src="https://img.shields.io/npm/v/@functorfactory/eslint-config?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://github.com/FunctorFactory/eslint-config/actions?query=branch%3Amain+workflow%3ARelease">
    <img
       src="https://img.shields.io/github/actions/workflow/status/functorfactory/eslint-config/release.yml?branch=main?style=flat-square"
      alt="Build Status"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

```sh
npm install -D @functorfactory/eslint-config eslint
```

or

```sh
yarn add -D @functorfactory/eslint-config eslint
```

or

```sh
pnpm add -D @functorfactory/eslint-config eslint
```

## Usage

In `eslint.config.js`:

```javascript
import getConfig from '@functorfactory/config';

export default getConfig(import.meta.dirname);
```

## License

GPL-3.0 Or Later
