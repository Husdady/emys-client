// Librarys
import React from 'react'

// Component
import Sort from '@assets/icons/sort'
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'
import ChevronDown from '@assets/icons/chevron-down'
import OptionSelected from './OptionSelected'

// Interfaces
import { SelectProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import { SORT, DEFAULT_MODE } from './constants'

const Select: React.FC<SelectProps> = ({
  mode = DEFAULT_MODE,
  label = {},
  customError = {},
  error,
  textLabel,
  containerStyle,
  containerClassName,
  ...props
}: SelectProps) => {
  // Define the icon for the Select component
  const SelectIcon = React.useCallback(() => {
    if (mode === SORT) return <Sort className="sort-icon" />
    return <ChevronDown />
  }, [])

  return (
    <div style={containerStyle} className={classnames(['select relative', containerClassName])}>
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />
      <OptionSelected {...props} icon={<SelectIcon />} />
      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(Select, (prevProps, nextProps) => {
  return (
    prevProps.error === nextProps.error &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.selectedValue === nextProps.selectedValue
  )
})
