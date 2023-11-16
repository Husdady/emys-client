// Librarys
import { saveBearerTokenOnAxios } from '@libs/axios'
import { saveBearerTokenOnGraphqlClient } from '@libs/graphql'

// Hooks
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useResetPasswordMutation } from '@modules/Auth/api/reset-password'
// import { useNavigate, useLoaderData } from 'react-router-dom'
// import useValidateLoader from '@hooks/useValidateLoader'
import useAuth from '@hooks/useAuth'

// Interfaces
import { ResetPasswordFormState } from './interfaces'

// Utils
// import getQueryParam from '@utils/getQueryParam'

export const DEFAULT_VALUES = {
  password: '',
  confirmPassword: ''
}

export default function useResetPasswordForm() {
  const auth = useAuth()
  // const navigate = useNavigate()
  // const loader = useLoaderData()
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

  // Evento 'submit' que se ejecuta cuando el formulario es válido
  const submit = useCallback(async (formState: ResetPasswordFormState) => {
    // const token = getQueryParam('token')
    // if (token === null) return navigate('/', { replace: true })

    // const result = await reset({
    //   token: token,
    //   data: formState,
    //   setError: setError
    // })

    // if ('error' in result) return navigate('/', { replace: true })

    // Save bearer token on Axios
    saveBearerTokenOnAxios(result.data?.result?.access_token)

    // Save bearer token on GraphQL client
    saveBearerTokenOnGraphqlClient(result.data?.result?.access_token)

    // Save authenticated user
    auth.signIn({
      user: result.data.result.user,
      token: result.data.result.access_token
    })
  }, [])

  // Validate token
  // useValidateLoader({ loader: loader, navigate: navigate })

  return {
    watch: watch,
    errors: errors,
    submit: submit,
    result: result,
    register: register,
    handleSubmit: handleSubmit
  }
}
