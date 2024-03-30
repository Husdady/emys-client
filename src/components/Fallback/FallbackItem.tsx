// Interfaces
import { FallbackProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function FallbackItem({
  classComp,
  classLabel,
  classContainer
}: Omit<FallbackProps, 'children'>) {
  return (
    <div className={classnames(['fallback-item w-full flex flex-col', classContainer])}>
      <div
        className={classnames([
          classLabel,
          'fallback-text-label min-h-[20px] sm:min-h-[18px] mb-[0.35rem] bg-gray-300/60 rounded animation-pulse dark:!bg-gray-700'
        ])}
      ></div>

      <div
        className={classnames([
          classComp,
          'fallback-input w-full min-h-[47px] sm:min-h-[43px] rounded-lg animation-pulse rounded animation-pulse search-filter-fallback py-[0.73rem] outline outline-1 border !border-gray-400/50 outline-gray-400/50 dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40'
        ])}
      ></div>
    </div>
  )
}
