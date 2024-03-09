// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

export default function WrapTitleFallback({ className }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'box-title w-full h-12 rounded-md bg-white shadow-md dark:shadow-none dark:bg-dark-800'
      ])}
    />
  )
}
