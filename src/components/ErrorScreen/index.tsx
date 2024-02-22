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
import { DEFAULT_IMAGE } from '@assets/data/error-image'
import { customTitle, sharedClassName } from './constants'

// Lazy Components
const Screen = lazy(() => import('@components/Screen'))
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export default function ErrorScreen({ boxWrapperClassName, ...props }: ErrorScreenProps) {
  return (
    <Suspense
      fallback={
        <BoxWrapperFallback className={classnames([sharedClassName, boxWrapperClassName])} />
      }
    >
      <BoxWrapper className={classnames([sharedClassName, boxWrapperClassName])}>
        <Screen {...props} image={DEFAULT_IMAGE} customTitle={customTitle} />
      </BoxWrapper>
    </Suspense>
  )
}
