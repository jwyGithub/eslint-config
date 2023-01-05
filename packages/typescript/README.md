# @jiangweiye/eslint-config-ts

#### jiangweiye eslint config ts

<p align="center">
  <img src="https://img.shields.io/npm/v/@jiangweiye/eslint-config-ts" alt='version'>
  <img src="https://img.shields.io/npm/dy/@jiangweiye/eslint-config-ts" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/eslint-config" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/eslint-config" alt='Vue'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @jiangweiye/eslint-config-ts eslint -D
```

#### with yarn

```sh
yarn add @jiangweiye/eslint-config-ts eslint -D
```

#### with npm

```sh
npm install @jiangweiye/eslint-config-ts eslint -D
```

### use

#### with js

```js
module.exports = {
    extends: '@jiangweiye/eslint-config-ts'
};
```

#### with ts

```typescript
process.env.ESLINT_TSCONFIG = 'tsconfig.json';
module.exports = {
    extends: '@jiangweiye/eslint-config-ts'
};
```

