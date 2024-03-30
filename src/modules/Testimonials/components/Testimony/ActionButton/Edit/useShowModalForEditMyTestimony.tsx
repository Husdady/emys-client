// Components
import ReportMedical from '@components/Icons/ReportMedical'
import DeviceFloppy from '@components/Icons/DeviceFloppy'
import TestimonyForm from '@modules/Testimonials/components/TestimonyForm'

// Hooks
import { useCallback } from 'react'
import useModal from '@config/store/states/modal/useModal'
import useEditTestimony from './useEditMyTestimony'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'
import { TestimonyFormState } from '@modules/Testimonials/components/TestimonyForm/interfaces'

// Constants
import { TESTIMONY_FORM_ID } from '@modules/Testimonials/components/TestimonyForm/constants'

/**
 * Hook that shows a modal with a Testimony Form for edit my Testimony information
 * @param {Testimony} testimony Testimony
 * @returns {() => void} Callback
 */
export default function useShowModalForEditMyTestimony(testimony: Testimony): () => void {
  const { showModal } = useModal()
  const submit = useEditTestimony(testimony)

  // Callback that displays a modal with a form to update the author information
  const show = useCallback(() => {
    if (testimony === null) return

    const defaultValues: TestimonyFormState = {
      author: testimony.author ?? '',
      testimony: testimony.testimony ?? '',
      regionId: testimony.region?.id ?? null,
      countryId: testimony.country?.id ?? null,
      provinceId: testimony.province?.id ?? null,
      districtId: testimony.district?.id ?? null,
      previewAuthorPhoto: testimony.photo === null ? undefined : testimony.photo.url
    }

    showModal({
      width: 600,
      icon: <ReportMedical />,
      title: 'Editar información del autor',
      content: <TestimonyForm onSubmit={submit} defaultValues={defaultValues} />,
      acceptButtonProps: {
        type: 'submit',
        title: 'Actualizar',
        form: TESTIMONY_FORM_ID,
        icon: <DeviceFloppy size="md" />
      }
    })
  }, [testimony])

  return show
}
