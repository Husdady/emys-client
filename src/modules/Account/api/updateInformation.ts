// Interfaces
import { GenerateKeyParams, UpdateUbigeoParams, UpdateInformationParams } from './interfaces'

// API
import { api } from '@config/store/api'

const updateInformationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for generate new secret key for the user
    generateKey: builder.mutation({
      query: (params: GenerateKeyParams) => ({
        method: 'PUT',
        url: '/account/generate-key',
        ...params
      })
    }),

    // 'PUT' request for update the ubigeo information of the User
    updateUbigeo: builder.mutation({
      query: (params: UpdateUbigeoParams) => ({
        method: 'PUT',
        url: '/account/ubigeo',
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

export const { useGenerateKeyMutation, useUpdateUbigeoMutation, useUpdateInformationMutation } =
  updateInformationApi
