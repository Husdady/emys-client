/* eslint-disable @typescript-eslint/no-misused-promises */
// Hooks
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useForgotEmailMutation } from '@modules/Auth/api/forgotEmail'

// Interfaces
import { ForgotEmailFormState } from './interfaces'

/**
 * Hook that implement callback to the API form recovery a user email
 */
export default function useForgotEmailForm() {
  const [recoveryEmail, result] = useForgotEmailMutation()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ForgotEmailFormState>({
    defaultValues: {
      code: '',
      secretKey: ''
    }
  })

  // Evento 'submit' que se ejecuta cuando el formulario es válido
  const submit = useCallback((formState: ForgotEmailFormState) => {
    void recoveryEmail({
      data: formState,
      setError: setError
    })
  }, [])

  return {
    errors: errors,
    submit: submit,
    result: result,
    isValid: isValid,
    register: register,
    handleSubmit: handleSubmit
  }
}
