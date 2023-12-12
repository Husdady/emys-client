// Components
import SelectFilter from '@modules/Dashboard/components/SelectFilter'
import Fallback from '@modules/Dashboard/components/SelectFilter/Fallback'

// Hooks
import useProvinceList from '@modules/Ubigeo/hooks/useProvinceList'

// Interfaces
import { FilterByProvinceProps } from './interfaces'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

export default function FilterByProvince({
  regionId,
  countryId,
  addDefaultValue,
  containerClassName,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByProvinceProps) {
  const { options, isError, isFetching, isLoading } = useProvinceList({
    regionId: regionId,
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
      searchPalceholder="Buscar uno o varias provincias por nombre..."
      emptyText="Sin provincias disponibles"
    />
  )
}