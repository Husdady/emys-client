// Interfaces
import {
  ProductArgs,
  ProductItem,
  ProductItemWithSession,
  PopularProducts,
  PopularProductsArgs
} from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { ProductDocument, PopularProductsDocument, ProductWithSessionDocument } from './documents'

// Constants
import { PRODUCT_KEY, POPULAR_PRODUCTS_KEY } from '@config/store/graphql/constants'

export const productGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get product information
    GetProduct: builder.query<ProductItem, ProductArgs>({
      providesTags: [PRODUCT_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProductDocument
      })
    }),

    // Get product information when the user is authenticated
    GetProductWithSession: builder.query<ProductItemWithSession, ProductArgs>({
      providesTags: [PRODUCT_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProductWithSessionDocument
      })
    }),

    // Get popular products
    GetPopularProducts: builder.query<PopularProducts, PopularProductsArgs>({
      providesTags: [POPULAR_PRODUCTS_KEY],
      query: (variables) => ({
        variables: variables,
        document: PopularProductsDocument
      })
    })
  })
})

export const {
  useLazyGetProductQuery,
  useLazyGetPopularProductsQuery,
  useLazyGetProductWithSessionQuery
} = productGraphqlApi
