/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import { useUpdatePasswordMutation } from '@modules/Account/api/updatePassword'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

// Interfaces
import { UpdatePasswordFormState } from './interfaces'

// Constants
import { defaultValues } from './constants'

/**
 * Hook that make a request to API for update the password of the user
 */
export default function useUpdatePasswordForm() {
  const auth = useAuth()
  const [updatePassword, result] = useUpdatePasswordMutation()
  const {
    watch,
    register,
    setError,
    setValue,
    resetField,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdatePasswordFormState>({
    defaultValues: defaultValues
  })

  // Reset form values
  const reset = useCallback(() => {
    Object.entries(defaultValues).forEach(([key, value]) => {
      resetField(key as keyof UpdatePasswordFormState)
      setValue(key as keyof UpdatePasswordFormState, value)
    })
  }, [defaultValues])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async (formState: UpdatePasswordFormState) => {
      const result = await updatePassword({
        data: formState,
        setError: setError,
        signOut: auth.signOut
      })

      if ('error' in result) return
      reset() // Reset form
    },
    [reset]
  )

  return {
    ...result,
    watch: watch,
    errors: errors,
    submit: submit,
    register: register,
    handleSubmit: handleSubmit
  }
}
