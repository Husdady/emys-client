// Librarys
import React from 'react'

// Hooks
import usePage from './hooks/usePage'

// Interfaces
import { PageProps } from './interfaces'

// Constants
import { PageProps as Props } from './constants'

const Page: React.FC<PageProps> = ({
  value = Props.VALUE,
  totalPages = Props.TOTAL_PAGES,
  isFetching,
  onChange
}: PageProps) => {
  const { page, onKeyDown, onPageChange, onUpdatePage } = usePage({
    value: value,
    totalPages: totalPages,
    onChange: onChange
  })

  return (
    <input
      type="number"
      className="pagination-page text-gray-600 font-semibold px-1 bg-gray-200 rounded outline-none w-7 h-7 text-center dark:bg-dark-800 dark:text-gray-300"
      disabled={isFetching}
      onBlur={onUpdatePage}
      onKeyDown={onKeyDown}
      onChange={onPageChange}
      value={String(page)}
    />
  )
}

export default React.memo(Page, (prevProps, nextProps) => {
  return prevProps.isFetching === nextProps.isFetching
})
