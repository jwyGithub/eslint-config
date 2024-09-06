// src/cli/index.ts
import process5 from "node:process";
import c6 from "picocolors";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";
import * as p5 from "@clack/prompts";

// src/cli/run.ts
import fs3 from "node:fs";
import path4 from "node:path";
import process4 from "node:process";
import c5 from "picocolors";
import * as p4 from "@clack/prompts";

// src/cli/constants.ts
import c from "picocolors";

// package.json
var package_default = {
  name: "@jiangweiye/eslint-config",
  type: "module",
  version: "0.1.8-beta.2",
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
    "astro-eslint-parser": "^1.0.2",
    eslint: "^9.5.0",
    "eslint-plugin-astro": "^1.2.0",
    "eslint-plugin-format": ">=0.1.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "eslint-plugin-solid": "^0.14.3",
    "eslint-plugin-svelte": ">=2.35.1",
    "prettier-plugin-astro": "^0.13.0",
    "prettier-plugin-slidev": "^1.0.5",
    "svelte-eslint-parser": ">=0.37.0"
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
    "@eslint-community/eslint-plugin-eslint-comments": "^4.4.0",
    "@jiangweiye/install-pkg": "^0.0.2",
    "@stylistic/eslint-plugin": "^2.6.4",
    "@typescript-eslint/eslint-plugin": "^8.2.0",
    "@typescript-eslint/parser": "^8.2.0",
    "@vitest/eslint-plugin": "^1.1.0",
    "eslint-config-flat-gitignore": "^0.3.0",
    "eslint-flat-config-utils": "^0.3.1",
    "eslint-merge-processors": "^0.1.0",
    "eslint-plugin-command": "^0.2.3",
    "eslint-plugin-import-x": "^4.2.1",
    "eslint-plugin-jsdoc": "^50.2.2",
    "eslint-plugin-jsonc": "^2.16.0",
    "eslint-plugin-markdown": "^5.1.0",
    "eslint-plugin-n": "^17.10.2",
    "eslint-plugin-no-only-tests": "^3.3.0",
    "eslint-plugin-perfectionist": "^3.4.0",
    "eslint-plugin-regexp": "^2.6.0",
    "eslint-plugin-toml": "^0.11.1",
    "eslint-plugin-unicorn": "^55.0.0",
    "eslint-plugin-unused-imports": "^4.1.3",
    "eslint-plugin-vue": "^9.28.0",
    "eslint-plugin-yml": "^1.14.0",
    "eslint-processor-vue-blocks": "^0.1.2",
    globals: "^15.9.0",
    "jsonc-eslint-parser": "^2.4.0",
    "local-pkg": "^0.5.0",
    "parse-gitignore": "^2.0.0",
    picocolors: "^1.1.0",
    "toml-eslint-parser": "^0.10.0",
    "vue-eslint-parser": "^9.4.3",
    "yaml-eslint-parser": "^1.2.3",
    yargs: "^17.7.2"
  },
  devDependencies: {
    "@eslint-react/eslint-plugin": "^1.13.0",
    "@eslint/config-inspector": "^0.5.4",
    "@jiangweiye/eslint-config": "workspace:*",
    "@jiangweiye/prettier-config": "^0.0.16",
    "@prettier/plugin-xml": "^3.4.1",
    "@stylistic/eslint-plugin-migrate": "^2.7.2",
    "@types/eslint": "^9.6.1",
    "@types/fs-extra": "^11.0.4",
    "@types/node": "^22.5.4",
    "@types/prompts": "^2.4.9",
    "@types/yargs": "^17.0.33",
    "@unocss/eslint-plugin": "^0.62.3",
    "astro-eslint-parser": "^1.0.2",
    bumpp: "^9.5.2",
    eslint: "^9.9.1",
    "eslint-plugin-astro": "^1.2.3",
    "eslint-plugin-format": "^0.1.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.11",
    "eslint-plugin-solid": "^0.14.3",
    "eslint-plugin-svelte": "^2.43.0",
    "eslint-typegen": "^0.3.1",
    esno: "^4.7.0",
    execa: "^9.3.1",
    "fast-glob": "^3.3.2",
    "fs-extra": "^11.2.0",
    jiti: "^1.21.6",
    "prettier-plugin-astro": "^0.14.1",
    "prettier-plugin-slidev": "^1.0.5",
    rimraf: "^6.0.1",
    "simple-git-hooks": "^2.11.1",
    svelte: "^4.2.19",
    "svelte-eslint-parser": "^0.41.0",
    tsup: "^8.2.4",
    tsx: "^4.19.0",
    typescript: "^5.5.4",
    vitest: "^2.0.5",
    vue: "^3.5.2"
  },
  resolutions: {
    "@eslint-community/eslint-utils": "^4.4.0",
    "@typescript-eslint/utils": "^8.4.0",
    eslint: "^9.9.1",
    tsx: "^4.19.0"
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
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
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
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
`;
var frameworkOptions = [
  {
    label: c.green("Vue"),
    value: "vue"
  },
  {
    label: c.cyan("React"),
    value: "react"
  },
  {
    label: c.red("Svelte"),
    value: "svelte"
  },
  {
    label: c.magenta("Astro"),
    value: "astro"
  },
  {
    label: c.cyan("Solid"),
    value: "solid"
  },
  {
    label: c.blue("Slidev"),
    value: "slidev"
  }
];
var frameworks = frameworkOptions.map(({ value }) => value);
var extraOptions = [
  {
    hint: "Use external formatters (Prettier and/or dprint) to format files that ESLint cannot handle yet (.css, .html, etc)",
    label: c.red("Formatter"),
    value: "formatter"
  },
  {
    label: c.cyan("UnoCSS"),
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
import { execSync } from "node:child_process";
function isGitClean() {
  try {
    execSync("git diff-index --quiet HEAD --");
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
import path from "node:path";
import fsp from "node:fs/promises";
import process from "node:process";
import c2 from "picocolors";
import * as p from "@clack/prompts";
async function updatePackageJson(result) {
  const cwd = process.cwd();
  const pathPackageJSON = path.join(cwd, "package.json");
  p.log.step(c2.cyan(`Bumping @jiangweiye/eslint-config to v${package_default.version}`));
  const pkgContent = await fsp.readFile(pathPackageJSON, "utf-8");
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
  if (addedPackages.length) p.note(`${c2.dim(addedPackages.join(", "))}`, "Added packages");
  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 4));
  p.log.success(c2.green(`Changes wrote to package.json`));
}

// src/cli/stages/update-eslint-files.ts
import fs from "node:fs";
import fsp2 from "node:fs/promises";
import process2 from "node:process";
import path2 from "node:path";
import c3 from "picocolors";
import * as p2 from "@clack/prompts";
import parse from "parse-gitignore";
async function updateEslintFiles(result) {
  const cwd = process2.cwd();
  const pathESLintIgnore = path2.join(cwd, ".eslintignore");
  const pathPackageJSON = path2.join(cwd, "package.json");
  const pkgContent = await fsp2.readFile(pathPackageJSON, "utf-8");
  const pkg = JSON.parse(pkgContent);
  const configFileName = pkg.type === "module" ? "eslint.config.js" : "eslint.config.mjs";
  const pathFlatConfig = path2.join(cwd, configFileName);
  const eslintIgnores = [];
  if (fs.existsSync(pathESLintIgnore)) {
    p2.log.step(c3.cyan(`Migrating existing .eslintignore`));
    const content = await fsp2.readFile(pathESLintIgnore, "utf-8");
    const parsed = parse(content);
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
  await fsp2.writeFile(pathFlatConfig, eslintConfigContent);
  p2.log.success(c3.green(`Created ${configFileName}`));
  const files = fs.readdirSync(cwd);
  const legacyConfig = [];
  files.forEach((file) => {
    if (/eslint|prettier/.test(file) && !/eslint\.config\./.test(file)) legacyConfig.push(file);
  });
  if (legacyConfig.length) p2.note(`${c3.dim(legacyConfig.join(", "))}`, "You can now remove those files manually");
}

// src/cli/stages/update-vscode-settings.ts
import path3 from "node:path";
import fsp3 from "node:fs/promises";
import fs2 from "node:fs";
import process3 from "node:process";
import c4 from "picocolors";
import * as p3 from "@clack/prompts";
async function updateVscodeSettings(result) {
  const cwd = process3.cwd();
  if (!result.updateVscodeSettings) return;
  const dotVscodePath = path3.join(cwd, ".vscode");
  const settingsPath = path3.join(dotVscodePath, "settings.json");
  if (!fs2.existsSync(dotVscodePath)) await fsp3.mkdir(dotVscodePath, { recursive: true });
  if (!fs2.existsSync(settingsPath)) {
    await fsp3.writeFile(settingsPath, `{${vscodeSettingsString}}
`, "utf-8");
    p3.log.success(c4.green(`Created .vscode/settings.json`));
  } else {
    let settingsContent = await fsp3.readFile(settingsPath, "utf8");
    settingsContent = settingsContent.trim().replace(/\s*\}$/, "");
    settingsContent += settingsContent.endsWith(",") || settingsContent.endsWith("{") ? "" : ",";
    settingsContent += `${vscodeSettingsString}}
`;
    await fsp3.writeFile(settingsPath, settingsContent, "utf-8");
    p3.log.success(c4.green(`Updated .vscode/settings.json`));
  }
}

// src/cli/run.ts
async function run(options = {}) {
  const argSkipPrompt = !!process4.env.SKIP_PROMPT || options.yes;
  const argTemplate = options.frameworks?.map((m) => m.trim());
  const argExtra = options.extra?.map((m) => m.trim());
  if (fs3.existsSync(path4.join(process4.cwd(), "eslint.config.js"))) {
    p4.log.warn(c5.yellow(`eslint.config.js already exists, migration wizard exited.`));
    return process4.exit(1);
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
            message: c5.reset(message),
            options: frameworkOptions,
            required: false
          });
        },
        extra: ({ results }) => {
          const isArgExtraValid = argExtra?.length && !argExtra.filter((element) => !extra.includes(element)).length;
          if (!results.uncommittedConfirmed || isArgExtraValid) return;
          const message = !isArgExtraValid && argExtra ? `"${argExtra}" isn't a valid extra util. Please choose from below: ` : "Select a extra utils:";
          return p4.multiselect({
            message: c5.reset(message),
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
          process4.exit(0);
        }
      }
    );
    if (!result.uncommittedConfirmed) return process4.exit(1);
  }
  await updatePackageJson(result);
  await updateEslintFiles(result);
  await updateVscodeSettings(result);
  p4.log.success(c5.green(`Setup completed`));
  p4.outro(`Now you can update the dependencies and run ${c5.blue("eslint . --fix")}
`);
}

// src/cli/index.ts
function header() {
  console.log("\n");
  p5.intro(`${c6.green(`@jiangweiye/eslint-config `)}${c6.dim(`v${package_default.version}`)}`);
}
var instance = yargs(hideBin(process5.argv)).scriptName("@jiangweiye/eslint-config").usage("").command(
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
      p5.log.error(c6.inverse(c6.red(" Failed to migrate ")));
      p5.log.error(c6.red(`\u2718 ${String(error)}`));
      process5.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", package_default.version).alias("v", "version");
instance.help().argv;
