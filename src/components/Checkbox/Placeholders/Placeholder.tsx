// Librarys
import { memo } from 'react'

// Interfaces
import { CheckboxPlaceholderProps } from '../interfaces'

// Utils
import createList from '@utils/createList'
import classnames from '@utils/classnames'

// Constants
import { PlaceholderProps } from '../constants'

function CheckboxPlaceholder({
  totalRows = PlaceholderProps.DEFAULT_TOTAL_ROWS,
  className,
  rowClassName,
  squareClassName
}: CheckboxPlaceholderProps) {
  return (
    <li className={classnames([className, 'w-full flex items-center gap-x-2'])}>
      <div
        className={classnames([
          squareClassName,
          'h-5 w-5 animate-pulse bg-gray-200 dark:bg-gray-600 rounded'
        ])}
      />

      <ul className="w-full">
        {createList(totalRows).map((i) => (
          <li
            key={i}
            className={classnames([
              rowClassName,
              i < totalRows ? 'mb-2' : null,
              'h-3 w-10/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm'
            ])}
          />
        ))}
      </ul>
    </li>
  )
}

export default memo(CheckboxPlaceholder)
