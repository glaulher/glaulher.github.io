---
title: 'ESLint + Prettier no Vite'
metaDesc: 'Como configurar ESLint + Prettier no Vite com React e TypeScript'
coverImage: '/assets/blog/post/DropsDicas.png'

author:
  name: Glaulher Medeiros
  picture: '/assets/blog/authors/glaulher.jpeg'

ogImage:
  url: '/assets/blog/post/DropsDicas.png'

publishedDate: '2025-09-04T10:24:00Z'
tags: [typescript,javascript,react,eslint,prettier]
---

---

## 📌 Como configurar ESLint + Prettier no Vite com React e TypeScript

Se você está começando um projeto com Vite + React + TypeScript, manter o código limpo e consistente é essencial. Nesse post, vamos configurar ESLint e Prettier juntos, explicando cada plugin e como ele ajuda a manter a qualidade do seu código.

---

## 1️⃣ Instale as dependências

```bash

npm install --save-dev eslint prettier @eslint/eslintrc \
@typescript-eslint/parser @typescript-eslint/eslint-plugin \
eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y \
eslint-plugin-import eslint-plugin-prettier \
eslint-import-resolver-typescript eslint-import-resolver-node

```

---

## 2️⃣ Crie o arquivo eslint.config.mjs no root do projeto

```bash

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { rules: {} },
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
    ],

    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'jsx-a11y',
      'import',
      'prettier',
    ],

      settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      // Regras React/TS personalizadas
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/prop-types': 'off', // se usar TS
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Prettier
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

```

## 3️⃣ O que cada plugin faz


- **eslint:recommended**	Ativa as regras recomendadas do ESLint, como evitar variáveis não usadas, uso correto de operadores, etc.

- **plugin:react/recommended**	Fornece regras específicas para React, garantindo boas práticas em componentes, props e JSX.

- **plugin:react-hooks/recommended**	Garante o uso correto dos Hooks do React, evitando erros comuns como dependências faltando no useEffect.

- **plugin:@typescript-eslint/recommended**	Adiciona regras específicas do TypeScript, como tipagem correta de funções e variáveis.

- **plugin:jsx-a11y/recommended**	Ajuda a tornar seu app acessível, como adicionar labels em formulários e textos alternativos em imagens.

- **:import/errors + plugin:import/warnings**	Evita problemas em importações e exportações, como arquivos faltando ou importações duplicadas.

- **plugin:prettier/recommended**	Integra o Prettier ao ESLint, permitindo que regras de formatação sejam aplicadas automaticamente.  

- **eslint-import-resolver-node + eslint-import-resolver-typescript** Garante que o ESLint consiga verificar se os imports que você escreveu realmente existem no ambiente.



## 4️⃣ Configuração do editor

tenha os plugins prettier e eslint instalados no editor para o funcionamento da configuração

Exemplo de configuração no settings do vscode:

```json
{
  {   
    //copie sem os comentário para não dar erro no json
    
    // Formata automaticamente ao salvar
    "editor.formatOnSave": true,
    
    // ESLint vai validar esses tipos de arquivos
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],

    // Aplica ESLint fix automaticamente ao salvar para todos os tipos de arquivo do projeto
     
    "[javascript, javascriptreact, typescript, typescriptreact]": {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      },
      // Define o Prettier como o formatador padrão
      "editor.defaultFormatter": "esbenp.prettier-vscode",
    },   
  }
}

```

## 🧩 Conclusão
Com essa configuração, seu projeto Vite + React + TypeScript fica pronto para desenvolvimento, mantendo código limpo, consistente e acessível.
