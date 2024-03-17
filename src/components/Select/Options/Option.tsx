// Librarys
import { isValidElement, useCallback } from 'react'

// Types
import type { OptionProps } from './types'

// Interfaces
import { Option as OptionItem } from '@components/Select/interfaces'

export default function Option({ value, label, markup, onChange }: OptionProps) {
  // Callback 'onChange' when an option is selected
  const handleOnChange = useCallback(() => {
    // Define option
    const option: OptionItem = {
      value: value,
      label: label
    }

    if (isValidElement(markup)) {
      option.markup = markup
    }

    // Execute 'onChange' event
    onChange(option)
  }, [onChange])

  return (
    <button onClick={handleOnChange} className="option">
      {isValidElement(markup) ? markup : label}
    </button>
  )
}
