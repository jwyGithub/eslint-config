"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/cli.ts
var cli_exports = {};
module.exports = __toCommonJS(cli_exports);

// src/cli/index.ts
var import_node_process5 = __toESM(require("process"), 1);
var import_picocolors6 = __toESM(require("picocolors"), 1);
var import_helpers = require("yargs/helpers");
var import_yargs = __toESM(require("yargs"), 1);
var p5 = __toESM(require("@clack/prompts"), 1);

// src/cli/run.ts
var import_node_fs3 = __toESM(require("fs"), 1);
var import_node_path4 = __toESM(require("path"), 1);
var import_node_process4 = __toESM(require("process"), 1);
var import_picocolors5 = __toESM(require("picocolors"), 1);
var p4 = __toESM(require("@clack/prompts"), 1);

// src/cli/constants.ts
var import_picocolors = __toESM(require("picocolors"), 1);

// package.json
var package_default = {
  name: "@jiangweiye/eslint-config",
  type: "module",
  version: "0.1.8-beta.1",
  description: "A eslint config for jiangweiye",
  author: "jiangweiye <jiangweiye@outlook.com> (https://github.com/jwyGithub)",
  license: "SEE LICENSE IN LICENSE.md",
  homepage: "https://github.com/jwyGithub/eslint-config",
  publishConfig: {
    access: "public"
  },
  keywords: [
    "eslint",
    "eslint-config",
    "eslint-config-jwy"
  ],
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    }
  },
  main: "./dist/index.js",
  module: "./dist/index.js",
  types: "./dist/index.d.ts",
  bin: {
    "eslint-config": "bin/index.js"
  },
  files: [
    "bin",
    "dist"
  ],
  scripts: {
    build: "npm run typegen && tsup --format esm,cjs --clean --dts",
    stub: "tsup --format esm",
    dev: "npx @eslint/config-inspector --config eslint.config.js",
    "build:inspector": "pnpm build && npx @eslint/config-inspector build",
    watch: "tsup --format esm,cjs --watch",
    lint: "eslint .",
    "lint:fix": "eslint --fix .",
    typegen: "esno scripts/typegen.ts",
    test: "vitest",
    typecheck: "tsc --noEmit",
    prettier: "npx prettier --write ."
  },
  peerDependencies: {
    "@eslint-react/eslint-plugin": "^1.5.8",
    "@prettier/plugin-xml": "^3.4.1",
    "@unocss/eslint-plugin": ">=0.50.0",
    "astro-eslint-parser": "^0.16.3",
    eslint: ">=8.40.0",
    "eslint-plugin-astro": "^0.31.4",
    "eslint-plugin-format": ">=0.1.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "eslint-plugin-solid": "^0.13.2",
    "eslint-plugin-svelte": ">=2.35.1",
    "prettier-plugin-astro": "^0.13.0",
    "prettier-plugin-slidev": "^1.0.5",
    "svelte-eslint-parser": "^0.33.1"
  },
  peerDependenciesMeta: {
    "@eslint-react/eslint-plugin": {
      optional: true
    },
    "@prettier/plugin-xml": {
      optional: true
    },
    "@unocss/eslint-plugin": {
      optional: true
    },
    "astro-eslint-parser": {
      optional: true
    },
    "eslint-plugin-astro": {
      optional: true
    },
    "eslint-plugin-format": {
      optional: true
    },
    "eslint-plugin-react-hooks": {
      optional: true
    },
    "eslint-plugin-react-refresh": {
      optional: true
    },
    "eslint-plugin-solid": {
      optional: true
    },
    "eslint-plugin-svelte": {
      optional: true
    },
    "prettier-plugin-astro": {
      optional: true
    },
    "prettier-plugin-slidev": {
      optional: true
    },
    "svelte-eslint-parser": {
      optional: true
    }
  },
  dependencies: {
    "@clack/prompts": "^0.7.0",
    "@jiangweiye/install-pkg": "^0.0.1",
    "@stylistic/eslint-plugin": "^2.6.4",
    "@typescript-eslint/eslint-plugin": "^8.2.0",
    "@typescript-eslint/parser": "^8.2.0",
    "eslint-config-flat-gitignore": "^0.1.8",
    "eslint-flat-config-utils": "^0.3.1",
    "eslint-merge-processors": "^0.1.0",
    "eslint-plugin-command": "^0.2.3",
    "eslint-plugin-eslint-comments": "^3.2.0",
    "eslint-plugin-import-x": "^3.1.0",
    "eslint-plugin-jsdoc": "^50.2.2",
    "eslint-plugin-jsonc": "^2.16.0",
    "eslint-plugin-markdown": "^5.1.0",
    "eslint-plugin-n": "^17.10.2",
    "eslint-plugin-no-only-tests": "^3.3.0",
    "eslint-plugin-perfectionist": "^3.2.0",
    "eslint-plugin-regexp": "^2.6.0",
    "eslint-plugin-toml": "^0.11.1",
    "eslint-plugin-unicorn": "^55.0.0",
    "eslint-plugin-unused-imports": "^4.1.3",
    "eslint-plugin-vitest": "^0.5.4",
    "eslint-plugin-vue": "^9.27.0",
    "eslint-plugin-yml": "^1.14.0",
    "eslint-processor-vue-blocks": "^0.1.2",
    globals: "^15.9.0",
    "jsonc-eslint-parser": "^2.4.0",
    "local-pkg": "^0.5.0",
    "parse-gitignore": "^2.0.0",
    picocolors: "^1.0.1",
    "toml-eslint-parser": "^0.10.0",
    "vue-eslint-parser": "^9.4.3",
    "yaml-eslint-parser": "^1.2.3",
    yargs: "^17.7.2"
  },
  devDependencies: {
    "@eslint-react/eslint-plugin": "^1.12.0",
    "@eslint/config-inspector": "^0.5.4",
    "@jiangweiye/eslint-config": "workspace:*",
    "@jiangweiye/prettier-config": "^0.0.14",
    "@prettier/plugin-xml": "^3.4.1",
    "@stylistic/eslint-plugin-migrate": "^2.6.4",
    "@types/eslint": "^9.6.0",
    "@types/fs-extra": "^11.0.4",
    "@types/node": "^22.5.0",
    "@types/prompts": "^2.4.9",
    "@types/yargs": "^17.0.33",
    "@unocss/eslint-plugin": "^0.62.2",
    "astro-eslint-parser": "^1.0.2",
    bumpp: "^9.5.1",
    "bundle-require": "^5.0.0",
    eslint: "^8.56.0",
    "eslint-plugin-astro": "^1.2.3",
    "eslint-plugin-format": "^0.1.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.10",
    "eslint-plugin-solid": "^0.14.2",
    "eslint-plugin-svelte": "^2.43.0",
    "eslint-typegen": "^0.3.1",
    esno: "^4.7.0",
    execa: "^9.3.1",
    "fast-glob": "^3.3.2",
    "fs-extra": "^11.2.0",
    "prettier-plugin-astro": "^0.14.1",
    "prettier-plugin-slidev": "^1.0.5",
    rimraf: "^6.0.1",
    svelte: "^4.2.18",
    "svelte-eslint-parser": "^0.41.0",
    tsup: "^8.2.4",
    tsx: "^4.17.0",
    typescript: "^5.5.4",
    vitest: "^2.0.5",
    vue: "^3.4.38"
  }
};

// src/cli/constants.ts
var vscodeSettingsString = `
  // Enable the ESlint flat config support
  // (remove this if your ESLint extension above v3.0.5)
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": true,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro"
  ]
`;
var frameworkOptions = [
  {
    label: import_picocolors.default.green("Vue"),
    value: "vue"
  },
  {
    label: import_picocolors.default.cyan("React"),
    value: "react"
  },
  {
    label: import_picocolors.default.red("Svelte"),
    value: "svelte"
  },
  {
    label: import_picocolors.default.magenta("Astro"),
    value: "astro"
  },
  {
    label: import_picocolors.default.cyan("Solid"),
    value: "solid"
  },
  {
    label: import_picocolors.default.blue("Slidev"),
    value: "slidev"
  }
];
var frameworks = frameworkOptions.map(({ value }) => value);
var extraOptions = [
  {
    hint: "Use external formatters (Prettier and/or dprint) to format files that ESLint cannot handle yet (.css, .html, etc)",
    label: import_picocolors.default.red("Formatter"),
    value: "formatter"
  },
  {
    label: import_picocolors.default.cyan("UnoCSS"),
    value: "unocss"
  }
];
var extra = extraOptions.map(({ value }) => value);
var dependenciesMap = {
  astro: ["eslint-plugin-astro", "astro-eslint-parser"],
  react: ["@eslint-react/eslint-plugin", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh"],
  slidev: ["prettier-plugin-slidev"],
  solid: ["eslint-plugin-solid"],
  svelte: ["eslint-plugin-svelte", "svelte-eslint-parser"],
  vue: []
};

// src/cli/utils.ts
var import_node_child_process = require("child_process");
function isGitClean() {
  try {
    (0, import_node_child_process.execSync)("git diff-index --quiet HEAD --");
    return true;
  } catch {
    return false;
  }
}
function getEslintConfigContent(mainConfig, additionalConfigs) {
  return `
            import eslint from '@jiangweiye/eslint-config';
                export default eslint({
                ${mainConfig}
                }${additionalConfigs?.map((config) => `,{
${config}
}`)});
            `.trimStart();
}

// src/cli/stages/update-package-json.ts
var import_node_path = __toESM(require("path"), 1);
var import_promises = __toESM(require("fs/promises"), 1);
var import_node_process = __toESM(require("process"), 1);
var import_picocolors2 = __toESM(require("picocolors"), 1);
var p = __toESM(require("@clack/prompts"), 1);
async function updatePackageJson(result) {
  const cwd = import_node_process.default.cwd();
  const pathPackageJSON = import_node_path.default.join(cwd, "package.json");
  p.log.step(import_picocolors2.default.cyan(`Bumping @jiangweiye/eslint-config to v${package_default.version}`));
  const pkgContent = await import_promises.default.readFile(pathPackageJSON, "utf-8");
  const pkg = JSON.parse(pkgContent);
  pkg.devDependencies ??= {};
  pkg.devDependencies["@jiangweiye/eslint-config"] = `^${package_default.version}`;
  pkg.devDependencies.eslint ??= package_default.devDependencies.eslint.replace("npm:eslint-ts-patch@", "").replace(/-\d+$/, "");
  const addedPackages = [];
  if (result.extra.length) {
    result.extra.forEach((item) => {
      switch (item) {
        case "formatter":
          ["eslint-plugin-format", result.frameworks.includes("astro") ? "prettier-plugin-astro" : null].forEach((f) => {
            if (!f) return;
            pkg.devDependencies[f] = package_default.devDependencies[f];
            addedPackages.push(f);
          });
          break;
        case "unocss":
          ["@unocss/eslint-plugin"].forEach((f) => {
            pkg.devDependencies[f] = package_default.devDependencies[f];
            addedPackages.push(f);
          });
          break;
      }
    });
  }
  for (const framework of result.frameworks) {
    const deps = dependenciesMap[framework];
    if (deps) {
      deps.forEach((f) => {
        pkg.devDependencies[f] = package_default.devDependencies[f];
        addedPackages.push(f);
      });
    }
  }
  if (addedPackages.length) p.note(`${import_picocolors2.default.dim(addedPackages.join(", "))}`, "Added packages");
  await import_promises.default.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 4));
  p.log.success(import_picocolors2.default.green(`Changes wrote to package.json`));
}

// src/cli/stages/update-eslint-files.ts
var import_node_fs = __toESM(require("fs"), 1);
var import_promises2 = __toESM(require("fs/promises"), 1);
var import_node_process2 = __toESM(require("process"), 1);
var import_node_path2 = __toESM(require("path"), 1);
var import_picocolors3 = __toESM(require("picocolors"), 1);
var p2 = __toESM(require("@clack/prompts"), 1);
var import_parse_gitignore = __toESM(require("parse-gitignore"), 1);
async function updateEslintFiles(result) {
  const cwd = import_node_process2.default.cwd();
  const pathESLintIgnore = import_node_path2.default.join(cwd, ".eslintignore");
  const pathPackageJSON = import_node_path2.default.join(cwd, "package.json");
  const pkgContent = await import_promises2.default.readFile(pathPackageJSON, "utf-8");
  const pkg = JSON.parse(pkgContent);
  const configFileName = pkg.type === "module" ? "eslint.config.js" : "eslint.config.mjs";
  const pathFlatConfig = import_node_path2.default.join(cwd, configFileName);
  const eslintIgnores = [];
  if (import_node_fs.default.existsSync(pathESLintIgnore)) {
    p2.log.step(import_picocolors3.default.cyan(`Migrating existing .eslintignore`));
    const content = await import_promises2.default.readFile(pathESLintIgnore, "utf-8");
    const parsed = (0, import_parse_gitignore.default)(content);
    const globs = parsed.globs();
    for (const glob of globs) {
      if (glob.type === "ignore") eslintIgnores.push(...glob.patterns);
      else if (glob.type === "unignore") eslintIgnores.push(...glob.patterns.map((pattern) => `!${pattern}`));
    }
  }
  const configLines = [];
  if (eslintIgnores.length) configLines.push(`ignores: ${JSON.stringify(eslintIgnores)},`);
  if (result.extra.includes("formatter")) configLines.push(`formatters: true,`);
  if (result.extra.includes("unocss")) configLines.push(`unocss: true,`);
  for (const framework of result.frameworks) configLines.push(`${framework}: true,`);
  const mainConfig = configLines.map((i) => `  ${i}`).join("\n");
  const additionalConfig = [];
  const eslintConfigContent = getEslintConfigContent(mainConfig, additionalConfig);
  await import_promises2.default.writeFile(pathFlatConfig, eslintConfigContent);
  p2.log.success(import_picocolors3.default.green(`Created ${configFileName}`));
  const files = import_node_fs.default.readdirSync(cwd);
  const legacyConfig = [];
  files.forEach((file) => {
    if (/eslint|prettier/.test(file) && !/eslint\.config\./.test(file)) legacyConfig.push(file);
  });
  if (legacyConfig.length) p2.note(`${import_picocolors3.default.dim(legacyConfig.join(", "))}`, "You can now remove those files manually");
}

// src/cli/stages/update-vscode-settings.ts
var import_node_path3 = __toESM(require("path"), 1);
var import_promises3 = __toESM(require("fs/promises"), 1);
var import_node_fs2 = __toESM(require("fs"), 1);
var import_node_process3 = __toESM(require("process"), 1);
var import_picocolors4 = __toESM(require("picocolors"), 1);
var p3 = __toESM(require("@clack/prompts"), 1);
async function updateVscodeSettings(result) {
  const cwd = import_node_process3.default.cwd();
  if (!result.updateVscodeSettings) return;
  const dotVscodePath = import_node_path3.default.join(cwd, ".vscode");
  const settingsPath = import_node_path3.default.join(dotVscodePath, "settings.json");
  if (!import_node_fs2.default.existsSync(dotVscodePath)) await import_promises3.default.mkdir(dotVscodePath, { recursive: true });
  if (!import_node_fs2.default.existsSync(settingsPath)) {
    await import_promises3.default.writeFile(settingsPath, `{${vscodeSettingsString}}
`, "utf-8");
    p3.log.success(import_picocolors4.default.green(`Created .vscode/settings.json`));
  } else {
    let settingsContent = await import_promises3.default.readFile(settingsPath, "utf8");
    settingsContent = settingsContent.trim().replace(/\s*\}$/, "");
    settingsContent += settingsContent.endsWith(",") || settingsContent.endsWith("{") ? "" : ",";
    settingsContent += `${vscodeSettingsString}}
`;
    await import_promises3.default.writeFile(settingsPath, settingsContent, "utf-8");
    p3.log.success(import_picocolors4.default.green(`Updated .vscode/settings.json`));
  }
}

// src/cli/run.ts
async function run(options = {}) {
  const argSkipPrompt = !!import_node_process4.default.env.SKIP_PROMPT || options.yes;
  const argTemplate = options.frameworks?.map((m) => m.trim());
  const argExtra = options.extra?.map((m) => m.trim());
  if (import_node_fs3.default.existsSync(import_node_path4.default.join(import_node_process4.default.cwd(), "eslint.config.js"))) {
    p4.log.warn(import_picocolors5.default.yellow(`eslint.config.js already exists, migration wizard exited.`));
    return import_node_process4.default.exit(1);
  }
  let result = {
    extra: argExtra ?? [],
    frameworks: argTemplate ?? [],
    uncommittedConfirmed: false,
    updateVscodeSettings: true
  };
  if (!argSkipPrompt) {
    result = await p4.group(
      {
        uncommittedConfirmed: () => {
          if (argSkipPrompt || isGitClean()) return Promise.resolve(true);
          return p4.confirm({
            initialValue: false,
            message: "There are uncommitted changes in the current repository, are you sure to continue?"
          });
        },
        frameworks: ({ results }) => {
          const isArgTemplateValid = typeof argTemplate === "string" && !!frameworks.includes(argTemplate);
          if (!results.uncommittedConfirmed || isArgTemplateValid) return;
          const message = !isArgTemplateValid && argTemplate ? `"${argTemplate}" isn't a valid template. Please choose from below: ` : "Select a framework:";
          return p4.multiselect({
            message: import_picocolors5.default.reset(message),
            options: frameworkOptions,
            required: false
          });
        },
        extra: ({ results }) => {
          const isArgExtraValid = argExtra?.length && !argExtra.filter((element) => !extra.includes(element)).length;
          if (!results.uncommittedConfirmed || isArgExtraValid) return;
          const message = !isArgExtraValid && argExtra ? `"${argExtra}" isn't a valid extra util. Please choose from below: ` : "Select a extra utils:";
          return p4.multiselect({
            message: import_picocolors5.default.reset(message),
            options: extraOptions,
            required: false
          });
        },
        updateVscodeSettings: ({ results }) => {
          if (!results.uncommittedConfirmed) return;
          return p4.confirm({
            initialValue: true,
            message: "Update .vscode/settings.json for better VS Code experience?"
          });
        }
      },
      {
        onCancel: () => {
          p4.cancel("Operation cancelled.");
          import_node_process4.default.exit(0);
        }
      }
    );
    if (!result.uncommittedConfirmed) return import_node_process4.default.exit(1);
  }
  await updatePackageJson(result);
  await updateEslintFiles(result);
  await updateVscodeSettings(result);
  p4.log.success(import_picocolors5.default.green(`Setup completed`));
  p4.outro(`Now you can update the dependencies and run ${import_picocolors5.default.blue("eslint . --fix")}
`);
}

// src/cli/index.ts
function header() {
  console.log("\n");
  p5.intro(`${import_picocolors6.default.green(`@jiangweiye/eslint-config `)}${import_picocolors6.default.dim(`v${package_default.version}`)}`);
}
var instance = (0, import_yargs.default)((0, import_helpers.hideBin)(import_node_process5.default.argv)).scriptName("@jiangweiye/eslint-config").usage("").command(
  "*",
  "Run the initialization or migration",
  (args) => args.option("yes", {
    alias: "y",
    description: "Skip prompts and use default values",
    type: "boolean"
  }).option("template", {
    alias: "t",
    description: "Use the framework template for optimal customization: vue / react / svelte / astro",
    type: "string"
  }).option("extra", {
    alias: "e",
    array: true,
    description: "Use the extra utils: formatter / perfectionist / unocss",
    type: "string"
  }).help(),
  async (args) => {
    header();
    try {
      await run(args);
    } catch (error) {
      p5.log.error(import_picocolors6.default.inverse(import_picocolors6.default.red(" Failed to migrate ")));
      p5.log.error(import_picocolors6.default.red(`\u2718 ${String(error)}`));
      import_node_process5.default.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", package_default.version).alias("v", "version");
instance.help().argv;
