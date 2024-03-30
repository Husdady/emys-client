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

export default function ByStock(props: FilterProps) {
  return (
    <Fallback classLabel="w-48" classContainer="w-full sm:w-[50%]">
      <Select
        {...props}
        options={options}
        containerClassName="w-full sm:w-[50%]"
        noSelectionLabel="Selecciona una opción"
        textLabel="Filtrar productos por disponibilidad"
      />
    </Fallback>
  )
}
