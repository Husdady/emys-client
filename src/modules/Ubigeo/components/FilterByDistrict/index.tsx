// Components
import Fallback from '@components/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useDistrictList from '@modules/Ubigeo/hooks/useDistrictList'

// Interfaces
import { FilterByDistrictProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

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
    return <FallbackItem classLabel="w-20" classContainer={containerClassName} />
  }

  return (
    <Fallback classLabel="w-20" classContainer={containerClassName}>
      <Select
        {...props}
        options={options}
        disabled={isError}
        canSearchOptions
        enableVirtualization
        noSelectionLabel={noSelectionLabel}
        containerClassName={containerClassName}
        searchPalceholder="Buscar distritos por nombre..."
        emptyText="Sin distritos disponibles"
        textLabel="Distritos"
      />
    </Fallback>
  )
}
