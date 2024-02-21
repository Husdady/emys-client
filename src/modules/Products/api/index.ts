// Interfaces
import { AddProductToFavoritesParams, RemoveProductFromFavoritesParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Add product to Favorites
    addProductToFavorites: builder.mutation({
      query: (params: AddProductToFavoritesParams) => ({
        ...params,
        method: 'POST',
        url: '/products/favorites'
      })
    }),

    // Remove product from Favorites
    removeProductFromFavorites: builder.mutation({
      query: (params: RemoveProductFromFavoritesParams) => ({
        ...params,
        method: 'PATCH',
        url: `/products/favorites/${params.productId}`
      })
    })
  })
})

export const { useAddProductToFavoritesMutation, useRemoveProductFromFavoritesMutation } =
  productsApi
