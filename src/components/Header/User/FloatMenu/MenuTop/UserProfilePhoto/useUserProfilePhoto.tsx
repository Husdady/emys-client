// Components
import Camera from '@assets/icons/camera'
import DeviceFloppy from '@assets/icons/device-floppy'
import UpdateProfilePhotoForm, {
  UPDATE_PROFILE_PHOTO_FORM_ID
} from '@components/UpdateProfilePhoto'

// Hooks
import useAuth from '@hooks/useAuth'
import useModal from '@hooks/useModal'
import { useMemo, useCallback } from 'react'

// Utils
import isUndefined from '@utils/isUndefined'

// Images
import avatarImage from '@assets/images/avatar.webp'

/**
 * Hook that implements the logic of Avatar component
 */
export default function useAvatar() {
  const { user } = useAuth()
  const { showModal } = useModal()

  // Define the avatar image
  const avatarUrl = useMemo(() => {
    if (user === null) return null // Return null if user session is finish
    const img = user.profilePhoto // Get profile photo

    // Return default image if not exists a user profile photo
    if (img === null || isUndefined(img)) return avatarImage
    return img.url // Return the user profile photo
  }, [user?.profilePhoto?.url])

  // Define callback for show a modal
  const onChangePhoto = useCallback(() => {
    showModal({
      width: 400,
      icon: <Camera />,
      content: <UpdateProfilePhotoForm />,
      title: 'Actualizar mi foto de perfil',
      acceptButtonProps: {
        type: 'submit',
        icon: <DeviceFloppy size="md" />,
        title: 'Actualizar imagen',
        form: UPDATE_PROFILE_PHOTO_FORM_ID
      }
    })
  }, [])

  return {
    src: avatarUrl,
    onOpen: onChangePhoto
  }
}
