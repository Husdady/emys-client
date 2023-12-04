// Librarys
import { client } from '@libs/graphql'
import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

// Constants
import {
  REDUCER_PATH,

  // Ubigeo keys
  REGIONS_KEY,
  COUNTRIES_KEY,
  PROVINCES_KEY,
  DISTRICTS_KEY
} from './constants'

export const api = createApi({
  endpoints: () => ({}),
  reducerPath: REDUCER_PATH,
  refetchOnMountOrArgChange: true,
  baseQuery: graphqlRequestBaseQuery({ client: client }),
  tagTypes: [
    // Ubigeo
    REGIONS_KEY,
    COUNTRIES_KEY,
    PROVINCES_KEY,
    DISTRICTS_KEY
  ]
})
