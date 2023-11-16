// Interfaces
import { LoginParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for login at the app
    login: builder.mutation({
      query: (params: LoginParams) => ({
        url: '/sign-in',
        method: 'POST',
        data: params.data,
        setError: params.setError
      })
    })
  })
})

export const { useLoginMutation } = loginApi
