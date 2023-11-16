// Interfaces
import { ResetPasswordParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const resetPasswordApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for reset password
    resetPassword: builder.mutation({
      query: (params: ResetPasswordParams) => ({
        url: '/reset-password',
        method: 'POST',
        data: params.data,
        setError: params.setError,
        headers: {
          Authorization: `Bearer ${params.token}`
        }
      })
    })
  })
})

export const { useResetPasswordMutation } = resetPasswordApi
