// Librarys
import React from 'react'

// Component
import OptionsSelected from './OptionsSelected'
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'

// Interfaces
import { MultiSelectProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

const MultiSelect: React.FC<MultiSelectProps> = ({
  label = {},
  customError = {},
  error,
  textLabel,
  containerStyle,
  containerClassName,
  ...props
}: MultiSelectProps) => {
  return (
    <div
      style={containerStyle}
      className={classnames([
        'multi-select relative',
        containerClassName,
        props.canSearchOptions && !isEmptyArray(props.options) ? 'searchable' : null
      ])}
    >
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />
      <OptionsSelected {...props} hasError={isString(error) && !isEmptyString(error)} />
      <InputError {...customError} value={error} />
    </div>
  )
}

export default React.memo(MultiSelect, (prevProps, nextProps) => {
  return (
    prevProps.error === nextProps.error &&
    prevProps.options === nextProps.options &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.selectedValues === nextProps.selectedValues
  )
})
