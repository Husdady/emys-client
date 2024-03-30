// Librarys
import React from 'react'

// Hooks
import useRadioButton from './hooks/useRadioButton'

// Interfaces
import { RadioButtonProps } from './interfaces'

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
  const radioButton = useRadioButton({
    id: id,
    color: color,
    style: style,
    disabled: disabled,
    className: className,
    customContainer: customContainer
  })

  return (
    <li role="button" style={customContainer?.style} className={radioButton.className}>
      <input
        type="radio"
        id={radioButton.id}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        className={radioButton.input}
        onChange={onChange}
      />

      <label
        htmlFor={radioButton.id}
        style={radioButton.label.style}
        className={radioButton.label.className}
      >
        {label}
      </label>
    </li>
  )
}

export default React.memo(RadioButton, (prevProps, nextProps) => {
  return prevProps.checked === nextProps.checked && prevProps.disabled === nextProps.disabled
})
