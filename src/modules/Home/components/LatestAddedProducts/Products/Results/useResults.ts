// Librarys
import { useState } from 'react'

// Hooks
import useDrag from '@modules/Product/hooks/useDrag'

// Interfaces
import { ProductsProps } from '@modules/Home/components/LatestAddedProducts/Products/interfaces'

/**
 * Hook for implements the logic of the Results component
 * @param {Omit<ProductsProps, 'isLoading'>} params Receive props of the Products component
 */
export default function useResults({
  products,
  hasScrollbar,
  productItemsRef
}: Omit<ProductsProps, 'isLoading'>) {
  const [results, setResults] = useState(products)
  const dragData = useDrag({ hasScrollbar: hasScrollbar, productItemsRef: productItemsRef })

  return {
    ...dragData,
    results: results,
    setResults: setResults
  }
}
