// Interfaces
import { ForgotEmailParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const forgotEmailApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for recovery email
    forgotEmail: builder.mutation({
      query: (params: ForgotEmailParams) => ({
        url: '/forgot-email',
        method: 'POST',
        data: params.data,
        setError: params.setError
      })
    })
  })
})

export const { useForgotEmailMutation } = forgotEmailApi
