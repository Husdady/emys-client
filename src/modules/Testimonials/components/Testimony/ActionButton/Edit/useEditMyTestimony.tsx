// Hooks
import { useCallback } from 'react'
import { useEditMyTestimonyMutation } from '@modules/Testimonials/api'
import useReloadQuery from '@hooks/useReloadQuery'
import useModal from '@config/store/states/modal/useModal'
import useAuth from '@modules/Auth/states/auth/useAuth'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'
import {
  SubmitPayload,
  TestimonyFormState
} from '@modules/Testimonials/components/TestimonyForm/interfaces'

// Utils
import createFormData from '@utils/createFormData'
import convertImageUrlToFile from '@utils/convertImageUrlToFile'

// Constants
import { TESTIMONIALS_KEY } from '@config/store/graphql/constants'

/**
 * Hook for edit my Testimony information
 * @param {Testimony} testimony Testimony
 */
export default function useEditMyTestimony(testimony: Testimony) {
  const auth = useAuth()
  const reload = useReloadQuery()
  const { mutate, hideModal } = useModal()
  const [update] = useEditMyTestimonyMutation()

  // Callback that updates the author's information
  const updateTestimony = useCallback(
    async (payload: SubmitPayload) => {
      const { state, setError } = payload

      // Show Spin
      mutate({
        'acceptButtonProps.isShowingSpin': true,
        'acceptButtonProps.loadingTitle': 'Actualizando...'
      })

      // Convert author photo in a file
      const file = await convertImageUrlToFile({
        file: state.authorPhoto,
        url: state.previewAuthorPhoto,
        filename: state.authorPhoto?.name,
        backupFilename: testimony.photo?.filename
      })

      // Create form data for send to API
      const { data, clearData } = createFormData<TestimonyFormState>({
        state: { ...state, authorPhoto: file },
        excludeFields: ['previewAuthorPhoto']
      })

      // Edit testimony information
      const result = await update({
        data: data,
        setError: setError,
        signOut: auth.signOut,
        hideModal: hideModal,
        testimonyId: testimony.id
      })

      clearData() // Clear 'multipart/formData'
      if ('error' in result) return // Finish function if exists an error
      hideModal() // Close modal
      reload([TESTIMONIALS_KEY]) // Reload Testimonials
    },
    [testimony]
  )

  return updateTestimony
}
