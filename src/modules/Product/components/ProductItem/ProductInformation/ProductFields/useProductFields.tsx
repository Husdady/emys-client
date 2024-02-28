// Components
import Focus from '@components/Focus'
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem,
  createMainInformationItem,
  createExtraInformationItem
} from './items'

// Hooks
import { useMemo, useState, useCallback } from 'react'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { SCROLL_TO_PARAMS, PRODUCT_MAIN_INFORMATION } from './constants'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {Product} product Product
 */
export default function useProductFields(product: Product) {
  const isBiggestTableScreen = useBiggestTabletScreen()
  const [activeKey, setActiveKey] = useState(PRODUCT_MAIN_INFORMATION)

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
      .map((cb) => cb(product))
      .map((el) => ({
        ...el,
        children: <Focus>{el.children}</Focus>
      }))
  }, [product])

  // Callback for handle the change event of the Collapse component
  const handleChangeKey = useCallback(
    (param: string | string[]) => {
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

      if (isEmptyString(newActiveKey) && !isBiggestTableScreen) {
        window.scrollTo(SCROLL_TO_PARAMS)
      }
    },
    [isBiggestTableScreen]
  )

  return {
    items: items,
    activeKey: activeKey,
    handleChangeKey: handleChangeKey
  }
}
