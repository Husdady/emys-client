// Interfaces
import { LatestTestimonials, LatestTestimonialsArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { LatestTestimonialsDocument } from './documents'

// Constants
import { TESTIMONIALS_KEY } from '@config/store/graphql/constants'

export const latestTestimonialsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get latest testimonials in format list
    GetLatestTestimonials: builder.query<LatestTestimonials, LatestTestimonialsArgs>({
      providesTags: [TESTIMONIALS_KEY],
      query: (variables) => ({
        variables: variables,
        document: LatestTestimonialsDocument
      })
    })
  })
})

export const { useGetLatestTestimonialsQuery, useLazyGetLatestTestimonialsQuery } = latestTestimonialsGraphqlApi
