// Librarys
import { Suspense } from 'react'
import Empty, { EmptyProps } from 'antd/lib/empty'

// Components
import Fallback from '@components/Wrapper/Fallback'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export default function EmptyScreen(props: EmptyProps) {
  return (
    <Suspense fallback={<Fallback className="empty-screen min-h-[500px]" />}>
      <BoxWrapper className="empty-screen w-full min-h-[500px] flex items-center justify-center">
        <Empty
          {...props}
          className={classnames([
            props.className,
            'font-poppins w-full text-lg py-4'
          ])}
        />
      </BoxWrapper>
    </Suspense>
  )
}
