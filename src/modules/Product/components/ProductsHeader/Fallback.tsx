// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Fallback({ className }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'w-full products-header products-header-fallback flex items-center gap-x-3 gap-y-4 justify-between xl:pl-3.5 xl:pr-2 mb-2'
      ])}
    >
      <div className="main-title h-[2.65rem] w-[22.5rem] rounded-lg bg-white dark:bg-gray-800"></div>

      <div className="arrows-wrapper flex items-center gap-x-2">
        <div className="btn-show-previous-products h-[2rem] w-[3.65rem] rounded-full bg-white dark:bg-gray-800" />

        <div className="btn-show-next-products h-[2rem] w-[3.65rem] rounded-full bg-white dark:bg-gray-800" />
      </div>
    </div>
  )
}
