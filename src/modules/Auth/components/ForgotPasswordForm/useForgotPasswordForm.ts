// Hooks
import { useForm } from 'react-hook-form'
import { useState, useCallback } from 'react'
import { useForgotPasswordMutation } from '@modules/Auth/api/forgot-password'

// Interfaces
import { Verification, ForgotPasswordFormState } from './interfaces'

// Constants
import { VERIFICATION, DEFAULT_VALUES } from './constants'

/**
 * Hook that implements forgot password functionality
 */
export default function useForgotPasswordForm() {
  const [recoveryPassword, result] = useForgotPasswordMutation()
  const [verification, setVerification] = useState<Verification>(VERIFICATION)
  const {
    watch,
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormState>({
    defaultValues: DEFAULT_VALUES
  })

  // Callback that sends the verification again
  const sendAgainVerification = useCallback(async () => {
    void recoveryPassword({
      data: {
        email: verification.email
      }
    })
  }, [verification])

  // Event 'submit' that is executed when the form is valid
  const submit = useCallback(async (formState: ForgotPasswordFormState) => {
    const result = await recoveryPassword({
      data: formState,
      setError: setError
    })

    if ('error' in result) return
    setVerification({ ...formState, isSended: true })
  }, [])

  return {
    watch: watch,
    errors: errors,
    submit: submit,
    result: result,
    register: register,
    handleSubmit: handleSubmit,
    isSended: verification.isSended,
    sendAgainVerification: sendAgainVerification
  }
}
