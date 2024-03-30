// Hooks
import { useCallback } from 'react'
import { useDeleteMyTestimonyMutation } from '@modules/Testimonials/api'
import useFiltersQuery from '@hooks/useFiltersQuery'
import useReloadQuery from '@hooks/useReloadQuery'
import useModal from '@config/store/states/modal/useModal'
import useAuth from '@modules/Auth/states/auth/useAuth'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

// Constants
import { ALLOWED_QUERY_PARAMS } from '@libs/graphql/constants'
import { TESTIMONIALS_KEY } from '@config/store/graphql/constants'
import { DEFAULT_QUERY } from '@modules/Testimonials/api/constants'

/**
 * Hook for delete my Testimony
 * @param {Testimony} item Testimony
 */
export default function useDeleteTestimony(item: Testimony) {
  const auth = useAuth()
  const reload = useReloadQuery()
  const [deleteTestimony] = useDeleteMyTestimonyMutation()
  const { mutate, hideModal } = useModal()

  // Callback that delete a testimony
  const handleDeleteTestimony = useCallback(async () => {
    // Show 'Spin' in submit button
    mutate({
      'acceptButtonProps.isShowingSpin': true,
      'acceptButtonProps.loadingTitle': 'Eliminando mi Testimonio...'
    })

    // Delete testimony
    const result = await deleteTestimony({
      testimonyId: item.id,
      signOut: auth.signOut,
      hideModal: hideModal
    })

    mutate({ 'acceptButtonProps.isShowingSpin': false }) // Hide 'Spin' in submit button
    if ('error' in result) return // Finish function if exists an error
    hideModal() // Hide current modal
    reload([TESTIMONIALS_KEY]) // Reload Testimonials
    auth.updateUser({ hasTestimony: false })
  }, [])

  return handleDeleteTestimony
}
