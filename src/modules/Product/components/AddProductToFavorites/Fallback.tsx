// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Fallback({ className }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'min-w-[173px] min-h-[46px] sm:min-h-[42px] rounded-2xl btn-add-my-testimony bg-white shadow-lg py-2.5 rounded-2xl dark:bg-gray-800 btn'
      ])}
    ></div>
  )
}
