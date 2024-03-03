// Librarys
import React, { useCallback } from 'react'

// Interfaces
import { TextAreaProps } from './interfaces'

// Utils
import isFunction from '@utils/isFunction'
import isUndefined from '@utils/isUndefined'

// Constants
import { TextAreaProps as Props } from './constants'

/**
 * Hooks that implement the logic of TextArea component
 * @param {UseTextAreaParams} params Receive some props of TextArea component
 */
export default function useTextArea({
  resize = Props.DEFAULT_RESIZE,
  hidePlaceholderOnFocus = Props.DEFAULT_HIDE_PLACEHOLDER_ON_FOCUS,
  hasError,
  className,
  containerClassName,
  customTextArea
}: TextAreaProps) {
  const refTextArea = React.useRef<HTMLTextAreaElement | null>(null)

  // Event 'blur' in TextArea component
  const handleBlur = useCallback(() => {
    if (refTextArea.current === null) return
    refTextArea.current.classList.remove('shadow-field', 'shadow-field-error')
  }, [])

  // Event 'focus' in TextArea component
  const handleFocus = useCallback(() => {
    if (refTextArea.current === null) return

    // Add class to TextArea component
    refTextArea.current.classList.add(hasError === true ? 'shadow-field-error' : 'shadow-field')
  }, [hasError])

  // Create ref in TextArea component
  const createRefTextArea = useCallback((ref: HTMLTextAreaElement) => {
    refTextArea.current = ref
    if (isUndefined(customTextArea)) return
    if (isFunction(customTextArea.ref)) customTextArea.ref(ref)
  }, [])

  return {
    onBlur: handleBlur,
    onFocus: handleFocus,
    createRefTextArea: createRefTextArea
  }
}
