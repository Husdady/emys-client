// Interfaces
import { CSSProperties } from 'react'
import { OnlyClassNameProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

export const style: CSSProperties = {
  width: '200px',
  height: '200px'
}

export default function UploadFallback({ className }: OnlyClassNameProp) {
  return (
    <span
      style={style}
      className={classnames([
        className,
        'ant-avatar rounded-full ant-avatar-image border-4 border-gray-200/40 !bg-gray-100 dark:!bg-gray-700 dark:border-gray-900 !block !mx-auto'
      ])}
    />
  )
}
