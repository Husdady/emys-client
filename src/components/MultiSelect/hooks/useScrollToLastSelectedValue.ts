/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import { useCallback, MutableRefObject } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Constants
import {
  ACTIVE_OPTION_SELECTOR,
  OPTIONS_CONTAINER_SELECTOR
} from '@components/MultiSelect/constants'

export interface UseScrollToLastSelectedValueParams {
  enableVirtualization?: boolean
  ref: MutableRefObject<HTMLDivElement | null>
}

/**
 * Hook that implements the logic for make a scroll to the last selected value
 * @param {MutableRefObject<HTMLDivElement | null>} ref Wrapper ref
 * @returns {void} Void
 */
export default function useScrollToLastSelectedValue({
  ref,
  enableVirtualization
}: UseScrollToLastSelectedValueParams): void {
  // Callback for scroll to the last marked option
  const scrollToLastSelectedValue = useCallback(() => {
    if (enableVirtualization === true) return // Not make scroll for virtualization

    const elementRef = ref.current
    if (elementRef === null) return // Stop function

    // Get actived option
    const activedOption = elementRef.querySelector(ACTIVE_OPTION_SELECTOR) as HTMLElement
    if (activedOption === null) return // Stop function

    // Get actived option
    const selectOptionsTag = elementRef.querySelector(OPTIONS_CONTAINER_SELECTOR)
    if (selectOptionsTag === null) return // Validate options tag

    const liOffsetTop = activedOption.offsetTop // Get the LI offset from the parent

    // Calculate scroll for go to the selected options
    const divScrollTop = liOffsetTop - selectOptionsTag.clientHeight / 2

    // Scroll to selected option
    selectOptionsTag.scrollTop = divScrollTop
  }, [])

  useMounted(() => {
    scrollToLastSelectedValue() // Scroll to the last active option
  }, [])
}
