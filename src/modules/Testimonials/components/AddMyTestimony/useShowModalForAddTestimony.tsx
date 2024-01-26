// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Components
import Plus from '@assets/icons/plus'
import ReportMedical from '@assets/icons/report-medical'
import TestimonyForm, { TESTIMONY_FORM_ID } from '@modules/Testimonials/components/TestimonyForm'

// Hooks
import { useCallback } from 'react'
import useAuth from '@hooks/useAuth'
import useModal from '@hooks/useModal'
import useRegisterTestimony from './useAddMyTestimony'

// Interfaces
import { TestimonyFormState } from '@modules/Testimonials/components/TestimonyForm/interfaces'

// Constants
import { MESSAGE_VALIDATION_FOR_ADD_MY_TESTIMONY } from './constants'

/**
 * Hook for show a modal for Add My Testimony
 */
export default function useShowModalForAddMyTestimony() {
  const { showModal } = useModal()
  const { user, isAuthenticated } = useAuth()
  const submit = useRegisterTestimony()

  // Event click on button for show modal for add my Testimony
  const show = useCallback(() => {
    if (user === null || !isAuthenticated) {
      return showFloatWarningMessage(MESSAGE_VALIDATION_FOR_ADD_MY_TESTIMONY)
    }
    console.log({ user })
    // Define the default values
    const defaultValues: TestimonyFormState = {
      testimony: '',
      author: user.fullname,
      regionId: user.regionId,
      countryId: user.countryId,
      provinceId: user.provinceId,
      districtId: user.districtId,
      previewAuthorPhoto: user.profilePhoto === null ? undefined : user.profilePhoto?.url
    }

    showModal({
      width: 600,
      icon: <ReportMedical />,
      title: 'Nuevo testimonio',
      content: <TestimonyForm onSubmit={submit} defaultValues={defaultValues} />,
      acceptButtonProps: {
        type: 'submit',
        form: TESTIMONY_FORM_ID,
        title: 'Añadir testimonio',
        icon: <Plus size="smx" className="stroke-3" />
      }
    })
  }, [isAuthenticated])

  return show
}
