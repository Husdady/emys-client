// Interfaces
import { SearchFallbackProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Fallback({ className, textLabelClassName }: SearchFallbackProps) {
  return (
    <div className={className}>
      <div
        className={classnames([
          textLabelClassName,
          'min-h-[20px] sm:min-h-[18px] mb-[0.35rem] bg-gray-300/60 rounded animation-pulse dark:!bg-gray-700'
        ])}
      ></div>

      <div className="w-full min-h-[47px] sm:min-h-[43px] rounded-lg animation-pulse rounded animation-pulse search-filter-fallback py-[0.73rem] outline outline-1 border !border-gray-400/50 outline-gray-400/50 dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40"></div>
    </div>
  )
}
