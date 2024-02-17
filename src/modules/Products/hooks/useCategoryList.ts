/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Hooks
import { useMemo } from 'react'
import { useGetCategoriesInListFormatQuery } from '@modules/Categories/api/graphql'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

/**
 * Hook for get a Category list
 */
export default function useCategoryList() {
  const { data, isError, isFetching, isLoading } = useGetCategoriesInListFormatQuery({})

  // Define options for show categories
  const options: SelectProps['options'] = useMemo(() => {
    if (isUndefined(data)) return []
    if (isUndefined(data.categoryList)) return []

    return data.categoryList.map((category) => ({
      value: category.id,
      label: category.name
    }))
  }, [data])

  return {
    options: options,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching
  }
}
