// Interfaces
import { UpdatePasswordParams } from './interfaces'

// API
import { api } from '@config/store/api'

const updatePasswordApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'PUT' request for update the passworf of user
    updatePassword: builder.mutation({
      query: (params: UpdatePasswordParams) => ({
        method: 'PUT',
        url: '/account/password',
        ...params
      })
    })
  })
})

export const { useUpdatePasswordMutation } = updatePasswordApi
