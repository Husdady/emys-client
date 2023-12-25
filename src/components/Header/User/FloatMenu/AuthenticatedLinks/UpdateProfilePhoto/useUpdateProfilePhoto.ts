// Hooks
import { useCallback } from 'react'
import useShowProfilePhotoModal from '@components/Header/User/FloatMenu/MenuTop/UserProfilePhoto/useShowProfilePhotoModal'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

/**
 * Hook for implements the logic of the UpdateProfilePhoto component
 */
export default function useUpdateProfilePhoto({ hideMenu }: MenuData) {
  const showProfilePhotoModal = useShowProfilePhotoModal()

  // Callback for show the profile photo modal
  const handleShowProfilePhotoModal = useCallback(() => {
    hideMenu() // Hide the current menu visible
    showProfilePhotoModal()
  }, [])

  return {
    handleShowProfilePhotoModal: handleShowProfilePhotoModal
  }
}
