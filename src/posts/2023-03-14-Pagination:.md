---
title: Componente de paginação em react
metaDesc: 'A paginação é um recurso que permite dividir grandes conjuntos de dados em páginas'
author: Glaulher Medeiros
socialImage: images/banner/PaginateBanner.png
date: 2023-03-14 16:34:00 -0300
categories: [Blogging, Tutorial]
tags: [Component, React]

---

***

A paginação é um recurso que permite dividir grandes conjuntos de dados em páginas facilitando a visualização e a navegação para o usuário, é amplamente utilizado em interfaces que precisam lidar com grandes volumes de dados.

Para criar um componete de paginação de exemplo utilizarei o vite:

```shell
npm create vite@latest paginate -- --template  
```

No próximo passo escolher react:

```shell
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others
```

No próximo passo escolher typescript:

```shell
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
    JavaScript
❯   TypeScript
    JavaScript + SWC
    TypeScript + SWC
```

Entrar na pasta e rodar o `npm install`

```shell
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in ~/Documentos/teste/paginate...

Done. Now run:

  cd paginate
  npm install
  npm run dev
```

Criar na raiz do projeto o arquivo `.eslintrc.json`, instalar o pacote a seguir:

```shell
npm i -D @rocketseat/eslint-config
```

Abrir o arquivo `.eslintrc.json` e deixar conforme a seguir:

```javascript
{
  "extends": "@rocketseat/eslint-config/react"
  // "extends": "@rocketseat/eslint-config/node"
}
```

[Baixe](https://raw.githubusercontent.com/glaulher/example/paginate/src/data/mock-data.json ) o arquivo mock-data.json e coloque em  `src/data/` ,  crie `Pagination.tsx` dentro de `src/`e deixe conforme a seguir:

```javascript
import React from 'react'
import { usePagination, DOTS } from './usePagination'
import './pagination.scss'

type PaginationProps = {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount: number
  currentPage: number
  pageSize: number
  className: string
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange![paginationRange!.length - 1]
  return (
    <ul className="pagination-container">
      <li
        className={`pagination-item ${currentPage === 1 && 'disabled'}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={`pagination-item ${
              pageNumber === currentPage && 'selected'
            }`}
            onClick={() => onPageChange(Number(pageNumber))}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`pagination-item ${currentPage === lastPage && 'disabled'}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  )
}

export default Pagination
```

Crie  `pagination.scss`  dentro de `src/` deixano conforme abaixo:

```javascript
.pagination-container {
  display: flex;
  list-style-type: none;

  .pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.08);
    }

    .arrow {
      &::before {
        position: relative;
        /* top: 3pt; Remova essa linha do comentário para baixar os ícones conforme solicitado nos comentários*/
        content: '';
        /* Usando uma escala em, as setas terão o tamanho acompanhando a fonte */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
}
```

Instale  o pacote `sass`:

```shell
npm i sass
```

#### Sobre Pagination:

Pagination usa um hook personalizado chamado `usePagination` para calcular quais páginas devem ser exibidas e em que ordem.

O componente renderiza uma lista de números de página, com a página atual destacada. O usuário poderá navegar pelos resultados da  lista dividida em várias páginas.

 Propriedades do componente:

- onPageChange: uma função que será chamada quando o usuário clicar em um número de página. Ela recebe como parâmetro o número da página que o usuário selecionou.
- totalCount: o número total de itens que serão paginados.
- siblingCount: o número de links de página exibidos à esquerda e à direita do link da página atual. O padrão é 1.
- currentPage: o número da página atual.
- pageSize: o número de itens exibidos em cada página.

O componente usa a função usePagination para gerar uma matriz de números de página que deve ser exibida ao usuário. Essa função recebe como parâmetros a página atual, o número total de itens, o número de links  e o tamanho da página.

A função usePagination retorna uma matriz de números de página que deve ser exibida na interface do usuário. Ela também pode incluir um valor especial DOTS, que é usado para indicar que há mais páginas entre as que já estão sendo exibidas.

O componente usa o currentPage e o paginationRange para gerar a lista de números de página que serão exibidos para o usuário. Ele também usa as funções onNext e onPrevious para permitir que o usuário navegue para a próxima ou para a página anterior, respectivamente.

O componente renderiza a lista de números de página em uma lista não ordenada HTML (\<ul>), com cada número de página sendo um item de lista (\<li>). O item da lista atual é destacado com a classe CSS "selected".

O componente também renderiza setas para permitir que o usuário navegue para a próxima ou para a página anterior. Se o usuário estiver na primeira ou na última página, o componente desativa o link correspondente para que ele não possa ser clicado.



Crie `usePagination.ts` dentro de `src/`e deixe conforme a seguir:

```javascript
import { useMemo } from 'react'

export const DOTS = '...'

interface Props {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
   
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )

   
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
    return undefined
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}

```



#### Sobre usePagination:

Este código é  responsável por retornar uma lista de páginas a serem exibidas em um componente de paginação, dado um conjunto de parâmetros de entrada, como o número total de itens, o número de itens por página, o número de itens vizinhos a serem exibidos à esquerda e à direita da página atual e a página atual.

A função `range` é uma função que cria um array de números inteiros de um intervalo específico.

O hook calcula o número total de páginas necessárias, em seguida, calcula o número total de páginas que devem ser exibidas (incluindo páginas vizinhas e pontos de suspensão), que é definido como `siblingCount + 5`.

Se o número total de páginas for menor ou igual ao número total de páginas que devem ser exibidas, a função simplesmente retorna um array contendo todas as páginas de 1 a `totalPageCount`.

Se o número total de páginas for maior que o número total de páginas que devem ser exibidas, a função calculará quais páginas vizinhas devem ser exibidas com base na página atual e no número de páginas vizinhas desejadas. A função também calcula se os pontos de suspensão devem ser exibidos à esquerda ou à direita, com base nas páginas vizinhas calculadas anteriormente.

A função `useMemo` é usada para armazenar em cache o resultado da lista de páginas, garantindo que ela só seja recalculada quando as dependências (total de itens, número de itens por página, número de itens vizinhos e página atual) mudarem.

No final, o hook retorna a lista de páginas calculada.



![Nome da imagem caso ela não carregue](images/posts/paginate.gif)


