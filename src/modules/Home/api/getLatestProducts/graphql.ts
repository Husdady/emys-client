// Interfaces
import { LatestProducts, LatestProductsArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { LatestProductsDocument } from './documents'

// Constants
import { PRODUCTS_KEY } from '@config/store/graphql/constants'

const latestProductsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get latest products in format list
    GetLatestProducts: builder.query<LatestProducts, LatestProductsArgs>({
      providesTags: [PRODUCTS_KEY],
      query: (variables) => ({
        variables: variables,
        document: LatestProductsDocument
      })
    })
  })
})

export const { useGetLatestProductsQuery, useLazyGetLatestProductsQuery } = latestProductsGraphqlApi
