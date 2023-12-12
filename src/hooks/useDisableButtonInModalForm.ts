/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Hooks
import { useMemo } from 'react'
import useModal from './useModal'
import useMounted from './useMounted'

// Types
import type { FieldValues, FieldErrorsImpl } from 'react-hook-form'

// Utils
import isObject from '@utils/isObject'
import isEmptyObject from '@utils/isEmptyObject'

/**
 * Hook that implements the logic of disabling the 'accept' button of a modal that contains a form
 * @param {FieldErrorsImpl<FieldValues>} errors Form errors
 */
export default function useDisableButtonInModalForm<Errors extends FieldValues>(
  errors: FieldErrorsImpl<Errors>,
  isAutoDisableSubmitButton = true
) {
  const { mutate, acceptButtonProps } = useModal()

  // Define the dependency errors
  const dependencyErrors = useMemo(() => {
    if (!isObject(errors)) return []
    return Object.keys(errors)
  }, [errors])

  useMounted(() => {
    // Validate 'acceptButtonProps'
    if (isAutoDisableSubmitButton && isObject(acceptButtonProps)) {
      if (!isEmptyObject(errors)) {
        !acceptButtonProps?.disabled && mutate({ 'acceptButtonProps.disabled': true })
      } else {
        acceptButtonProps?.disabled === true && mutate({ 'acceptButtonProps.disabled': false })
      }
    }
  }, dependencyErrors)
}