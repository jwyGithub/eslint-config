# @janone/eslint-config

#### janone eslint config

<p align="center">
  <img src="https://img.shields.io/npm/v/@janone/eslint-config" alt='version'>
  <img src="https://img.shields.io/npm/dm/@janone/eslint-config" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/eslint-config" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/eslint-config" alt='Vue'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @janone/eslint-config eslint -D
```

#### with yarn

```sh
yarn add @janone/eslint-config eslint -D
```

#### with npm

```sh
npm install @janone/eslint-config eslint -D
```

### use

#### eslint.config.js

```js
import { eslint } from '@janone/eslint-config';
export default eslint({
    vue: true,
    typescript: true
});
```
