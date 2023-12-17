// API
import { api } from '@config/store/api'

export interface VerifySessionParams {
  signOut: () => void
}

export const verifySessionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'POST' request for check user session
    verifySession: builder.mutation({
      query: ({ signOut }: VerifySessionParams) => ({
        method: 'POST',
        url: '/verify-session',
        signOut: signOut
      })
    })
  })
})

export const { useVerifySessionMutation } = verifySessionApi
