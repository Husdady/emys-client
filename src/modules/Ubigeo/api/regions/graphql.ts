// Interfaces
import { RegionList, RegionListArgs } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { RegionsListDocument } from './documents'

// Constants
import { REGIONS_KEY } from '@config/store/graphql/constants'

export const regionsGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get regions in format list
    GetRegionsInListFormat: builder.query<RegionList, RegionListArgs>({
      providesTags: [REGIONS_KEY],
      query: (variables) => ({
        variables: variables,
        document: RegionsListDocument
      })
    })
  })
})

export const { useGetRegionsInListFormatQuery, useLazyGetRegionsInListFormatQuery } =
  regionsGraphqlApi
