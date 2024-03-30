// Interfaces
import { CountryList } from './interfaces'

// API
import { api } from '@config/store/graphql'

// Documents
import { CountryListDocument } from './documents'

// Constants
import { COUNTRIES_KEY } from '@config/store/graphql/constants'

const countriesGraphqlApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get countries in format list
    GetCountriesInListFormat: builder.query<CountryList, null>({
      providesTags: [COUNTRIES_KEY],
      query: (variables) => ({
        variables: variables,
        document: CountryListDocument
      })
    })
  })
})

export const {
  useGetCountriesInListFormatQuery,
  useLazyGetCountriesInListFormatQuery
} = countriesGraphqlApi
