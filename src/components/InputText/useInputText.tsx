// Librarys
import { useRef, useMemo, useCallback, FocusEvent, KeyboardEvent } from 'react'

// Hooks
import useMountedInputText from './useMountedInputText'

// Types
import type { UseInputTextParams } from './types'

// Interfaces
import { IconProps } from '@components/Icon/interfaces'

// Utils
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import classnames from '@utils/classnames'

// Constants
import { InputProps as Props } from './constants'

/**
 * Generate the logic of the InputText component
 * @param {UseInputTextParams} props Receive InputText component props
 */
export default function useInputText({
  type = Props.DEFAULT_TYPE,
  hidePlaceholderOnFocus = Props.DEFAULT_HIDE_PLACEHOLDER_ON_FOCUS,
  hasError,
  ...props
}: UseInputTextParams) {
  const refInner = useRef<HTMLDivElement | null>(null)
  const refInput = useRef<HTMLInputElement | null>(null)
  const refContainer = useRef<HTMLDivElement | null>(null)

  // Event 'onChange' in Container
  const handleOnChange = useMemo(
    () => (isUndefined(props.customInput?.onChange) ? props.onChange : props.customInput?.onChange),
    [props.onChange, props.customInput]
  )

  // Component settings
  const placeholder = useMemo(() => {
    let inputPlaceholder: string = Props.DEFAULT_PLACEHOLDER

    if (type === 'email') inputPlaceholder = Props.DEFAULT_EMAIL_PLACEHOLDER

    if (type === 'password') {
      inputPlaceholder = Props.DEFAULT_PASSWORD_PLACEHOLDER
    }

    // Placeholder by defect for show
    return isString(props.placeholder) ? props.placeholder : inputPlaceholder
  }, [props.placeholder])

  // Callback for remove shadow effect
  const removeShadow = useCallback(() => {
    if (refInner.current === null) return
    refInner.current.classList.remove('shadow-field', 'shadow-field-error')
  }, [refInner.current])

  // Event 'onClick' in Inner
  const handleOnClick = useCallback(() => {
    if (refInput.current === null) return
    refInput.current.focus()
  }, [refInput.current])

  // Create ref with Input component
  const createRefInput = useCallback(
    (ref: HTMLInputElement) => {
      refInput.current = ref
      props?.customInput?.ref?.(ref)
    },
    [refInput.current, props?.customInput]
  )

  // Event 'keyDown' in Inner
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') props.onPressEnter?.(e)
    },
    [props.onPressEnter]
  )

  // Change the Input type to 'text' or 'password'
  const changeInputType = useCallback(
    (inputType: 'text' | 'password') => {
      if (refInput.current === null) return
      refInput.current.type = inputType
    },
    [refInput.current]
  )

  // Event 'onFocus' of Inner tag
  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      // Define the shadow type
      const shadowType = hasError === true ? 'shadow-field-error' : 'shadow-field'

      if (props.preventAutoComplete === true) {
        e.target.removeAttribute('readOnly')
      }

      props.onFocus?.(e)

      if (refInner.current === null) return
      refInner.current.classList.add(shadowType)
    },
    [hasError, props.onFocus, refInner.current, props.preventAutoComplete]
  )

  // Event 'onBlur' at the Input tag
  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      if (refContainer.current === null) return
      e.stopPropagation()

      // Get inner
      const inner = refContainer.current.querySelector('.inner')
      if (inner === null) return

      // Check if inner exists
      const didClick = inner.contains(e.relatedTarget) // Blur on inner

      if (!didClick) {
        removeShadow() // Remove shadow
        props.onBlur?.(e) // Execute blur callback
      }
    },
    [props.onBlur, refContainer.current]
  )

  // Define the custom props for the clear icon
  const clearIconSettings = useMemo<Partial<IconProps>>(() => {
    return {
      role: 'button',
      size: 'smaller',
      onClick: props.onClear,
      useHoverEffect: true,
      className: classnames([props.clearIconClassName, 'clear-icon text-gray-400 flex items-center justify-center'])
    }
  }, [props.onClear, props.clearIconClassName])

  useMountedInputText({
    type: type,
    refInput: refInput,
    refInner: refInner,
    hasError: hasError,
    autoFocus: props.autoFocus,
    isShowingPassword: props.isShowingPassword,
    preventAutoComplete: props.preventAutoComplete
  })

  return {
    refInner: refInner,
    refContainer: refContainer,
    placeholder: placeholder,
    handleOnBlur: handleOnBlur,
    handleOnFocus: handleOnFocus,
    handleKeyDown: handleKeyDown,
    handleOnClick: handleOnClick,
    handleOnChange: handleOnChange,
    createRefInput: createRefInput,
    changeInputType: changeInputType,
    clearIconSettings: clearIconSettings
  }
}
