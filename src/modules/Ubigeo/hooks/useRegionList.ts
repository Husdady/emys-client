// Hooks
import { useMemo } from 'react'
import { useGetRegionsInListFormatQuery } from '@modules/Ubigeo/api/regions/graphql'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'
import { RegionListArgs } from '@modules/Ubigeo/api/regions/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PREDEFINED_VALUE } from '@components/SelectFilter/constants'

export interface UseRegionList extends RegionListArgs {
  addDefaultValue?: boolean
}

/**
 * Hook for get the regions in list format
 * @param {RegionListArgs} params Receive a 'countryId'
 */
export default function useRegionList({ countryId, addDefaultValue = true }: UseRegionList) {
  const { data, isError, isFetching, isLoading } = useGetRegionsInListFormatQuery({
    countryId: isEmptyString(countryId) ? undefined : countryId
  })

  // Define options for show the regions
  const options: SelectProps['options'] = useMemo(() => {
    if (isUndefined(data)) return []
    if (isUndefined(data.regionList)) return []

    // Get all regions
    const regions = data.regionList.map((region) => ({
      value: region.id,
      label: region.region
    }))

    // Check if has almost one Region
    const hasOneOption = regions.length > 1

    // Add new option to the start of the Region list
    if (hasOneOption && addDefaultValue) {
      regions.unshift(PREDEFINED_VALUE)
    }

    return regions
  }, [data])

  return {
    options: options,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching
  }
}
