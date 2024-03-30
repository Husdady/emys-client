/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Hooks
import { useMemo } from 'react'
import { useGetCategoriesInListFormatQuery } from '@modules/Categories/api/graphql'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

interface Params {
  productType?: string
}

/**
 * Hook for get a Category list
 * @param {Params} params Params
 */
export default function useCategoryList({ productType }: Params = {}) {
  const { data, isError, isFetching, isLoading } = useGetCategoriesInListFormatQuery({
    type: productType
  })

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
