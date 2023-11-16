// Interfaces
import { RegisterUserParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for resend email verification
    requestVerification: builder.mutation({
      query: () => ({
        method: 'POST',
        url: '/send-account-verification'
      })
    }),

    // 'POST' request for register user at the app
    registerUser: builder.mutation({
      query: (params: RegisterUserParams) => ({
        ...params,
        method: 'POST',
        url: '/register'
      })
    })
  })
})

export const { useRegisterUserMutation, useRequestVerificationMutation } = registerApi
