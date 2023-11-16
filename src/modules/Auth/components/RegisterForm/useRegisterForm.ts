// Librarys
import { saveBearerTokenOnAxios } from '@libs/axios'
import { showFloatInfoMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useRegisterUserMutation } from '@modules/Auth/api/register'
import useMounted from '@hooks/useMounted'

// Interfaces
import { RegisterFormState } from './interfaces'

export default function useRegisterForm() {
  const [searchParams, setSeachParams] = useSearchParams()
  const [registerUser, result] = useRegisterUserMutation()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<RegisterFormState>({
    defaultValues: {
      email: '',
      fullname: '',
      password: '',
      confirmPassword: ''
    }
  })

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async (formState: RegisterFormState) => {
    const payload = await registerUser({
      data: formState,
      setError: setError
    })

    if ('error' in payload) return // Exists an error from the API
    if (!('result' in payload.data)) return // Validate result

    const { result } = payload.data // Get result
    if (!('emailConfirmation' in result)) return // Validate emailConfirmation

    const { emailConfirmation } = payload.data.result // Get email confirmation
    const status = String(emailConfirmation?.status) // Get email status

    // Get email messageId
    const messageId = String(emailConfirmation.result.emailResponse?.body?.messageId)

    // Define query params structure
    const query = {
      status: status,
      messageId: messageId,
      email: formState.email
    }

    const token = emailConfirmation?.result?.token // Get token

    showFloatInfoMessage(result.emailConfirmation.message) // Show float message
    setSeachParams(query) // Create query params
    saveBearerTokenOnAxios(token) // Save token on axios
  }, [])

  useMounted(() => {
    const query = Object.fromEntries([...searchParams]) // Get query params
    if ('status' in query && 'messageId' in query && 'email' in query) {
      setSeachParams({}) // Reset query params
    }
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
