// Interfaces
import { CategoriesList } from './interfaces'
import { PaginationArgs } from '@libs/graphql/interfaces'

// API
import { api } from '@config/store/graphql'

// Constants
import { CATEGORIES_KEY } from '@config/store/graphql/constants'

// Documents
import { CategoryListDocument } from './documents'

export const categoriesGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get categories in format list
    GetCategoriesInListFormat: builder.query<
      CategoriesList,
      Omit<PaginationArgs, 'page' | 'limit'>
    >({
      providesTags: [CATEGORIES_KEY],
      query: (variables) => ({
        variables: variables,
        document: CategoryListDocument
      })
    })
  })
})

export const { useGetCategoriesInListFormatQuery } = categoriesGraphqlApi
