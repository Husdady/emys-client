/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import UploadFallback from '@components/Upload/Fallback'

// Hooks
import useUpdateProfilePhotoForm from './useUpdateProfilePhoto'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Upload = lazy(() => import('@components/Upload'))

export const UPDATE_PROFILE_PHOTO_FORM_ID = 'update-profile-photo-form-0SLP120'

export default function UpdateProfilePhotoForm() {
  const { watch, submit, handleSubmit, onChangeProfilePhoto, onRemoveProfilePhoto } =
    useUpdateProfilePhotoForm()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      id={UPDATE_PROFILE_PHOTO_FORM_ID}
      className="pt-3 flex flex-col gap-y-4 sm:px-2"
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
