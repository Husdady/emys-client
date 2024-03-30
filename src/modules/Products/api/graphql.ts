// Interfaces
import {
  Products,
  FavoriteProducts,
  ProductsPaginationArgs,
  FavoriteProductsPaginationArgs
} from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { ProductDocument, FavoriteProductDocument } from './documents'

// Constants
import { PRODUCTS_KEY } from '@config/store/graphql/constants'

const productsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get products
    GetProducts: builder.query<Products, ProductsPaginationArgs>({
      providesTags: [PRODUCTS_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProductDocument
      })
    }),

    // Get favorite products
    GetFavoriteProducts: builder.query<FavoriteProducts, FavoriteProductsPaginationArgs>({
      providesTags: [PRODUCTS_KEY],
      query: (variables) => ({
        variables: variables,
        document: FavoriteProductDocument
      })
    })
  })
})

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetFavoriteProductsQuery,
  useLazyGetFavoriteProductsQuery
} = productsGraphqlApi
