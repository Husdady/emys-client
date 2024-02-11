// Components
import Select from '@components/Select'
import Fallback from '@components/Select/Fallback'

// Hooks
import useDistrictList from '@modules/Ubigeo/hooks/useDistrictList'

// Interfaces
import { FilterByDistrictProps } from './interfaces'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

export default function FilterByDistrict({
  regionId,
  countryId,
  provinceId,
  addDefaultValue,
  containerClassName,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByDistrictProps) {
  const { options, isError, isFetching, isLoading } = useDistrictList({
    regionId: regionId,
    countryId: countryId,
    provinceId: provinceId,
    addDefaultValue: addDefaultValue
  })

  if (isLoading || isFetching) {
    return <Fallback className={containerClassName} textLabelClassName="w-20" />
  }

  return (
    <Select
      {...props}
      options={options}
      disabled={isError}
      canSearchOptions
      enableVirtualization
      noSelectionLabel={noSelectionLabel}
      containerClassName={containerClassName}
      searchPalceholder="Buscar uno o varias distritos por nombre..."
      emptyText="Sin distritos disponibles"
      textLabel="Distritos"
    />
  )
}
