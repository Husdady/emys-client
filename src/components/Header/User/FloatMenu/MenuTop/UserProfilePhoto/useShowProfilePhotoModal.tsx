// Components
import Camera from '@components/Icons/Camera'
import DeviceFloppy from '@components/Icons/DeviceFloppy'
import UpdateProfilePhotoForm from '@components/UpdateProfilePhoto'

// Hooks
import { useCallback } from 'react'
import useModal from '@hooks/useModal'

// Constants
import { UPDATE_PROFILE_PHOTO_FORM_ID } from '@components/UpdateProfilePhoto/constants'

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
