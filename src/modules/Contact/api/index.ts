// Interfaces
import { SendMessageParams } from './interfaces'

// API
import { api } from '@config/store/api'

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Register new seller
    sendMessage: builder.mutation({
      query: (params: SendMessageParams) => ({
        ...params,
        url: '/contact',
        method: 'POST'
      })
    })
  })
})

export const { useSendMessageMutation } = contactApi
