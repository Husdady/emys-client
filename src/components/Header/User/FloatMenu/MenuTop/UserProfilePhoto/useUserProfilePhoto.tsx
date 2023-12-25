// Hooks
import { useMemo } from 'react'
import useAuth from '@hooks/useAuth'
import useShowProfilePhotoModal from './useShowProfilePhotoModal'

// Utils
import isUndefined from '@utils/isUndefined'

// Images
import avatarImage from '@assets/images/avatar.webp'

/**
 * Hook that implements the logic of Avatar component
 */
export default function useUserProfilePhoto() {
  const { user } = useAuth()
  const showModalForUpdateProfilePhoto = useShowProfilePhotoModal()

  // Define the avatar image
  const avatarUrl = useMemo(() => {
    if (user === null) return null // Return null if user session is finish
    const img = user.profilePhoto // Get profile photo

    // Return default image if not exists a user profile photo
    if (img === null || isUndefined(img)) return avatarImage.src
    return img.url // Return the user profile photo
  }, [user?.profilePhoto?.url])

  return {
    src: avatarUrl,
    onOpen: showModalForUpdateProfilePhoto
  }
}
