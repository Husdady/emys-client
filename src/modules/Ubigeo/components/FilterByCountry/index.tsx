// Components
import Select from '@components/Select'
import Fallback from '@components/Select/Fallback'

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
    return <Fallback className={containerClassName} textLabelClassName="w-12" />
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
      searchPalceholder="Buscar uno o varios países por nombre..."
      emptyText="Sin países disponibles"
      textLabel="Países"
    />
  )
}
