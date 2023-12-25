// Hooks
import { useMemo } from 'react'
import useAuth from '@hooks/useAuth'

// Utils
import isUndefined from '@utils/isUndefined'

// Images
import avatarImage from '@assets/images/avatar.webp'

/**
 * Hook that implements the logic of Avatar component
 */
export default function useUser() {
  const { user, isAuthenticated } = useAuth()

  // Define the avatar image
  const avatarUrl = useMemo(() => {
    if (user === null) return null // Return null if user session is finish
    const img = user.profilePhoto // Get profile photo

    // Return default image if not exists a user profile photo
    if (img === null || isUndefined(img)) return avatarImage.src
    return img.url // Return the user profile photo
  }, [user?.profilePhoto?.url])

  return {
    avatarUrl: avatarUrl,
    isAuthenticated: isAuthenticated,
  }
}
