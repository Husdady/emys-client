// Hooks
import { useMemo } from 'react'
import { useGetDistrictsInListFormatQuery } from '@modules/Ubigeo/api/districts/graphql'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'
import { DistrictListArgs } from '@modules/Ubigeo/api/districts/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'

export interface UseDistrictListParams extends DistrictListArgs {
  addDefaultValue?: boolean
}

/**
 * Hook for get the districts in list format
 * @param {UseDistrictListParams} params Receive params
 */
export default function useDistrictList({
  regionId,
  countryId,
  provinceId,
  addDefaultValue = true
}: UseDistrictListParams) {
  const { data, isError, isFetching, isLoading } = useGetDistrictsInListFormatQuery({
    regionId: isEmptyString(regionId) ? undefined : regionId,
    countryId: isEmptyString(countryId) ? undefined : countryId,
    provinceId: isEmptyString(provinceId) ? undefined : provinceId
  })

  // Define options for show the districts
  const options: SelectProps['options'] = useMemo(() => {
    if (isUndefined(data)) return []
    if (isUndefined(data.districtList)) return []

    // Get all districts
    const districts = data.districtList.map((district) => ({
      value: district.id,
      label: district.district
    }))

    // Check if has almost one District
    const hasOneOption = districts.length > 1

    // Add new option to the start of the District list
    if (hasOneOption && addDefaultValue) {
      districts.unshift(PREDEFINED_VALUE)
    }

    return districts
  }, [data])

  return {
    options: options,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching
  }
}
