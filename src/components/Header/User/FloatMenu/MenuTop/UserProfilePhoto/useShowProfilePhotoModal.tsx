// Components
import Camera from '@assets/icons/camera'
import DeviceFloppy from '@assets/icons/device-floppy'
import UpdateProfilePhotoForm, {
  UPDATE_PROFILE_PHOTO_FORM_ID
} from '@components/UpdateProfilePhoto'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

/**
 * Hook for show a Profile Photo modal
 */
export default function useShowProfilePhotoModal() {
  const { showModal } = useModal()

  // Define callback for show a modal for update the profile photo
  const showModalForUpdateProfilePhoto = useCallback(() => {
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

  return showModalForUpdateProfilePhoto
}
