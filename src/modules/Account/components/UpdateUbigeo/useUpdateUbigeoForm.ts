// Hooks
import useAuth from '@hooks/useAuth'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateInformationMutation } from '@modules/Account/api/update-information'

// Interfaces
import { Option } from '@components/Select/interfaces'
import { UpdateUbigeoFormState } from './interfaces'

// Utils
import createFormData from '@utils/createFormData'

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
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateUbigeoFormState>({
    defaultValues: {
      regionId: auth.user === null ? '' : auth.user.region?.id,
      countryId: auth.user === null ? '' : auth.user.country?.id,
      provinceId: auth.user === null ? '' : auth.user.province?.id,
      districtId: auth.user === null ? '' : auth.user.district?.id
    }
  })

  // Callback for change a option
  const change = useCallback(
    (field: keyof UpdateUbigeoFormState) => (option: Option) => {
      setValue(field, option.value)
      clearErrors(field)
    },
    []
  )

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async (formState: UpdateUbigeoFormState) => {
      if (auth.user === null) return // Check if user exists

      // Create form data for send to API
      const { data, clearData } = createFormData<UpdateUbigeoFormState>({
        state: formState
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
        region: payload.data.result.user.region,
        country: payload.data.result.user.country,
        province: payload.data.result.user.province,
        district: payload.data.result.user.district
      })
    },
    [auth.user]
  )

  return {
    ...result,
    watch: watch,
    change: change,
    errors: errors,
    submit: submit,
    register: register,
    setValue: setValue,
    handleSubmit: handleSubmit
  }
}
