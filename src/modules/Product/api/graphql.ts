// Interfaces
import { ProductArgs, ProductItem, ProductItemWithSession } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { ProductDocument, ProductWithSessionDocument } from './documents'

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
    }),

    // Get products when user is authenticated
    GetProductWithSession: builder.query<ProductItemWithSession, ProductArgs>({
      providesTags: [PRODUCT_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProductWithSessionDocument
      })
    })
  })
})

export const { useLazyGetProductQuery, useLazyGetProductWithSessionQuery } = productGraphqlApi
