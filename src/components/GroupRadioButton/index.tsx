// Librarys
import React from 'react'
import { Empty } from 'antd'

// Components
import InputLabel from '@components/InputLabel'
import InputError from '@components/InputError'
import RadioButtonOptions from './Options'

// Interfaces
import { GroupRadioButtonProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import {
  DEFAULT_NAME,
  DEFAULT_COLOR,
  DEFAULT_OPTIONS,
  DEFAULT_EMPTY_LABEL
} from './Options/constants'

const GroupRadioButton: React.FC<GroupRadioButtonProps> = ({
  name = DEFAULT_NAME,
  color = DEFAULT_COLOR,
  options = DEFAULT_OPTIONS,
  emptyLabel = DEFAULT_EMPTY_LABEL,
  label = {},
  textLabel,
  error,
  customError = {},
  onChange,
  defaultOption
}: GroupRadioButtonProps) => {
  return (
    <div className="group-radio-button overflow-hidden">
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      {isEmptyArray(options) && (
        <Empty
          description={emptyLabel}
          className="font-poppins !text-base h-96 flex flex-col justify-center dark:text-gray-200"
        />
      )}

      {!isEmptyArray(options) && (
        <div className='flex flex-col gap-y-3 mt-3'>
          <RadioButtonOptions
            name={name}
            color={color}
            options={options}
            onChange={onChange}
            defaultOption={defaultOption}
          />

          <InputError {...customError} value={error} />
        </div>
      )}
    </div>
  )
}

export default React.memo(GroupRadioButton, (prevProps, nextProps) => {
  return prevProps.error === nextProps.error && prevProps.defaultOption === nextProps.defaultOption
})
