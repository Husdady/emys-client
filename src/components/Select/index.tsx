// Librarys
import React from 'react'

// Component
import Sort from '@components/Icons/Sort'
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'
import ChevronDown from '@components/Icons/ChevronDown'
import OptionSelected from './OptionSelected'

// Interfaces
import { SelectProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

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
    <div
      style={containerStyle}
      className={classnames([
        'select relative',
        containerClassName,
        props.canSearchOptions && !isEmptyArray(props.options) ? 'searchable' : null
      ])}
    >
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      <OptionSelected
        {...props}
        icon={<SelectIcon />}
        hasError={isString(error) && !isEmptyString(error)}
      />

      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(Select, (prevProps, nextProps) => {
  return (
    prevProps.error === nextProps.error &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.selectedValue === nextProps.selectedValue
  )
})
