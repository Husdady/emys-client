// Interfaces
import { AddMyTestimonyParams, EditMyTestimonyParams, DeleteMyTestimonyParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const testimonialsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Add my Testimony
    addMyTestimony: builder.mutation({
      query: ({ ...params }: AddMyTestimonyParams) => ({
        ...params,
        url: '/testimonials',
        method: 'POST'
      })
    }),

    // Edit my Testimony information
    editMyTestimony: builder.mutation({
      query: ({ testimonyId, ...params }: EditMyTestimonyParams) => ({
        ...params,
        method: 'PATCH',
        url: `/testimonials/${testimonyId}`
      })
    }),

    // Delete my Testimony
    deleteMyTestimony: builder.mutation({
      query: ({ testimonyId, ...params }: DeleteMyTestimonyParams) => ({
        ...params,
        method: 'DELETE',
        url: `/testimonials/${testimonyId}`
      })
    })
  })
})

export const {
  useAddMyTestimonyMutation,
  useEditMyTestimonyMutation,
  useDeleteMyTestimonyMutation
} = testimonialsApi
