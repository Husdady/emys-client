// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Select/Fallback'

// Types
import type { SortByProps } from './types'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function SortBy(props: SortByProps) {
  return (
    <Suspense fallback={<Fallback className="w-full" textLabelClassName="w-16" />}>
      <Select {...props} mode="sort" textLabel="Ordenar por" />
    </Suspense>
  )
}
