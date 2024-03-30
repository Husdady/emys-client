// Interfaces
import { CategoryList, CategoryListArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Constants
import { CATEGORIES_KEY } from '@config/store/graphql/constants'

// Documents
import { CategoryListDocument } from './documents'

export const categoriesGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get categories in format list
    GetCategoriesInListFormat: builder.query<CategoryList, CategoryListArgs>({
      providesTags: [CATEGORIES_KEY],
      query: (variables) => ({
        variables: variables,
        document: CategoryListDocument
      })
    })
  })
})

export const { useGetCategoriesInListFormatQuery } = categoriesGraphqlApi
