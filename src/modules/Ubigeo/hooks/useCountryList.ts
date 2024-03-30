// Hooks
import { useMemo } from 'react'
import { useGetCountriesInListFormatQuery } from '@modules/Ubigeo/api/countries/graphql'
import useMounted from '@hooks/useMounted'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { PREDEFINED_VALUE } from '@components/Select/constants'

interface UseCountryListParams {
  addDefaultValue?: boolean
  defaultCountryName?: string | null
  onChangeCountry?: SelectProps['onChange']
}

/**
 * Hook for get the countries in list format
 * @param {UseCountryListParams} params Receive a 'addDefaultValue' and 'defaultCountryName'
 */
export default function useCountryList({
  onChangeCountry,
  defaultCountryName,
  addDefaultValue = true
}: UseCountryListParams = {}) {
  const { data, isError, isFetching, isLoading } = useGetCountriesInListFormatQuery(null)

  // Define options for show the countries
  const options: SelectProps['options'] = useMemo(() => {
    if (isUndefined(data)) return []
    if (isUndefined(data.countryList)) return []

    // Get all countries
    const countries = data.countryList.map((country) => ({
      value: country.id,
      label: country.country
    }))

    // Check if has almost one Country
    const hasOneOption = countries.length > 1

    // Add new option to the start of the Country list
    if (hasOneOption && addDefaultValue) {
      countries.unshift(PREDEFINED_VALUE)
    }

    return countries
  }, [data])

  useMounted(() => {
    // Check if is are empty options
    const isEmptyOptions = isEmptyArray(options)

    if (!isEmptyOptions) {
      // Get a country by the default Country Name
      const country = options.find((option) => option.label === defaultCountryName)

      if (!isUndefined(country)) {
        onChangeCountry?.(country)
      }
    }
  }, [options])

  return {
    options: options,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching
  }
}
