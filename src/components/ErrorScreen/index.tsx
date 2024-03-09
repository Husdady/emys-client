// Librarys
import { Suspense } from 'react'

// Components
import BoxWrapperFallback from '@components/Wrapper/Fallback'

// Interfaces
import { ErrorScreenProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_IMAGE } from '@assets/data/errorImage'
import { customTitle, sharedClassName } from './constants'

// Lazy Components
const Screen = lazy(() => import('@components/Screen'))

export default function ErrorScreen({ className, ...props }: ErrorScreenProps) {
  const classes = classnames([className, sharedClassName])

  return (
    <Suspense fallback={<BoxWrapperFallback className={classes} />}>
      <div className='mx-2 sm:mx-6'>
        <Screen {...props} image={DEFAULT_IMAGE} className={classes} customTitle={customTitle} />
      </div>
    </Suspense>
  )
}
