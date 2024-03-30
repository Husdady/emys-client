// Components
import Fallback from '@components/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useRegionList from '@modules/Ubigeo/hooks/useRegionList'

// Interfaces
import { FilterByRegionProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function FilterByRegion({
  countryId,
  addDefaultValue,
  containerClassName,
  classLabelPlaceholder,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByRegionProps) {
  const { options, isError, isFetching, isLoading } = useRegionList({
    countryId: countryId,
    addDefaultValue: addDefaultValue
  })

  if (isLoading || isFetching) {
    return (
      <FallbackItem
        classContainer={containerClassName}
        classLabel={classLabelPlaceholder ?? 'w-16'}
      />
    )
  }

  return (
    <Fallback classContainer={containerClassName} classLabel={classLabelPlaceholder ?? 'w-16'}>
      <Select
        {...props}
        options={options}
        disabled={isError}
        canSearchOptions
        enableVirtualization
        noSelectionLabel={noSelectionLabel}
        containerClassName={containerClassName}
        textLabel={props.textLabel ?? 'Regiones'}
        searchPalceholder="Buscar regiones por nombre..."
        emptyText="Sin regiones disponibles"
      />
    </Fallback>
  )
}
