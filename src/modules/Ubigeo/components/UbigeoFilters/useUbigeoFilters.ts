// Hooks
import { useCallback } from 'react'

// Types
import type { UseUbigeoFiltersParams } from './types'

// Interfaces
import { Option } from '@components/Select/interfaces'

// Constants
import { NULLABLE } from '@modules/Dashboard/components/SelectFilter/constants'
import { REGION_FIELD, COUNTRY_FIELD, DISTRICT_FIELD, PROVINCE_FIELD } from './constants'

/**
 * Hook for implements the logic of the UbigeoFilters component
 * @param {UseUbigeoFiltersParams}
 */
export default function useUbigeoFilters({
  onFilter,
  setValue,
  deleteQueryParam
}: UseUbigeoFiltersParams) {
  // Callback for changes the Country
  const onChangeCountry = useCallback((option: Option) => {
    setValue(REGION_FIELD, '') // Reset region
    setValue(PROVINCE_FIELD, '') // Reset province
    setValue(DISTRICT_FIELD, '') // Reset district
    deleteQueryParam(REGION_FIELD) // Remove 'REGION_FIELD' query param
    deleteQueryParam(PROVINCE_FIELD) // Remove 'PROVINCE_FIELD' query param
    deleteQueryParam(DISTRICT_FIELD) // Remove 'DISTRICT_FIELD' query param

    if (option.value === NULLABLE) {
      deleteQueryParam(COUNTRY_FIELD) // Remove COUNTRY_FIELD query param
      setValue(COUNTRY_FIELD, '') // Reset country
      return
    }

    setValue(COUNTRY_FIELD, option.value) // Set country id
    void onFilter() // Execute submit event
  }, [])

  // Callback for changes the Region
  const onChangeRegion = useCallback((option: Option) => {
    setValue(PROVINCE_FIELD, '') // Reset Province
    setValue(DISTRICT_FIELD, '') // Reset District
    deleteQueryParam(PROVINCE_FIELD) // Remove 'PROVINCE_FIELD' query param
    deleteQueryParam(DISTRICT_FIELD) // Remove 'DISTRICT_FIELD' query param

    if (option.value === NULLABLE) {
      deleteQueryParam(REGION_FIELD) // Remove 'REGION_FIELD' query param
      setValue(REGION_FIELD, '') // Reset region
      return
    }

    setValue(REGION_FIELD, option.value) // Set region id
    void onFilter() // Execute submit event
  }, [])

  // Callback for changes the Province
  const onChangeProvince = useCallback((option: Option) => {
    setValue(DISTRICT_FIELD, '') // Reset District
    deleteQueryParam(DISTRICT_FIELD) // Remove 'DISTRICT_FIELD' query param

    if (option.value === NULLABLE) {
      deleteQueryParam(PROVINCE_FIELD) // Remove 'PROVINCE_FIELD' query param
      setValue(PROVINCE_FIELD, '') // Reset Province
      return
    }

    setValue(PROVINCE_FIELD, option.value) // Set province id
    void onFilter() // Execute submit event
  }, [])

  // Callback for changes the District
  const onChangeDistrict = useCallback((option: Option) => {
    if (option.value === NULLABLE) {
      deleteQueryParam(DISTRICT_FIELD) // Remove 'DISTRICT_FIELD' query param
      return setValue(DISTRICT_FIELD, '') // Reset District
    }

    setValue(DISTRICT_FIELD, option.value) // Set district id
    void onFilter() // Execute submit event
  }, [])

  return {
    onChangeRegion: onChangeRegion,
    onChangeCountry: onChangeCountry,
    onChangeProvince: onChangeProvince,
    onChangeDistrict: onChangeDistrict
  }
}
