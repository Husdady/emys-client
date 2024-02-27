// Components
import {
  createBenefitsItem,
  createUsageModeItem,
  createDescriptionItem,
  createCharacteristicsItem,
  createMainInformationItem,
  createExtraInformationItem
} from './items'

// Hooks
import useMounted from '@hooks/useMounted'
import { useRef, useMemo, useState, useCallback } from 'react'

// Interfaces
import { CollapseProps } from 'antd/lib'
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { FOCUS_DELAY, QUERY_SELECTOR, PRODUCT_MAIN_INFORMATION } from './constants'

/**
 * Hook for implements the logic of the ProductFields component
 * @param {Product} product Product
 */
export default function useProductFields(product: Product) {
  const timeout = useRef<ReturnType<typeof setTimeout> | number>(0)
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const [activeKey, setActiveKey] = useState(PRODUCT_MAIN_INFORMATION)

  // Event 'focus' on 'x' panel
  const handleFocusPanel = useCallback(
    (key: string) => {
      clearTimeout(timeout.current)

      // Key not found
      if (!contentRefs.current[key]) {
        const productInformation = document.querySelector(QUERY_SELECTOR)

        // Make focus to the Item content
        timeout.current = setTimeout(() => {
          productInformation?.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, FOCUS_DELAY)

        return
      }

      // Make focus to the Item content
      timeout.current = setTimeout(() => {
        contentRefs.current[key]?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, FOCUS_DELAY)
    },
    [contentRefs.current]
  )

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
        children: (
          <div
            ref={(ref) => {
              contentRefs.current[el.key] = ref
            }}
          >
            {el.children}
          </div>
        )
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
      handleFocusPanel(newActiveKey)
    },
    [handleFocusPanel]
  )

  useMounted(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return {
    items: items,
    activeKey: activeKey,
    handleChangeKey: handleChangeKey
  }
}
