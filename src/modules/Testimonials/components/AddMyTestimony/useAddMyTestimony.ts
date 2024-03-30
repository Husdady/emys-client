// Hooks
import { useCallback } from 'react'
import { useAddMyTestimonyMutation } from '@modules/Testimonials/api'
import useReloadQuery from '@hooks/useReloadQuery'
import useModal from '@config/store/states/modal/useModal'
import useAuth from '@modules/Auth/states/auth/useAuth'

// Interfaces
import {
  SubmitPayload,
  TestimonyFormState
} from '@modules/Testimonials/components/TestimonyForm/interfaces'

// Utils
import createFormData from '@utils/createFormData'

// Constants
import { TESTIMONIALS_KEY } from '@config/store/graphql/constants'

/**
 * Hook for add my Testimony
 */
export default function useAddTestimony() {
  const auth = useAuth()
  const reload = useReloadQuery()
  const { mutate, hideModal } = useModal()
  const [addMyTestimony] = useAddMyTestimonyMutation()

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async (payload: SubmitPayload) => {
    const { state, setError } = payload

    mutate({
      'acceptButtonProps.isShowingSpin': true,
      'acceptButtonProps.loadingTitle': 'Añadiendo testimonio...'
    })

    // Create form data for send to API
    const { data, clearData } = createFormData<TestimonyFormState>({
      excludeFields: ['previewAuthorPhoto'],
      state: { ...state, userId: auth.user?.id }
    })

    // Add my testimony on the application
    const result = await addMyTestimony({
      data: data,
      setError: setError,
      hideModal: hideModal,
      signOut: auth.signOut
    })

    clearData() // Remove 'multipart/form'
    if ('error' in result) return // Finish function if exists an error
    hideModal() // Close modal
    reload([TESTIMONIALS_KEY]) // Reload Testimonials
    auth.updateUser({ hasTestimony: true })
  }, [])

  return submit
}
