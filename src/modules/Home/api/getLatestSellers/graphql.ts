// Interfaces
import { LatestSellers, LatestSellersArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { LatestSellersDocument } from './documents'

// Constants
import { SELLERS_KEY } from '@config/store/graphql/constants'

const latestSellersGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get latest sellers in format list
    GetLatestSellers: builder.query<LatestSellers, LatestSellersArgs>({
      providesTags: [SELLERS_KEY],
      query: (variables) => ({
        variables: variables,
        document: LatestSellersDocument
      })
    })
  })
})

export const { useGetLatestSellersQuery, useLazyGetLatestSellersQuery } = latestSellersGraphqlApi
