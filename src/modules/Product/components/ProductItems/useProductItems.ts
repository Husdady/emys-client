// Hooks
import useDrag from '@modules/Product/hooks/useDrag'
import useValidateRequest from '@hooks/useValidateRequest'

// Types
import type { ProductItemsProps } from './interfaces'

/**
 * Hook for implements the logic of the ProductItems data
 */
export default function useProductItems({
  hasScrollbar,
  productItemsRef
}: Omit<ProductItemsProps, 'products'>) {
  const validateRequestData = useValidateRequest()

  const dragData = useDrag({
    hasScrollbar: hasScrollbar,
    productItemsRef: productItemsRef
  })

  return {
    ...dragData,
    ...validateRequestData
  }
}
