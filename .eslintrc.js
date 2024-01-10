module.exports = {
  extends: ['universe', 'universe/native', 'universe/web', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-redux', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-unused-vars': 'off',
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
  },
  env: {
    node: true
  }
};
