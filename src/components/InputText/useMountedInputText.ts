// Librarys
import { useCallback, MutableRefObject } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Types
import type { UseInputTextParams } from './types'

// Constants
import { PASSWORD, InputProps as Props } from './constants'

interface Params extends UseInputTextParams {
  refInner: MutableRefObject<HTMLDivElement | null>
  refInput: MutableRefObject<HTMLInputElement | null>
}

/**
 * Hook for implements the mounted logic of the input text
 * @param {Params} params Receive props of the InputText component
 */
export default function useMountedInputText({
  type,
  refInput,
  refInner,
  hasError,
  autoFocus,
  isShowingPassword,
  preventAutoComplete
}: Params) {
  // Event 'onFocus' of Inner tag
  const handleOnFocus = useCallback(() => {
    // Define the shadow type
    const shadowType = hasError === true ? 'shadow-field-error' : 'shadow-field'

    if (preventAutoComplete === true && refInput.current !== null) {
      refInput.current.removeAttribute('readOnly')
    }

    if (refInner.current === null) return
    refInner.current.classList.add(shadowType)
    refInput.current?.focus() // Make focus to the input
  }, [hasError, refInner.current, preventAutoComplete])

  useMounted(() => {
    if (autoFocus) handleOnFocus()
  }, [autoFocus, handleOnFocus])

  useMounted(() => {
    // Validate input type
    if (type !== PASSWORD && isShowingPassword === true) {
      throw new Error(Props.ERROR_TYPE_PASSWORD)
    }
  }, [])
}
