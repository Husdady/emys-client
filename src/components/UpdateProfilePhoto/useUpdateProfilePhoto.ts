// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useModal from '@config/store/states/modal/useModal'
import useDisableButtonInModalForm from '@hooks/useDisableButtonInModalForm'
import { useForm } from 'react-hook-form'
import { useCallback, useMemo } from 'react'
import { useUpdateProfilePhotoMutation } from '@modules/Account/api/updateProfilePhoto'

// Interfaces
import { UpdateProfilePhotoState } from './interfaces'
import { ChangeParams } from '@components/Upload/interfaces'

// Utils
import createFormData from '@utils/createFormData'
import convertImageUrlToFile from '@utils/convertImageUrlToFile'

/**
 * Hook that make a request to API for update the information of the user
 */
export default function useUpdateProfilePhotoForm() {
  const auth = useAuth()
  const { mutate, hideModal } = useModal()
  const [updateProfilePhoto] = useUpdateProfilePhotoMutation()
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateProfilePhotoState>({
    defaultValues: useMemo(
      () => ({
        previewProfilePhoto: auth.user?.profilePhoto?.url
      }),
      [auth.user]
    )
  })

  // Event that update the user profile photo
  const onChangeProfilePhoto = useCallback((params: ChangeParams) => {
    setValue('profilePhoto', params.file)
    setValue('previewProfilePhoto', params.previewFile)
  }, [])

  // Event that remove the user profile photo
  const onRemoveProfilePhoto = useCallback(() => {
    setValue('profilePhoto', undefined)
    setValue('previewProfilePhoto', undefined)
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async (formState: UpdateProfilePhotoState) => {
      if (auth.user === null) return // Check if user exists

      // Show 'Spin' in submit button
      mutate({
        'acceptButtonProps.isShowingSpin': true,
        'acceptButtonProps.loadingTitle': 'Actualizando imagen...'
      })

      // Convert url of user profile photo in a file
      const file = await convertImageUrlToFile({
        file: formState.profilePhoto,
        url: formState.previewProfilePhoto,
        filename: formState.profilePhoto?.name,
        backupFilename: auth.user.profilePhoto?.filename
      })

      // Create form data for send to API
      const { data, clearData } = createFormData<UpdateProfilePhotoState>({
        state: { ...formState, profilePhoto: file },
        excludeFields: ['previewProfilePhoto']
      })

      // Update user information
      const payload = await updateProfilePhoto({
        data: data,
        signOut: auth.signOut
      })

      clearData() // Clear 'multipart/form'
      mutate({ 'acceptButtonProps.isShowingSpin': false }) // Hide 'Spin' in submit button
      if ('error' in payload) return // Finish function if exists an error
      hideModal() // Hide current modal

      // Validate object response
      if (!('result' in payload.data)) return
      if (!('user' in payload.data.result)) return
      if (!('profilePhoto' in payload.data.result.user)) return

      // Update current user profile photo
      auth.updateUser({
        profilePhoto: payload.data.result.user.profilePhoto
      })
    },
    [auth.user]
  )

  // Validate errors in submit button of modal
  useDisableButtonInModalForm<UpdateProfilePhotoState>(errors)

  return {
    watch: watch,
    submit: submit,
    setValue: setValue,
    handleSubmit: handleSubmit,
    onChangeProfilePhoto: onChangeProfilePhoto,
    onRemoveProfilePhoto: onRemoveProfilePhoto
  }
}
