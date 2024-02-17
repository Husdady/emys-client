// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Select/Fallback'

// Types
import type { SortByProps } from './types'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function SortBy(props: SortByProps) {
  return (
    <Suspense
      fallback={
        <Fallback
          textLabelClassName="w-20"
          className={classnames(['w-full', props.containerClassName])}
        />
      }
    >
      <Select {...props} mode="sort" textLabel="Ordenar por" />
    </Suspense>
  )
}
