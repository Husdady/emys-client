// Hooks
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@hooks/screen/useBiggestTabletScreen'
import { useMemo, useState, useCallback } from 'react'

// Interfaces
import { ProductFieldsProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PRODUCT_MAIN_INFORMATION } from './constants'

export type Params = Pick<ProductFieldsProps, 'innerInformationRef'>

/**
 * Hook for implements the logic of Collapse component
 * @param {Params} params Receive a 'innerInformationRef'
 */
export default function useActiveKey({ innerInformationRef }: Params) {
  const [canFocus, setCanFocus] = useState(false)
  const isBiggestTableScreen = useBiggestTabletScreen()

  // Define the default active key
  const defaultActiveKey = useMemo(() => {
    return isBiggestTableScreen ? '' : PRODUCT_MAIN_INFORMATION
  }, [isBiggestTableScreen])

  const [activeKey, setActiveKey] = useState(defaultActiveKey)

  // Callback for check if inner information element has a vertical scrollbar
  const checkIfHasVerticalScrollInnerInformation = useCallback(() => {
    const element = innerInformationRef.current
    if (!element) return

    const scrollHeight = element.scrollHeight // Get the scroll height
    const clientHeight = element.clientHeight // Get the client height

    return scrollHeight > clientHeight // Check scrollbar
  }, [])

  // Callback for fix padding right of the inner information
  const fixPaddingRight = useCallback(
    ({ flag }: { flag?: boolean } = {}) => {
      if (isBiggestTableScreen) return

      // Check vertical scrollbar
      const hasVerticalScrollbar = checkIfHasVerticalScrollInnerInformation()

      if (flag ?? hasVerticalScrollbar) {
        innerInformationRef.current?.classList.remove('pr-3')
        return innerInformationRef.current?.classList.add('pr-1.5')
      }

      innerInformationRef.current?.classList.remove('pr-1.5')
      return innerInformationRef.current?.classList.add('pr-3')
    },
    [isBiggestTableScreen]
  )

  // Callback for handle the change event of the Collapse component
  const handleChangeKey = useCallback(
    (param: string | string[]) => {
      let newActiveKey = ''

      // Allows can focus on Focus component
      if (!canFocus) {
        setCanFocus(true)
      }

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
      fixPaddingRight({ flag: !isEmptyString(newActiveKey) })
    },
    [canFocus, isBiggestTableScreen]
  )

  useMounted(() => {
    fixPaddingRight()
  }, [])

  return {
    canFocus: canFocus,
    activeKey: activeKey,
    handleChangeKey: handleChangeKey,
    defaultActiveKey: defaultActiveKey
  }
}
