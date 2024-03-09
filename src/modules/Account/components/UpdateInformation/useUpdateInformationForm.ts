// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateInformationMutation } from '@modules/Account/api/updateInformation'

// Interfaces
import { UpdateInformationFormState } from './interfaces'
import { ChangeParams } from '@components/Upload/interfaces'

// Utils
import createFormData from '@utils/createFormData'
import convertImageUrlToFile from '@utils/convertImageUrlToFile'

/**
 * Hook that make a request to API for update the information of the user
 */
export default function useUpdateInformationForm() {
  const auth = useAuth()
  const [updateInformation, result] = useUpdateInformationMutation()
  const {
    watch,
    register,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateInformationFormState>({
    defaultValues: {
      email: auth.user === null ? '' : auth.user.email,
      fullname: auth.user === null ? '' : auth.user.fullname,
      secretKey: auth.user === null ? '' : auth.user.secretKey,
      previewProfilePhoto: auth.user?.profilePhoto?.url
    }
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
    async (formState: UpdateInformationFormState) => {
      if (auth.user === null) return // Check if user exists

      // Convert url of user profile photo in a file
      const file = await convertImageUrlToFile({
        file: formState.profilePhoto,
        url: formState.previewProfilePhoto,
        filename: formState.profilePhoto?.name,
        backupFilename: auth.user.profilePhoto?.filename
      })

      // Create form data for send to API
      const { data, clearData } = createFormData<UpdateInformationFormState>({
        state: { ...formState, profilePhoto: file },
        excludeFields: ['previewProfilePhoto']
      })

      // Update user information
      const payload = await updateInformation({
        data: data,
        setError: setError,
        signOut: auth.signOut
      })

      clearData() // Remove 'multipart/formData'
      if ('error' in payload) return

      // Update current user information
      auth.updateUser({
        email: payload.data.result.user.email,
        fullname: payload.data.result.user.fullname,
        secretKey: payload.data.result.user.secretKey,
        profilePhoto: payload.data.result.user.profilePhoto
      })
    },
    [auth.user]
  )

  useMounted(() => {
    if (watch('previewProfilePhoto') !== auth.user?.profilePhoto?.url) {
      setValue('previewProfilePhoto', auth.user?.profilePhoto?.url)
    }
  }, [auth.user])

  return {
    ...result,
    watch: watch,
    errors: errors,
    submit: submit,
    register: register,
    setValue: setValue,
    handleSubmit: handleSubmit,
    onChangeProfilePhoto: onChangeProfilePhoto,
    onRemoveProfilePhoto: onRemoveProfilePhoto
  }
}
