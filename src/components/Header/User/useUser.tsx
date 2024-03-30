// Hooks
import { useMemo } from 'react'
import useAuth from '@modules/Auth/states/auth/useAuth'
import useTabletScreen from '@hooks/screen/useTabletScreen'

// Utils
import isUndefined from '@utils/isUndefined'

// Constants
import { AVATAR_IMAGE } from '@data/images'

/**
 * Hook that implements the logic of Avatar component
 */
export default function useUser() {
  const isTabletScreen = useTabletScreen()
  const { user, isAuthenticated } = useAuth()

  // Define the avatar image
  const avatarUrl = useMemo(() => {
    if (user === null) return null // Return null if user session is finish
    const img = user.profilePhoto // Get profile photo

    // Return default image if not exists a user profile photo
    if (img === null || isUndefined(img)) return AVATAR_IMAGE
    return img.url // Return the user profile photo
  }, [user?.profilePhoto?.url])

  return {
    user: user,
    avatarUrl: avatarUrl,
    isTabletScreen: isTabletScreen,
    isAuthenticated: isAuthenticated
  }
}
