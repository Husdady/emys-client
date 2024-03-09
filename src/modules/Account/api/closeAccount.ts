// Interfaces
import { APIResponse } from '@libs/axios/interfaces'
import { AuthorizeCloseAccountParams } from './interfaces'

// Graphql API
import { api } from '@config/store/api'

export const closeAccountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'DELETE' request for delete user account
    deleteAccount: builder.mutation<null, null>({
      query: () => ({
        url: '/account',
        method: 'DELETE'
      })
    }),

    // 'POST' request for authorize close user account
    authorizeCloseAccount: builder.mutation<APIResponse, AuthorizeCloseAccountParams>({
      query: (params: AuthorizeCloseAccountParams) => ({
        method: 'POST',
        url: '/account/close',
        data: params.data,
        setError: params.setError
      })
    })
  })
})

export const { useDeleteAccountMutation, useAuthorizeCloseAccountMutation } = closeAccountApi
