import { DOTS, usePagination } from '@/hooks/usePagination'

import React from 'react'

type PaginationProps = {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

export default function Pagination({
  pageSize,
  totalCount,
  onPageChange,
  currentPage,
  siblingCount = 1,
}: PaginationProps) {
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
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <a
              onClick={() => {
                currentPage > 1 && onPrevious()
              }}
              className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white"
              href="#"
            >
              Anterior
            </a>
          </li>

          {paginationRange!.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <li key={pageNumber}>&#8230;</li>
            }
            const isActive = currentPage === pageNumber

            return (
              <li
                className={`relative block rounded py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white ${
                  isActive
                    ? 'bg-sky-900 text-white font-bold'
                    : 'bg-transparent'
                }`}
                onClick={() => onPageChange(Number(pageNumber))}
                key={Number(pageNumber)}
              >
                {pageNumber}
              </li>
            )
          })}
          <li>
            <a
              onClick={() => {
                currentPage < Number(lastPage) && onNext()
              }}
              className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-300 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white"
              href="#"
            >
              Próximo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
