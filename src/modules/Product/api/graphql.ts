// Interfaces
import { ProductItem, ProductArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { ProductDocument } from './documents'

// Constants
import { PRODUCT_KEY } from '@config/store/graphql/constants'

export const productGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get products
    GetProduct: builder.query<ProductItem, ProductArgs>({
      providesTags: [PRODUCT_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProductDocument
      })
    })
  })
})

export const { useGetProductQuery, useLazyGetProductQuery } = productGraphqlApi
