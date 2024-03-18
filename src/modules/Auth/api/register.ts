// Interfaces
import { RegisterUserParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for resend new email verification
    requestNewVerification: builder.mutation({
      query: () => ({
        method: 'POST',
        url: '/request-verification'
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

export const { useRegisterUserMutation, useRequestNewVerificationMutation } = registerApi
