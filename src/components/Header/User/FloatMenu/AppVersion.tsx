// Librarys
import { memo } from 'react'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

// Data
import pk from '@root/package.json'

function AppVersion({ className }: OnlyClassNameProp) {
  return (
    <span
      className={classnames([
        className,
        'mb-2 px-4 block text-center text-[0.7rem] text-gray-400 sm:text-[0.8rem]'
      ])}
    >
      Versión Actual {pk.version}
    </span>
  )
}

export default memo(AppVersion)
