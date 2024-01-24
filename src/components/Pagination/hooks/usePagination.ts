// Hooks
import { useMemo, useCallback } from 'react'

// Interfaces
import { UsePaginationParams } from '@components/Pagination/interfaces'

// Utils
import truncate from '@utils/truncate'
import isUndefined from '@utils/isUndefined'

// Constants
import { PAGE_LIMIT_TRUNCATION } from '@components/Pagination/constants'

/**
 * Hook that implements the logic of Pagination component
 * @param {UsePaginationParams} params Receive some props of Pagination component
 */
export default function usePagination({
  total,
  perPage,
  currentPage,
  defaultTotal,
  onPrev,
  onNext,
  onChange
}: UsePaginationParams) {
  // Define the total of pagination pages
  const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage])

  // Define the max page
  const maxPage = useMemo(() => {
    const page = totalPages === 0 ? defaultTotal : totalPages
    const pageToString = String(page)
    return truncate(pageToString, PAGE_LIMIT_TRUNCATION)
  }, [total, totalPages])

  // Create pagination parameters
  const createParams = useCallback(
    (page: number) => ({
      page: page,
      total: total,
      totalPages: totalPages,
      currentPage: currentPage
    }),
    [totalPages, currentPage]
  )

  // Click event in 'Accept' button
  const handleOnPrev = useCallback(() => {
    onChange?.(createParams(currentPage - 1))
    if (isUndefined(onPrev)) return
    if (isUndefined(currentPage)) return onPrev(createParams(1))
    onPrev(createParams(currentPage - 1)) // Back to previous page
  }, [totalPages, currentPage])

  // Evento click on botón 'Siguiente'
  const handleOnNext = useCallback(() => {
    onChange?.(createParams(currentPage + 1))
    if (isUndefined(onNext)) return
    if (isUndefined(currentPage)) return onNext(createParams(1))
    onNext(createParams(currentPage + 1)) // Continue to next page
  }, [currentPage])

  return {
    maxPage: maxPage,
    onPrev: handleOnPrev,
    onNext: handleOnNext,
    totalPages: totalPages
  }
}
