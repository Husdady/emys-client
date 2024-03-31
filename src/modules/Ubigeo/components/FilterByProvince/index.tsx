// Components
import Fallback from '@components/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useProvinceList from '@modules/Ubigeo/hooks/useProvinceList'

// Interfaces
import { FilterByProvinceProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function FilterByProvince({
  regionId,
  countryId,
  addDefaultValue,
  containerClassName,
  classLabelPlaceholder,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByProvinceProps) {
  const { options, isError, isFetching, isLoading } = useProvinceList({
    regionId: regionId,
    countryId: countryId,
    addDefaultValue: addDefaultValue
  })

  if (isLoading || isFetching) {
    return (
      <FallbackItem
        classContainer={containerClassName}
        classLabel={classLabelPlaceholder ?? 'w-20'}
      />
    )
  }

  return (
    <Fallback classContainer={containerClassName} classLabel={classLabelPlaceholder ?? 'w-20'}>
      <Select
        {...props}
        options={options}
        disabled={isError}
        canSearchOptions
        enableVirtualization
        noSelectionLabel={noSelectionLabel}
        containerClassName={containerClassName}
        textLabel={props.textLabel ?? 'Provincias'}
        searchPlaceholder="Buscar provincias por nombre..."
        emptyText="Sin provincias disponibles"
      />
    </Fallback>
  )
}
