// Librarys
import { axiosBaseQuery } from '@libs/axios'
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({})
})
