// Components
import Select from '@components/Select'

// Types
import type { FilterProps } from '@components/Select/types'

// Constants
import options from './options'

export default function FilterByStatus(props: FilterProps) {
  return (
    <Select
      {...props}
      options={options}
      textLabel="Estado"
      noSelectionLabel="Filtrar por estado del vendedor"
    />
  )
}
