// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

export default function SelectFiltersFallback({ className }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'select-filters-fallback bg-white rounded animation-pulse border border-gray-400/50 dark:!bg-gray-900 outline outline-1 outline-gray-400/50 dark:outline-gray-300/30 dark:border-gray-300/30'
      ])}
    ></div>
  )
}
