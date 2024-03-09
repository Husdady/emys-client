// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

export default function UploadFallback({ className }: OnlyClassNameProp) {
  return (
    <span
      className={classnames([
        className,
        'ant-avatar w-[200px] h-[200px] rounded-full ant-avatar-image border-4 border-gray-200/40 !bg-gray-100 dark:!bg-gray-700 dark:border-gray-900 !block !mx-auto'
      ])}
    />
  )
}
