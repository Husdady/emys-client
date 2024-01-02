// Components
import Select from '@components/Select'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useRegionList from '@modules/Ubigeo/hooks/useRegionList'

// Interfaces
import { RegionsProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function Regions({ countryId, ...props }: RegionsProps) {
  const { options, isError, isFetching, isLoading } = useRegionList({
    countryId: countryId,
    addDefaultValue: false
  })

  if (isLoading || isFetching) return <FallbackItem classLabel="w-36" />

  return (
    <Select
      {...props}
      disabled={isError}
      canSearchOptions
      enableVirtualization
      emptyText="Selecciona un país"
      searchPalceholder="Buscar regiones..."
      noSelectionLabel="Selecciona una region"
      options={!isString(countryId) || isEmptyString(countryId) ? [] : options}
    />
  )
}
