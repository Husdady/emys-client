/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import Loader from '@components/Loader'
import InputFallback from '@components/Fallback'
import SubmitFallback from '@components/SubmitButton/Fallback'
import Lock from '@assets/icons/lock'

// Hooks
import useForgotPasswordForm from '@modules/Auth/components/ForgotPasswordForm/useForgotPasswordForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Constants
import { label } from './constants'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))
const SubmitButton = lazy(() => import('@components/SubmitButton'))
const VerificationSended = lazy(() => import('./VerificationSended'))

export default function ForgotPasswordForm() {
  const { errors, result, register, submit, isSended, handleSubmit, sendAgainVerification } =
    useForgotPasswordForm()

  if (isSended) {
    return (
      <Suspense fallback={<Loader height="200px" />}>
        <VerificationSended
          isLoading={result.isLoading}
          message={result.data?.message}
          sendAgainVerification={sendAgainVerification}
        />
      </Suspense>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="forgot-password-form mb-2 sm:mb-0 flex flex-col gap-y-4"
    >
      <InputFallback classLabel="w-44">
        <InputText
          type="email"
          label={label}
          preventAutoComplete
          customInput={register('email')}
          error={getFormError('email', errors)}
          hasError={isString(errors.email?.message)}
        />
      </InputFallback>

      <Suspense fallback={<SubmitFallback />}>
        <SubmitButton
          title="Solicitar cambio de contraseña"
          loadingTitle="Solicitando cambio de contraseña..."
          icon={<Lock size="sm" className="mr-1" />}
          disabled={result.isSuccess || !isEmptyObject(errors)}
          isShowingSpin={result.isLoading}
        />
      </Suspense>
    </form>
  )
}
