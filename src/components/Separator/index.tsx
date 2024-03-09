// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

export default function Separator({ className }: OnlyClassNameProp) {
  return <hr className={classnames([className, 'border-gray-300 dark:border-gray-600'])} />
}
