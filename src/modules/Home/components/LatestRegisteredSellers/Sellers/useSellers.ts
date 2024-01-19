// Librarys
import { useState } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { SellersProps } from './interfaces'

/**
 * Hook for implements the logic of the Sellers component
 * @param {SellersProps} params Receive props of the Sellers component
 */
export default function useSellers({ sellers, isLoading }: SellersProps) {
  const [results, setResults] = useState(sellers)

  useMounted(() => {
    if (!isLoading) {
      setResults(sellers)
    }
  }, [sellers, isLoading])

  return {
    results: results,
    setResults: setResults
  }
}
