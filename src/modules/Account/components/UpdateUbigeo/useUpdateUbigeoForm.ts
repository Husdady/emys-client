// Hooks
import useAuth from '@hooks/useAuth'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateUbigeoMutation } from '@modules/Account/api/update-information'

// Interfaces
import { Option } from '@components/Select/interfaces'
import { UpdateUbigeoFormState } from './interfaces'

/**
 * Hook that make a request to API for update the Ubigeo information of the user
 */
export default function useUpdateUpdateForm() {
  const auth = useAuth()
  const [updateUbigeo, result] = useUpdateUbigeoMutation()
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

      // Make request for update ubigeo information of the User
      const payload = await updateUbigeo({
        data: formState,
        setError: setError,
        signOut: auth.signOut
      })

      if ('error' in payload) return

      // Update ubigeo information of the User
      auth.updateUser({
        region: payload.data.result.user.region,
        country: payload.data.result.user.country,
        province: payload.data.result.user.province,
        district: payload.data.result.user.district,
        regionId: payload.data.result.user.region.id,
        countryId: payload.data.result.user.country.id,
        provinceId: payload.data.result.user.province.id,
        districtId: payload.data.result.user.district.id
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
