// Interfaces
import { ProvinceList, ProvinceListArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { ProvincesListDocument } from './documents'

// Constants
import { PROVINCES_KEY } from '@config/store/graphql/constants'

const provincesGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get provinces in format list
    GetProvincesInListFormat: builder.query<ProvinceList, ProvinceListArgs>({
      providesTags: [PROVINCES_KEY],
      query: (variables) => ({
        variables: variables,
        document: ProvincesListDocument
      })
    })
  })
})

export const { useGetProvincesInListFormatQuery, useLazyGetProvincesInListFormatQuery } =
  provincesGraphqlApi
