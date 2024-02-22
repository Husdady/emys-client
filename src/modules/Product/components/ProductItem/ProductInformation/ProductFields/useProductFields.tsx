// Components
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem
} from './items'

// Hooks
import { useCallback, useMemo, useState } from 'react'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { Product } from '@modules/Products/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'
import isEmptyArray from '@root/src/utils/isEmptyArray'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {Product} product Product
 */
export default function useProductFields(product: Product) {
  const [activeKey, setActiveKey] = useState(PRODUCT_DESCRIPTION)

  // Define the product items
  const items = useMemo<CollapseProps['items']>(() => {
    return [
      createDescriptionItem,
      createUsageModeItem,
      createBenefitsItem,
      createCharacteristicsItem
    ].map((cb) => cb(product))
  }, [product])

  // Callback for handle the change event of the Collapse component
  const handleChangeKey = useCallback((param: string | string[]) => {
    let newActiveKey = ''

    // Param is an array
    if (Array.isArray(param) && !isEmptyArray(param)) {
      const lastParam = param[param.length - 1]
      newActiveKey = lastParam
    }

    // Param is an strng
    if (isString(param) && !isEmptyString(param)) {
      newActiveKey = param
    }

    setActiveKey(newActiveKey)
  }, [])

  return {
    items: items,
    activeKey: activeKey,
    handleChangeKey: handleChangeKey
  }
}
