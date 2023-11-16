// Interfaces
import { FallbackProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export const sharedClassName = 'w-full animate-pulse bg-gray-200 dark:bg-gray-700'

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
          'fallback-text-label h-[20.24px] sm:h-[17.99px] rounded mb-[0.35rem]'
        ])}
      />

      <div
        className={classnames([
          classComp,
          sharedClassName,
          'fallback-input h-[45.83px] sm:h-[43px] rounded'
        ])}
      />
    </div>
  )
}
