// Librarys
import { saveTokenOnAxios } from '@libs/axios'
import { saveTokenOnGraphqlClient } from '@libs/graphql'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useResetPasswordMutation } from '@modules/Auth/api/resetPassword'
import useValidateLoader from '@hooks/useValidateLoader'
import useAuth from '@hooks/useAuth'

// Interfaces
import { ResetPasswordFormState } from './interfaces'
import { LoaderResponse } from '@config/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'
import getQueryParam from '@utils/getQueryParam'

// Constants
import { HOME_PATH } from '@data/paths'

const DEFAULT_VALUES = {
  password: '',
  confirmPassword: ''
}

export default function useNewPasswordForm({ apiResponse }: LoaderResponse) {
  const auth = useAuth()
  const router = useRouter()
  const [reset, result] = useResetPasswordMutation()
  const {
    watch,
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordFormState>({
    defaultValues: DEFAULT_VALUES
  })

  // Callback for back to Home
  const backToHome = useCallback(() => router.replace(HOME_PATH), [])

  // Evento 'submit' que se ejecuta cuando el formulario es válido
  const submit = useCallback(
    async (formState: ResetPasswordFormState) => {
      const token = getQueryParam('token')

      // Validate token
      if (token === null) return backToHome()

      const payload = await reset({
        token: token,
        data: formState,
        setError: setError
      })

      if ('error' in payload) return backToHome()

      // Get access token and validates it
      const accessToken = payload?.data?.result?.access_token
      if (!isString(accessToken) || isEmptyString(accessToken)) return

      saveTokenOnAxios(accessToken) // Save bearer token on Axios
      saveTokenOnGraphqlClient(accessToken) // Save bearer token on GraphQL client

      // Save authenticated user
      auth.signIn({
        user: result.data.result.user,
        token: result.data.result.access_token
      })
    },
    [backToHome]
  )

  // Validate token
  useValidateLoader({ router: router, apiResponse: apiResponse })

  return {
    watch: watch,
    errors: errors,
    submit: submit,
    result: result,
    register: register,
    handleSubmit: handleSubmit
  }
}
