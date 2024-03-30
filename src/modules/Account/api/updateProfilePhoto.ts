// Interfaces
import { UpdateProfilePhotoParams } from './interfaces'

// API
import { api } from '@config/store/api'

const updateProfilePhotoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // 'PUT' request for update the user profile photo
    updateProfilePhoto: builder.mutation({
      query: (params: UpdateProfilePhotoParams) => ({
        method: 'PUT',
        url: '/account/profile-photo',
        ...params
      })
    })
  })
})

export const { useUpdateProfilePhotoMutation } = updateProfilePhotoApi
