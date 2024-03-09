// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

export default function Fallback({ className }: OnlyClassNameProp) {
  return (
    <div
      className={classnames([
        className,
        'box-wrapper rounded-md bg-white shadow-md dark:shadow-none dark:bg-dark-800 h-96'
      ])}
    />
  )
}
