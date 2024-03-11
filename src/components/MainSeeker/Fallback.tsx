// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function MainSeekerFallback({ className = 'w-full' }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'bg-white dark:bg-gray-900 shadow-lg main-seeker-placeholder h-[53px] border border-gray-200 rounded-full dark:border-gray-400/70 max-w-[1100px] mx-auto'
      ])}
    ></div>
  )
}
