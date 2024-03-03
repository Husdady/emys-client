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
import classnames from '@utils/classnames'
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
  value,
  onChange,
  error,
  customError = {},
  hasError,
  style,
  className,
  containerStyle,
  containerClassName,
  customTextArea
}: TextAreaProps) => {
  const textArea = useTextArea({
    resize: resize,
    hasError: hasError,
    className: className,
    customTextArea: customTextArea,
    containerClassName: containerClassName,
    hidePlaceholderOnFocus: hidePlaceholderOnFocus
  })

  return (
    <div style={containerStyle} className={classnames([containerClassName, 'form-control w-full'])}>
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      <textarea
        {...customTextArea}
        ref={textArea.createRefTextArea}
        value={value}
        rows={rows}
        style={style}
        placeholder={placeholder}
        onBlur={textArea.onBlur}
        onFocus={textArea.onFocus}
        onChange={isUndefined(customTextArea?.onChange) ? onChange : customTextArea?.onChange}
        className={classnames([
          className,
          !resize ? 'resize-none' : null,
          hasError === true ? 'shadow-field-error' : 'focus-shadow-field',
          'appearance-none font-poppins w-full placeholder-gray-400 block p-3 w-full text-gray-700 bg-white rounded-md border leading-tight placeholder:font-normal focus:outline-none font-semibold dark:font-normal dark:text-gray-300 dark:placeholder-gray-400 dark:bg-gray-900 border-gray-400/50 dark:border-gray-400/70 outline outline-1 outline-gray-400/50 shadow-sm dark:outline-gray-400/70 focus:outline-0',
          hidePlaceholderOnFocus
            ? 'focus:placeholder-transparent dark:focus:placeholder-transparent'
            : null
        ])}
      />

      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(Textarea, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.hasError === nextProps.hasError &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.customTextArea === nextProps.customTextArea
  )
})
