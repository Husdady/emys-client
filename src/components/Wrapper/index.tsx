// Librarys
import { Suspense, useMemo } from 'react'

// Components
import WrapperFallback from './Fallback'

// Interfaces
import { BoxWrapperProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import isUndefined from '@utils/isUndefined'
import classnames from '@utils/classnames'

// Lazy Components
const Developing = lazy(() => import('./Developing'))

export default function BoxWrapper({
  children,
  className,
  fallback = <WrapperFallback />
}: BoxWrapperProps) {
  // Check if has children
  const hasChildren = useMemo(() => children !== null && !isUndefined(children), [children])

  return (
    <section
      className={classnames([
        className,
        'box-wrapper rounded-md px-4 py-2 overflow-hidden bg-white shadow-md text-gray-700 dark:shadow-none dark:bg-dark-800 dark:text-gray-300'
      ])}
    >
      {hasChildren && <>{children}</>}

      {!hasChildren && (
        <Suspense fallback={fallback}>
          <Developing />
        </Suspense>
      )}
    </section>
  )
}
