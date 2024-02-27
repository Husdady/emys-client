// Interfaces
import { RateProductParams, VisitProductParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Rate product with '1' - '5' stars
    rateProduct: builder.mutation({
      query: (params: RateProductParams) => ({
        ...params,
        method: 'POST',
        url: `/products/rate/${params.productId}`
      })
    }),

    // Visit product
    visitProduct: builder.mutation({
      query: (params: VisitProductParams) => ({
        ...params,
        method: 'POST',
        url: `/products/visit/${params.productId}`
      })
    })
  })
})

export const { useRateProductMutation, useVisitProductMutation } = productApi
