/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import UploadFallback from '@components/Upload/Fallback'

// Hooks
import useUpdateProfilePhotoForm from './useUpdateProfilePhoto'

// Utils
import lazy from '@utils/lazy'

// Constants
import { UPDATE_PROFILE_PHOTO_FORM_ID } from './constants'

// Lazy Components
const Upload = lazy(() => import('@components/Upload'))

export default function UpdateProfilePhotoForm() {
  const { watch, submit, handleSubmit, onChangeProfilePhoto, onRemoveProfilePhoto } =
    useUpdateProfilePhotoForm()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      id={UPDATE_PROFILE_PHOTO_FORM_ID}
      className="flex flex-col gap-y-4 sm:px-2"
    >
      <Suspense fallback={<UploadFallback />}>
        <Upload
          titlePopup="Mi foto de perfil"
          photo={watch('previewProfilePhoto')}
          onChange={onChangeProfilePhoto}
          onRemove={onRemoveProfilePhoto}
        />
      </Suspense>
    </form>
  )
}
