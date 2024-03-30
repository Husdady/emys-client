// API
import { api } from '@config/store/api'

const sendVerificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for send an email verification
    sendVerification: builder.mutation({
      query: () => ({
        method: 'POST',
        url: '/account/send-verification'
      })
    })
  })
})

export const { useSendVerificationMutation } = sendVerificationApi
