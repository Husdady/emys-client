// Interfaces
import { NewPasswordParams } from './interfaces'

// API
import { api } from '@config/store/api'

const resetPasswordApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for reset the password of the user
    resetPassword: builder.mutation({
      query: (params: NewPasswordParams) => ({
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
