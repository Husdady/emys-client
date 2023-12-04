// Components
import Select from '@components/Select'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useDistrictList from '@modules/Ubigeo/hooks/useDistrictList'

// Interfaces
import { DistrictsProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function Districts({ provinceId, ...props }: DistrictsProps) {
  const { options, isError, isFetching, isLoading } = useDistrictList({ provinceId: provinceId })

  if (isLoading || isFetching) return <FallbackItem classLabel="w-36" />

  return (
    <Select
      {...props}
      disabled={isError}
      canSearchOptions
      enableVirtualization
      searchPalceholder="Buscar distritos..."
      noSelectionLabel="Selecciona un distrito"
      emptyText="Por favor selecciona una provincia"
      options={!isString(provinceId) || isEmptyString(provinceId) ? [] : options}
    />
  )
}
