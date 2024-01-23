// Librarys
import React, { useCallback } from 'react'

// Interfaces
import { TextAreaProps } from './interfaces'

// Utils
import isFunction from '@utils/isFunction'
import isUndefined from '@utils/isUndefined'
import classnames from '@utils/classnames'

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

  // Definir clases en etiquetas HTML
  const classes = React.useMemo(() => {
    return {
      // Definir clases del contenedor
      container: classnames([containerClassName, 'form-control w-full']),

      // Definir clases del textarea
      textarea: classnames([
        className,
        !resize ? 'resize-none' : null,
        'appearance-none font-poppins w-full placeholder-gray-400 block p-3 w-full text-gray-700 bg-white rounded-md border leading-tight placeholder:font-normal focus:outline-none font-semibold dark:font-normal dark:text-gray-300 dark:placeholder-gray-400 dark:bg-gray-900 border-gray-400/50 dark:border-gray-400/70 outline outline-1 outline-gray-400/50 shadow-sm dark:outline-gray-400/70 focus:outline-0',
        hidePlaceholderOnFocus
          ? 'focus:placeholder-transparent dark:focus:placeholder-transparent'
          : null
      ])
    }
  }, [])

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

  // Clases dinámicas del textarea
  const textareaClasses = React.useMemo(() => {
    return classnames([
      classes.textarea,
      hasError === true ? 'shadow-field-error' : 'focus-shadow-field'
    ])
  }, [hasError])

  return {
    onBlur: handleBlur,
    onFocus: handleFocus,
    textareaClasses: textareaClasses,
    containerClassName: classes.container,
    createRefTextArea: createRefTextArea
  }
}
