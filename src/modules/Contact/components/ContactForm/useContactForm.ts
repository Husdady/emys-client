// Interfaces
import useAuth from '@hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import { useSendMessageMutation } from '@modules/Contact/api'

// Interfaces
import { ContactFormState } from './interfaces'

// Constants
import { DEFAULT_VALUES } from './constants'

/**
 * Hook for implements the logic of the ContactForm component
 */
export default function useContactForm() {
  const { user, signOut, isAuthenticated } = useAuth()
  const [sendMessage, mutationData] = useSendMessageMutation()

  // Define the default values
  const defaultValues = useMemo(() => {
    if (user !== null) {
      return {
        ...DEFAULT_VALUES,
        email: user.email,
        fullname: user.fullname
      }
    }

    return DEFAULT_VALUES
  }, [user])

  const {
    register,
    setError,
    setValue,
    resetField,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormState>({
    defaultValues: defaultValues
  })

  // Reset form values
  const reset = useCallback(() => {
    Object.entries(defaultValues).forEach(([key, value]) => {
      resetField(key as keyof ContactFormState)
      setValue(key as keyof ContactFormState, value)
    })
  }, [defaultValues])

  // Event 'submit' that executes when the form is valid
  const submit = useCallback(
    async (formState: ContactFormState) => {
      const response = await sendMessage({
        data: formState,
        signOut: signOut,
        setError: setError
      })

      if ('data' in response) {
        reset() // Reset Contact Form
      }
    },
    [reset]
  )

  return {
    ...mutationData,
    submit: submit,
    errors: errors,
    register: register,
    handleSubmit: handleSubmit,
    isAuthenticated: isAuthenticated
  }
}
