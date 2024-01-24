// Interfaces
import { AddMyTestimonyParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const testimonialsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Add new testimony
    addMyTestimony: builder.mutation({
      query: ({ ...params }: AddMyTestimonyParams) => ({
        ...params,
        url: '/testimonials',
        method: 'POST'
      })
    })
  })
})

export const { useAddMyTestimonyMutation } = testimonialsApi
