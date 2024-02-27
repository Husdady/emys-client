// Components
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem,
  createExtraInformationItem
} from './items'

// Hooks
import { useMemo, useState, useCallback } from 'react'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { ProductByCode } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'
import isEmptyArray from '@root/src/utils/isEmptyArray'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {ProductByCode} product Product
 */
export default function useProductFields(product: ProductByCode) {
  const [activeKey, setActiveKey] = useState(PRODUCT_DESCRIPTION)

  // Define the product items
  const items = useMemo<CollapseProps['items']>(() => {
    return [
      createDescriptionItem,
      createUsageModeItem,
      createBenefitsItem,
      createCharacteristicsItem,
      createExtraInformationItem
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
