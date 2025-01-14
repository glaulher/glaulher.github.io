import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],

    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
          arrowParens: 'always',
          singleQuote: true,
          semi: true,
          endOfLine: 'auto',
        },
      ],
    },
  }),
];

export default eslintConfig;
