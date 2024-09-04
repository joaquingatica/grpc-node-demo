const pluginJs = require('@eslint/js')
const eslintPluginSimpleImportSort = require('eslint-plugin-simple-import-sort')
const eslintPluginImport = require('eslint-plugin-import')
const globals = require('globals')
const typeScriptEslint = require('typescript-eslint')

module.exports = [
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
      import: eslintPluginImport,
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...typeScriptEslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // Node.js builtins
            ['^node:'],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
            // non-JS imports (e.g. JSON, styles, assets)
            ['^.+\\.(?![cm]?(jsx?|tsx?)$)\\w+$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/no-cycle': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    ignores: [
      '.direnv/',
      '.idea/',
      '.vscode/',
      '**/dist/',
      '**/node_modules/',
      '**/target/',
      '**/tmp',
    ],
  },
]
