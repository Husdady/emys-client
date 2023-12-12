// Components
import SelectFilter from '@components/SelectFilter'
import Fallback from '@components/SelectFilter/Fallback'

// Hooks
import useCountryList from '@modules/Ubigeo/hooks/useCountryList'

// Interfaces
import { FilterByCountryProps } from './interfaces'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

export default function FilterByCountry({
  containerClassName,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByCountryProps) {
  const { options, isError, isFetching, isLoading } = useCountryList()

  if (isLoading || isFetching) {
    return <Fallback className={containerClassName} />
  }

  return (
    <SelectFilter
      {...props}
      options={options}
      disabled={isError}
      canSearchOptions
      enableVirtualization
      noSelectionLabel={noSelectionLabel}
      containerClassName={containerClassName}
      searchPalceholder="Buscar uno o varios países por nombre..."
      emptyText="Sin países disponibles"
    />
  )
}
