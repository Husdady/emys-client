// Hooks
import useMounted from '@hooks/useMounted'
import useFilters from '@hooks/useFilters'
import { useMemo, useCallback } from 'react'

// Interfaces
import { UseDcoumentCountParams } from './interfaces'

// Utils
import isNumber from '@utils/isNumber'
import isUndefined from '@utils/isUndefined'

/**
 * Hook that implements the logic of the Document counts
 * @param {UseDcoumentCountParams} params Receive a 'filterId' and a 'defaultLimit'
 * @returns {UseDcoumentCountResponse} Object
 */
export default function useDocumentCount({
  data,
  filterId,
  defaultLimit = 0,
  autoIncreaseCount = false
}: UseDcoumentCountParams): number {
  const { filters, updateCount } = useFilters() // Get filters

  // Define the limit for the Placeholder
  const count = useMemo<number>(() => {
    const count = filters[filterId] // Get count from the filters
    if (!isNumber(count)) return defaultLimit // Return default limit
    if (count === 0) return defaultLimit // Empty documents, return default limit
    return count // Return the count of the filtered documents
  }, [filters])

  // Update the count of the Categories document
  const updateDocumentCount = useCallback(() => {
    if (isUndefined(data)) return // Data not exists
    const count = data.length // Get count

    if (isUndefined(count)) return // Bad count
    const filter = filters[filterId] // Get filter

    // Create default count
    if (!isNumber(filter)) {
      updateCount({ count: count, filterId: filterId })
      return
    }

    if (count === filter) return // Same count documents

    // Update count of the Categories
    updateCount({ count: count, filterId: filterId })
  }, [filters, data?.length])

  useMounted(() => {
    if (autoIncreaseCount) updateDocumentCount()
  }, [filters, data?.length])

  return count
}
