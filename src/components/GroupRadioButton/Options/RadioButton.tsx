// Librarys
import React from 'react'

// Interfaces
import { RadioButtonProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { DEFAULT_CHECKED, DEFAULT_OPTION_LABEL } from './constants'

const RadioButton: React.FC<RadioButtonProps> = ({
  label = DEFAULT_OPTION_LABEL,
  checked = DEFAULT_CHECKED,
  name,
  color,
  disabled,
  id,
  value,
  onChange,
  style,
  className,
  customContainer
}: RadioButtonProps) => {
  const tmpId = React.useId() // Create a temporal id

  // Define the radio button id
  const radioButtonId = React.useMemo<string>(
    () => (isString(id) && !isEmptyString(id) ? id : tmpId),
    [id]
  )

  return (
    <li
      role="button"
      style={customContainer?.style}
      className={classnames([
        customContainer?.className,
        disabled ? 'disabled' : null,
        'radio-button relative hover:cursor-default'
      ])}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={radioButtonId}
        disabled={disabled}
        onChange={onChange}
        defaultChecked={checked}
        className="hidden"
      />

      <label
        style={style}
        htmlFor={radioButtonId}
        className={classnames([
          color,
          className,
          !disabled
            ? 'hover:cursor-pointer font-semibold text-gray-700 dark:text-gray-200 dark:font-normal'
            : 'text-gray-400 hover:cursor-not-allowed pointer-events-none',
          'relative inline-block select-none hover:cursor-pointer'
        ])}
      >
        {label}
      </label>
    </li>
  )
}

export default React.memo(RadioButton, (prevProps, nextProps) => {
  return prevProps.checked === nextProps.checked && prevProps.disabled === nextProps.disabled
})
