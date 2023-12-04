// Interfaces
import { GenerateKeyParams, UpdateInformationParams } from './interfaces'

// API
import { api } from '@config/store/api'

export const updateInformationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for generate new secret key for the user
    generateKey: builder.mutation({
      query: (params: GenerateKeyParams) => ({
        method: 'PUT',
        url: '/account/generate-key',
        ...params
      })
    }),

    // 'PUT' request for update the user information
    updateInformation: builder.mutation({
      query: (params: UpdateInformationParams) => ({
        method: 'PUT',
        url: '/account',
        ...params
      })
    })
  })
})

export const { useGenerateKeyMutation, useUpdateInformationMutation } = updateInformationApi
