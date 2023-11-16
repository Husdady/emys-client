/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { saveBearerTokenOnAxios } from '@libs/axios'
import { saveBearerTokenOnGraphqlClient } from '@libs/graphql'

// Hooks
import useLogin from './useLogin'
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useLoginMutation } from '@modules/Auth/api/login'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

// Interfaces
import { LoginFormState } from './interfaces'

/**
 * Hook that implements the Login functionality
 */
export default function useLoginForm() {
  const auth = useAuth()
  const [loginInApplication, result] = useLoginMutation()
  const { user, remember, toggleRemember, saveLoginCredentials } = useLogin()
  const {
    watch,
    register,
    setValue,
    getValues,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormState>({
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })

  // Callback that is executed when you want to remember the user's data
  const handleOnRemember = useCallback(() => {
    toggleRemember()
    const remember = getValues('remember')
    setValue('remember', !remember)
  }, [])

  // Load user's credentials
  const loadUserCredentials = useCallback(() => {
    setValue('remember', remember)

    if (!remember) return
    user !== null && setValue('email', user.email)
    user !== null && setValue('password', user.password)
  }, [])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(async (formState: LoginFormState) => {
    const payload = await loginInApplication({
      setError: setError,
      data: {
        email: formState.email,
        password: formState.password
      }
    })

    if ('error' in payload) return

    // Save bearer token on Axios
    saveBearerTokenOnAxios(payload.data.result.access_token)

    // Save bearer token on GraphQL client
    saveBearerTokenOnGraphqlClient(payload.data.result.access_token)

    // Save login data and login to the app
    saveLoginCredentials({
      user: {
        email: formState.email,
        password: formState.password
      }
    })

    // Save authenticated user
    auth.signIn({
      user: payload.data.result.user,
      token: payload.data.result.access_token
    })
  }, [])

  useMounted(() => {
    loadUserCredentials()
  }, [])

  return {
    watch: watch,
    errors: errors,
    submit: submit,
    result: result,
    register: register,
    handleSubmit: handleSubmit,
    onRemember: handleOnRemember
  }
}
