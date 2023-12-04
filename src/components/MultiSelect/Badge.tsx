// Librarys
import React from 'react'

// Interfaces
import { BadgeProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

const Badge: React.FC<BadgeProps> = ({ values, options, noSelectionLabel }: BadgeProps) => {
  // Define the first option
  const firstOption = React.useMemo(
    () => options.find((item) => item?.value === values[0]),
    [values, options]
  )

  // Get the rest options
  const filteredValues = React.useMemo(
    () => values.filter((item) => item !== firstOption?.value),
    [values, firstOption]
  )

  return (
    <span className="Badge-options-selected py-2 text-inherit font-poppins leading-tight">
      {!isUndefined(firstOption) ? firstOption.label : noSelectionLabel}

      {filteredValues.length > 0 && (
        <span className="max-w-[180px] font-lexend overflow-x-hidden border border-gray-300 dark:border-gray-400 bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300 ml-2 text-[0.75rem] py-[0.1rem] rounded px-[0.35rem]">
          + {filteredValues.length}
        </span>
      )}
    </span>
  )
}

export default React.memo(Badge, (prevProps, nextProps) => {
  return prevProps.values === nextProps.values && prevProps.options === nextProps.options
})
