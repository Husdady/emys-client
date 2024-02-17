// Librarys
import { Suspense } from 'react'

// Components
import BoxWrapperFallback from '@components/Wrapper/Fallback'

// Interfaces
import { ScreenProps } from '@components/Screen/interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_IMAGE } from '@assets/data/error-image'
import { customTitle, sharedClassName } from './constants'

// Lazy Components
const Screen = lazy(() => import('@components/Screen'))
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export default function ErrorScreen(props: Pick<ScreenProps, 'title' | 'description'>) {
  return (
    <Suspense fallback={<BoxWrapperFallback className={sharedClassName} />}>
      <BoxWrapper className={sharedClassName}>
        <Screen {...props} image={DEFAULT_IMAGE} customTitle={customTitle} />
      </BoxWrapper>
    </Suspense>
  )
}
