// Interfaces
import { DistrictList, DistrictListArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { DistrictListDocument } from './documents'

// Constants
import { DISTRICTS_KEY } from '@config/store/graphql/constants'

const districtsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get districts in format list
    GetDistrictsInListFormat: builder.query<DistrictList, DistrictListArgs>({
      providesTags: [DISTRICTS_KEY],
      query: (variables) => ({
        variables: variables,
        document: DistrictListDocument
      })
    })
  })
})

export const { useGetDistrictsInListFormatQuery, useLazyGetDistrictsInListFormatQuery } =
  districtsGraphqlApi
