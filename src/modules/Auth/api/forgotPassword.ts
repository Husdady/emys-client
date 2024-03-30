// Interfaces
import { ForgotPasswordParams } from './interfaces'

// API
import { api } from '@config/store/api'

const forgotPasswordApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for recovery password
    forgotPassword: builder.mutation({
      query: (params: ForgotPasswordParams) => ({
        url: '/forgot-password',
        method: 'POST',
        data: params.data,
        setError: params.setError
      })
    })
  })
})

export const { useForgotPasswordMutation } = forgotPasswordApi
