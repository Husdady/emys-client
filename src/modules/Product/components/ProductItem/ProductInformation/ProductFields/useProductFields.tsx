// Components
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem
} from './items'

// Hooks
import { useMemo } from 'react'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { Product } from '@modules/Products/api/interfaces'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {Product} product Product
 */
export default function useProductFields(product: Product) {
  // Define the product items
  const items = useMemo<CollapseProps['items']>(() => {
    return [
      createDescriptionItem,
      createUsageModeItem,
      createBenefitsItem,
      createCharacteristicsItem
    ].map((cb) => cb(product))
  }, [product])

  return {
    items: items
  }
}
