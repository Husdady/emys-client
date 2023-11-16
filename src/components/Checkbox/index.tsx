// Librarys
import React from 'react'

// Components
import CheckboxContent from './Content'

// Hooks
import useCheckbox from './useCheckbox'

// Interfaces
import { CheckboxProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import classnames from '@utils/classnames'

// Constants
import { CheckboxProps as Props } from './constants'

const Checkbox: React.FC<CheckboxProps> = ({
  label = Props.DEFAULT_LABEL,
  disabled = Props.DEFAULT_DISABLED,
  containerElement = Props.DEFAULT_CONTAINER_ELEMENT,
  customLabel = {},
  checkColor,
  innerClassName,
  inputClassName,
  backgroundColor,
  containerClassName,
  ...props
}: CheckboxProps) => {
  const { isChecked, checkboxId, iconProps, handleOnChange, isExistingDescription } = useCheckbox({
    label: label,
    disabled: disabled,
    checkColor: checkColor,
    ...props
  })

  return React.createElement(
    containerElement,
    {
      className: classnames([
        containerClassName,
        !isExistingDescription ? 'items-center' : null,
        isString(checkColor) ? 'has-check-color' : null,
        'checkbox flex select-none'
      ])
    },
    <CheckboxContent
      label={label}
      disabled={disabled}
      value={props.value}
      iconProps={iconProps}
      checkboxId={checkboxId}
      onChange={handleOnChange}
      description={props.description}
      innerClassName={innerClassName}
      backgroundColor={backgroundColor}
      labelStyle={customLabel?.style}
      isExistingDescription={isExistingDescription}
      checked={isUndefined(props.checked) ? isChecked : props.checked}
      inputClassName={classnames([
        inputClassName,
        disabled ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer',
        'w-5 h-5 status appearance-none border-2 checked:!border-transparent focus:outline-none dark:border-gray-500'
      ])}
      labelClassName={classnames([
        'font-semibold dark:font-normal select-none',
        customLabel.className,
        disabled
          ? 'text-gray-400 dark:text-gray-600 hover:cursor-not-allowed'
          : 'text-gray-700 dark:text-gray-300 hover:cursor-pointer'
      ])}
    />
  )
}

export default React.memo(Checkbox, (prevProps, nextProps) => {
  return prevProps.checked === nextProps.checked && prevProps.onToggle === nextProps.onToggle
})
