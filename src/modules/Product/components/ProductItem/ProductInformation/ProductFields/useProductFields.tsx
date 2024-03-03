// Components
import Focus from '@components/Focus'

// Hooks
import { useMemo } from 'react'
import useActiveKey from './useActiveKey'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { ProductFieldsProps } from './interfaces'

// Data
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem,
  createMainInformationItem,
  createExtraInformationItem
} from './items'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {ProductFieldsProps} props Receive props of the ProductsFields component
 */
export default function useProductFields({ innerInformationRef, ...props }: ProductFieldsProps) {
  const activeKeyData = useActiveKey({
    innerInformationRef: innerInformationRef
  })

  // Define the product items
  const items = useMemo<CollapseProps['items']>(() => {
    return [
      createMainInformationItem,
      createDescriptionItem,
      createUsageModeItem,
      createBenefitsItem,
      createCharacteristicsItem,
      createExtraInformationItem
    ]
      .map((cb) => cb(props))
      .map((el) => ({
        ...el,
        children: <Focus canFocus={activeKeyData.canFocus}>{el.children}</Focus>
      }))
  }, [props, activeKeyData.canFocus])

  return {
    items: items,
    ...activeKeyData
  }
}
