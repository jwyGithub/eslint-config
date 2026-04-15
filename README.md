# @jawyn/eslint-config

## jawyn eslint config

<p align="center">
  <img src="https://img.shields.io/npm/v/@jawyn/eslint-config" alt='version'>
  <img src="https://img.shields.io/npm/dm/@jawyn/eslint-config" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/eslint-config" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/eslint-config" alt='Vue'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @jawyn/eslint-config eslint -D
```

#### with yarn

```sh
yarn add @jawyn/eslint-config eslint -D
```

#### with npm

```sh
npm install @jawyn/eslint-config eslint -D
```

### use

#### eslint.config.js

```js
import { eslint } from '@jawyn/eslint-config';

export default eslint({
    vue: true,
    typescript: true
});
```
