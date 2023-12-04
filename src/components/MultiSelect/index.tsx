// Librarys
import React from 'react'

// Component
import OptionsSelected from './OptionsSelected'
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'

// Interfaces
import { MultiSelectProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

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
      className={classnames(['multi-select relative', containerClassName])}
    >
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />
      <OptionsSelected {...props} />
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
