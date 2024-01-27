module.exports = {
  extends: ['universe', 'universe/native'],
  rules: {
    'import/order': 0,
    'import/extensions': 0,
    // 'react-native/no-inline-styles': 0,
    // 'import/namespace': 0,
    // 'no-duplicate-imports': 'error'
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // 'import/extensions': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-named-as-default': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      },
      {
        usePrettierrc: true
      }
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'multiline-const',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'multiline-let',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'multiline-var',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-block-like'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-const'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-expression'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-let'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-var'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};
// module.exports = {
//   extends: [
//     '@react-native-community',
//     'eslint-config-prettier',
//     'react-app',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//     'prettier',
//     'plugin:prettier/recommended'
//   ],
//   plugins: ['@typescript-eslint', 'react', 'prettier'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: '2018',
//     sourceType: 'module',
//     project: './tsconfig.json'
//   },
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx', '*.d.ts'],
//       parserOptions: {
//         project: './tsconfig.json'
//       }
//     }
//   ],
//   settings: {
//     react: {
//       version: 'detect'
//     },
//     'import/resolver': {
//       typescript: {},
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx']
//       }
//     }
//   },
//   rules: {
//     'no-unused-vars': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': ['error'],
//     'import/extensions': ['error', 'never'],
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'error',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'warn',
//       {
//         argsIgnorePattern: '^_',
//         varsIgnorePattern: '^_',
//         caughtErrorsIgnorePattern: '^_'
//       }
//     ],
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     'import/no-named-as-default': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         endOfLine: 'auto'
//       },
//       {
//         usePrettierrc: true
//       }
//     ],
//     'padding-line-between-statements': [
//       'warn',
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'return'
//       },
//       {
//         blankLine: 'always',
//         prev: 'export',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: 'multiline-block-like',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: 'multiline-const',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: 'multiline-expression',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: 'multiline-let',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: 'multiline-var',
//         next: '*'
//       },
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'multiline-block-like'
//       },
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'multiline-const'
//       },
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'multiline-expression'
//       },
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'multiline-let'
//       },
//       {
//         blankLine: 'always',
//         prev: '*',
//         next: 'multiline-var'
//       }
//     ],
//     '@typescript-eslint/ban-ts-comment': 'off'
//   },
//   env: {
//     node: true
//   }
// };
