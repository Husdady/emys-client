// Components
import Select from '@components/Select'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useProvinceList from '@modules/Ubigeo/hooks/useProvinceList'

// Interfaces
import { ProvincesProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function Provinces({ regionId, countryId, ...props }: ProvincesProps) {
  const { options, isError, isFetching, isLoading } = useProvinceList({
    regionId: regionId,
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
      searchPalceholder="Buscar provincias..."
      noSelectionLabel="Selecciona una provincia"
      emptyText="Por favor selecciona una región"
      options={!isString(regionId) || isEmptyString(regionId) ? [] : options}
    />
  )
}
