// API
import { api } from '@config/store/api'

const requestCodeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for send an email verification
    requestCode: builder.mutation({
      query: () => ({
        method: 'POST',
        url: '/account/request-code'
      })
    })
  })
})

export const { useRequestCodeMutation } = requestCodeApi
