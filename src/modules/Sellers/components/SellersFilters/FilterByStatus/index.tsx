// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Select/Fallback'

// Types
import type { FilterProps } from '@components/Select/types'

// Utils
import lazy from '@utils/lazy'

// Constants
import options from './options'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function FilterByStatus(props: FilterProps) {
  return (
    <Suspense fallback={<Fallback className="w-full sm:w-[50%]" textLabelClassName="w-16" />}>
      <Select
        {...props}
        options={options}
        textLabel="Estado"
        containerClassName="w-full md:w-[50%]"
        noSelectionLabel="Filtrar por estado del vendedor"
      />
    </Suspense>
  )
}
