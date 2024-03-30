// Librarys
import { saveTokenOnAxios } from '@libs/axios'
import { showFloatInfoMessage } from '@libs/antd/message'

// Hooks
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRegisterUserMutation } from '@modules/Auth/api/register'
import useMounted from '@hooks/useMounted'

// Interfaces
import { RegisterFormState } from './interfaces'

// Utils
import isObject from '@utils/isObject'
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

const EMAIL_QUERY_PARAM = 'email'
const STATUS_QUERY_PARAM = 'status'
const MESSAGE_ID_QUERY_PARAM = 'messageId'

export default function useRegisterForm() {
  const searchParams = useSearchParams()
  const [registerUser, result] = useRegisterUserMutation()

  // Define the query params
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams])

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
    if (isObject(payload.data) && !('result' in payload.data)) return // Validate result

    const result = payload?.data?.result // Get email confirmation
    if (!isObject(result)) return
    if (!('emailConfirmation' in result)) return // Validate emailConfirmation

    // Get email confirmation and validates it
    const emailConfirmation = result?.emailConfirmation
    if (!isObject(emailConfirmation)) return

    // Get 'status' of email confirmation and validates it
    const status = emailConfirmation.status // Get email status
    if (!isString(status) || isEmptyString(status)) return

    // Get email messageId and validates it
    const messageId = emailConfirmation?.emailResponse?.body?.messageId
    if (!isString(messageId) || isEmptyString(messageId)) return

    // Get token and vaidates it
    const token = emailConfirmation?.result?.token
    if (!isString(token) || isEmptyString(token)) return

    showFloatInfoMessage(result.emailConfirmation?.message) // Show float message

    params.set(EMAIL_QUERY_PARAM, formState.email)
    params.set(STATUS_QUERY_PARAM, String(status))
    params.set(MESSAGE_ID_QUERY_PARAM, String(messageId))

    saveTokenOnAxios(token) // Save token on axios
  }, [])

  useMounted(() => {
    const query = Object.fromEntries([...params.entries()]) // Get query params

    if (
      isObject(query) &&
      EMAIL_QUERY_PARAM in query &&
      STATUS_QUERY_PARAM in query &&
      MESSAGE_ID_QUERY_PARAM in query
    ) {
      params.delete(EMAIL_QUERY_PARAM)
      params.delete(STATUS_QUERY_PARAM)
      params.delete(MESSAGE_ID_QUERY_PARAM)
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
