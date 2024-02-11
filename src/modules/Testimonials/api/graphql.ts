// Interfaces
import { Testimonials } from './interfaces'
import { PaginationArgs } from '@libs/graphql/interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { TestimonyDocument } from './documents'

// Constants
import { TESTIMONIALS_KEY } from '@config/store/graphql/constants'

export const testimonialsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get testimonials
    GetTestimonials: builder.query<Testimonials, PaginationArgs>({
      providesTags: [TESTIMONIALS_KEY],
      query: (variables) => ({
        document: TestimonyDocument,
        variables: variables
      })
    })
  })
})

export const { useGetTestimonialsQuery, useLazyGetTestimonialsQuery } = testimonialsGraphqlApi
