// Hooks
import { useState, useCallback } from 'react'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'

// Interfaces
import { ProductFieldsProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { SCROLL_TO_PARAMS } from '../constants'
import { PRODUCT_MAIN_INFORMATION } from './constants'
import useMounted from '@root/src/hooks/useMounted'

export type Params = Pick<ProductFieldsProps, 'innerInformationRef'>

/**
 * Hook for implements the logic of Collapse component
 * @param {Params} params Receive a 'innerInformationRef'
 */
export default function useActiveKey({ innerInformationRef }: Params) {
  const isBiggestTableScreen = useBiggestTabletScreen()
  const [activeKey, setActiveKey] = useState(isBiggestTableScreen ? '' : PRODUCT_MAIN_INFORMATION)

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
      console.log({ hasVerticalScrollbar })
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

      if (isEmptyString(newActiveKey) && !isBiggestTableScreen) {
        window.scrollTo(SCROLL_TO_PARAMS)
      }
    },
    [isBiggestTableScreen]
  )

  useMounted(() => {
    fixPaddingRight()
  }, [])

  return {
    activeKey: activeKey,
    handleChangeKey: handleChangeKey
  }
}
