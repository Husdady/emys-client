// Librarys
import React from 'react'

// Components
import InputError from '@components/InputError'
import InputLabel from '@components/InputLabel'

// Hooks
import useTextArea from './useTextArea'

// Interfaces
import { TextAreaProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

// Constants
import { TextAreaProps as Props } from './constants'

const Textarea: React.FC<TextAreaProps> = ({
  rows = Props.DEFAULT_ROWS,
  resize = Props.DEFAULT_RESIZE,
  placeholder = Props.DEFAULT_PLACEHOLDER,
  hidePlaceholderOnFocus = Props.DEFAULT_HIDE_PLACEHOLDER_ON_FOCUS,
  label = {},
  textLabel,
  error,
  customError = {},
  hasError,
  style,
  className,
  containerStyle,
  containerClassName,
  customTextArea
}: TextAreaProps) => {
  const textAreaSettings = useTextArea({
    resize: resize,
    hasError: hasError,
    className: className,
    customTextArea: customTextArea,
    containerClassName: containerClassName,
    hidePlaceholderOnFocus: hidePlaceholderOnFocus
  })

  return (
    <div style={containerStyle} className={textAreaSettings.containerClassName}>
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      <textarea
        {...customTextArea}
        ref={textAreaSettings.createRefTextArea}
        rows={rows}
        style={style}
        placeholder={placeholder}
        onBlur={textAreaSettings.onBlur}
        onFocus={textAreaSettings.onFocus}
        className={textAreaSettings.textareaClasses}
      />

      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(Textarea, (prevProps, nextProps) => {
  return prevProps.error === nextProps.error && prevProps.hasError === nextProps.hasError
})
