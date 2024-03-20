// Components
import Fallback from '@components/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useCountryList from '@modules/Ubigeo/hooks/useCountryList'

// Interfaces
import { FilterByCountryProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_NO_SELECTION_VALUE } from './constants'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function FilterByCountry({
  containerClassName,
  classLabelPlaceholder,
  noSelectionLabel = DEFAULT_NO_SELECTION_VALUE,
  ...props
}: FilterByCountryProps) {
  const { options, isError, isFetching, isLoading } = useCountryList()

  if (isLoading || isFetching) {
    return (
      <FallbackItem
        classContainer={containerClassName}
        classLabel={classLabelPlaceholder ?? 'w-12'}
      />
    )
  }

  return (
    <Fallback classContainer={containerClassName} classLabel={classLabelPlaceholder ?? 'w-12'}>
      <Select
        {...props}
        options={options}
        disabled={isError}
        canSearchOptions
        enableVirtualization
        noSelectionLabel={noSelectionLabel}
        containerClassName={containerClassName}
        textLabel={props.textLabel ?? 'Países'}
        searchPalceholder="Buscar países por nombre..."
        emptyText="Sin países disponibles"
      />
    </Fallback>
  )
}
