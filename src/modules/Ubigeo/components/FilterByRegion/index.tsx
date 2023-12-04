// Components
import SelectFilter from '@modules/Dashboard/components/SelectFilter'
import Fallback from '@modules/Dashboard/components/SelectFilter/Fallback'

// Hooks
import useRegionList from '@modules/Ubigeo/hooks/useRegionList'

// Interfaces
import { FilterByRegionProps } from './interfaces'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

export default function FilterByRegion({
  countryId,
  addDefaultValue,
  containerClassName,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByRegionProps) {
  const { options, isError, isFetching, isLoading } = useRegionList({
    countryId: countryId,
    addDefaultValue: addDefaultValue
  })

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
      searchPalceholder="Buscar uno o varias regiones por nombre..."
      emptyText="Sin regiones disponibles"
    />
  )
}
