// Interfaces
import { Sellers, SellersPaginationArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { SellerDocument } from './documents'

// Constants
import { SELLERS_KEY } from '@config/store/graphql/constants'

export const sellersGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get Sellers with pagination format
    GetSellers: builder.query<Sellers, SellersPaginationArgs>({
      providesTags: [SELLERS_KEY],
      query: (variables) => ({
        variables: variables,
        document: SellerDocument
      })
    })
  })
})

export const { useGetSellersQuery, useLazyGetSellersQuery } = sellersGraphqlApi
