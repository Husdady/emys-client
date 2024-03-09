// Interfaces
import { FallbackProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

const sharedClassName = 'animate-pulse bg-gray-200 dark:bg-gray-700'

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
          sharedClassName,
          'fallback-text-label h-[20px] sm:h-[18px] rounded mb-[0.35rem]'
        ])}
      />

      <div
        className={classnames([
          classComp,
          sharedClassName,
          'fallback-input h-[46px] sm:h-[43px] rounded'
        ])}
      />
    </div>
  )
}
