/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { saveTokenOnAxios } from '@libs/axios'
import { saveTokenOnGraphqlClient } from '@libs/graphql'

// Hooks
import useLogin from './useLogin'
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'
import { useLoginMutation } from '@modules/Auth/api/login'
import { useRouter } from 'next/dist/client/router'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

// Interfaces
import { LoginFormState } from './interfaces'

// Utils
import isString from '@utils/isString'
import isObject from '@utils/isObject'
import isEmptyString from '@utils/isEmptyString'
import isEmptyObject from '@utils/isEmptyObject'

// Constants
import { ACCOUNT_PATH } from '@assets/data/paths'

/**
 * Hook that implements the Login functionality
 */
export default function useLoginForm() {
  const auth = useAuth()
  const router = useRouter()
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
  }, [user])

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

    // Get user and validates it
    const userLogged = payload?.data?.result?.user
    if (!isObject(userLogged) || isEmptyObject(userLogged)) return

    // Get access token and validates it
    const accessToken = payload?.data?.result?.access_token
    if (!isString(accessToken) || isEmptyString(accessToken)) return

    // Save bearer token on Axios
    saveTokenOnAxios(accessToken)

    // Save bearer token on GraphQL client
    saveTokenOnGraphqlClient(accessToken)

    // Save login data and login to the app
    saveLoginCredentials({
      user: {
        email: formState.email,
        password: formState.password
      }
    })

    window.scrollTo({ top: 0 }) // Reset scroll

    // Save authenticated user
    auth.signIn({ user: userLogged, token: accessToken })

    // Redirect to the Account page
    router.replace(ACCOUNT_PATH)
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
