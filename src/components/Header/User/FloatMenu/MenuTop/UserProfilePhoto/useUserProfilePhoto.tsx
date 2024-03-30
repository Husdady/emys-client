// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useShowProfilePhotoModal from './useShowProfilePhotoModal'
import { useMemo, useCallback } from 'react'

// Interfaces
import { UserProfilePhotoProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

// Constants
import { AVATAR_IMAGE } from '@data/images'

/**
 * Hook that implements the logic of Avatar component
 * @param {UserProfilePhotoProps} props Receive an 'onOpen'
 */
export default function useUserProfilePhoto(props: UserProfilePhotoProps) {
  const { user } = useAuth()
  const showModalForUpdateProfilePhoto = useShowProfilePhotoModal()

  // Define the avatar image
  const avatarUrl = useMemo(() => {
    if (user === null) return null // Return null if user session is finish
    const img = user.profilePhoto // Get profile photo

    // Return default image if not exists a user profile photo
    if (img === null || isUndefined(img)) return AVATAR_IMAGE
    return img.url // Return the user profile photo
  }, [user?.profilePhoto?.url])

  // Callback for show a modal for update the profile photo of the user
  const onOpen = useCallback(() => {
    props.onOpen?.() // Execute 'onOpen' callback
    showModalForUpdateProfilePhoto()
  }, [])

  return {
    src: avatarUrl,
    onOpen: onOpen
  }
}
