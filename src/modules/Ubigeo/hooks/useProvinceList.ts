// Hooks
import { useMemo } from 'react'
import { useGetProvincesInListFormatQuery } from '@modules/Ubigeo/api/provinces/graphql'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'
import { ProvinceListArgs } from '@modules/Ubigeo/api/provinces/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'

export interface UseProvinceListParams extends ProvinceListArgs {
  addDefaultValue?: boolean
}

/**
 * Hook for get the provinces in list format
 * @param {UseProvinceListParams} params Receive a 'regionId' and 'countryId'
 */
export default function useProvinceList({
  regionId,
  countryId,
  addDefaultValue = true
}: UseProvinceListParams) {
  const { data, isError, isFetching, isLoading } = useGetProvincesInListFormatQuery({
    regionId: isEmptyString(regionId) ? undefined : regionId,
    countryId: isEmptyString(countryId) ? undefined : countryId
  })

  // Define options for show the provinces
  const options: SelectProps['options'] = useMemo(() => {
    if (isUndefined(data)) return []
    if (isUndefined(data.provinceList)) return []

    // Get all provinces
    const provinces = data.provinceList.map((province) => ({
      value: province.id,
      label: province.province
    }))

    // Check if has almost one Province
    const hasOneOption = provinces.length > 1

    // Add new option to the start of the Province list
    if (hasOneOption && addDefaultValue) {
      provinces.unshift(PREDEFINED_VALUE)
    }

    return provinces
  }, [data])

  return {
    options: options,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching
  }
}
