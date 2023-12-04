// Librarys
import { memo } from 'react'

// Components
import Checkbox from '@components/Checkbox'

// Interfaces
import { OptionProps } from './types'

function CheckboxOption({ value, label, onChange, component, isMarkedOption }: OptionProps) {
  return (
    <Checkbox
      value={value}
      onToggle={onChange}
      label={component ?? label}
      checked={isMarkedOption(value)}
      containerClassName="checkbox-option"
    />
  )
}

export default memo(CheckboxOption, (prevProps, nextProps) => {
  return (
    prevProps.onChange === nextProps.onChange &&
    prevProps.isMarkedOption === nextProps.isMarkedOption
  )
})
