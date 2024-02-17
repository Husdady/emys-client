// Interfaces
import { SelectFallbackProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Fallback({ className, textLabelClassName }: SelectFallbackProps) {
  return (
    <div className={classnames([className, 'select'])}>
      <div
        className={classnames([
          textLabelClassName,
          'min-h-[20px] sm:min-h-[18px] sm:min-h-[18px] mb-[0.35rem] bg-gray-300/40 rounded animation-pulse dark:!bg-gray-600'
        ])}
      ></div>

      <div className="w-full select-filters-fallback bg-white rounded animation-pulse border border-gray-400/50 dark:!bg-gray-900 outline outline-1 outline-gray-400/50 dark:outline-gray-300/30 dark:border-gray-300/30 min-h-[43px]"></div>
    </div>
  )
}
