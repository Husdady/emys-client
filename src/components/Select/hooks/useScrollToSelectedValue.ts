/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import { useCallback, MutableRefObject } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Constants
import { ACTIVE_OPTION_SELECTOR, OPTIONS_CONTAINER_SELECTOR } from '@components/Select/constants'

export interface UseScrollToSelectedValueParams {
  enableVirtualization?: boolean
  ref: MutableRefObject<HTMLDivElement | null>
}

/**
 * Hook that implements the logic for make a scroll to the selected value
 * @param {UseScrollToSelectedValueParams} params Receive a 'ref' and 'enableVirtualization'
 * @returns {void} Void
 */
export default function useScrollToSelectedValue({
  ref,
  enableVirtualization
}: UseScrollToSelectedValueParams): void {
  // Callback for scroll to active option
  const scrollToSelectedValue = useCallback(() => {
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
    scrollToSelectedValue() // Scroll to active option
  }, [])
}
