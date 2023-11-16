// Librarys
import { memo } from 'react'

// Interfaces
import { CheckboxPlaceholderProps } from '@components/Checkbox/interfaces'

// Utils
import createList from '@utils/createList'
import classnames from '@utils/classnames'

// Constants
import { PlaceholderProps } from '../constants'

function CheckboxPlaceholderWithDescription({
  totalRows = PlaceholderProps.DEFAULT_TOTAL_ROWS,
  className,
  rowClassName,
  squareClassName
}: CheckboxPlaceholderProps) {
  return (
    <li className={classnames([className, 'w-full flex items-start gap-x-2 mb-3'])}>
      <div
        className={classnames([
          squareClassName,
          'h-5 w-5 min-w-[1.25rem] min-h-[1.25rem] animate-pulse bg-gray-200 dark:bg-gray-600 rounded'
        ])}
      />

      <ul className="w-full">
        {createList(totalRows).map((i) => (
          <li
            key={i}
            className={classnames([rowClassName, i < totalRows ? 'mb-2' : null, 'flex flex-col'])}
          >
            <span className="h-3 w-10/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm mb-[0.5rem]" />

            <span className="h-2 w-11/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm mb-[0.35rem]" />

            <span className="h-2 w-8/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm mb-[0.35rem]" />

            <span className="h-2 w-9/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm mb-[0.35rem]" />

            <span className="h-2 w-7/12 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-sm" />
          </li>
        ))}
      </ul>
    </li>
  )
}

export default memo(CheckboxPlaceholderWithDescription)
