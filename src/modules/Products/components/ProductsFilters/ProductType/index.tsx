// Components
import Fallback from '@components/Fallback'

// Types
import type { FilterProps } from '@components/Select/types'

// Utils
import lazy from '@utils/lazy'

// Constants
import options from './options'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function ProductType(props: FilterProps) {
  return (
    <Fallback classLabel="w-24" classContainer="w-full sm:w-[50%]">
      <Select
        {...props}
        options={options}
        textLabel="Tipo de producto"
        containerClassName="w-full sm:w-[50%]"
        noSelectionLabel="Filtrar por tipo de producto"
      />
    </Fallback>
  )
}
