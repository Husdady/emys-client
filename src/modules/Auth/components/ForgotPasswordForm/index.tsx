/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Lock from '@assets/icons/lock'
import Loader from '@components/Loader'
import SubmitButton from '@components/SubmitButton'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useForgotPasswordForm from '@modules/Auth/components/ForgotPasswordForm/useForgotPasswordForm'

// Utils
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Constants
import { label } from './constants'

// Lazy Components
const InputText = dynamic(() => import('@components/InputText'), {
  loading: () => <FallbackItem classLabel="w-44" />
})

const VerificationSended = dynamic(() => import('./VerificationSended'), {
  loading: () => <Loader height="200px" />
})

export default function ForgotPasswordForm() {
  const { errors, result, register, submit, isSended, handleSubmit, sendAgainVerification } =
    useForgotPasswordForm()

  if (isSended) {
    return (
      <VerificationSended
        isLoading={result.isLoading}
        message={result.data?.message}
        sendAgainVerification={sendAgainVerification}
      />
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="forgot-password-form mb-2 sm:mb-0 flex flex-col gap-y-4"
    >
      <InputText
        type="email"
        label={label}
        preventAutoComplete
        customInput={register('email')}
        error={getFormError('email', errors)}
        hasError={isString(errors.email?.message)}
      />

      <SubmitButton
        icon={<Lock size="sm" />}
        title="Solicitar cambio de contraseña"
        className="gap-x-2 py-2.5 leading-tight"
        loadingTitle="Solicitando cambio de contraseña..."
        disabled={result.isSuccess || !isEmptyObject(errors)}
        isShowingSpin={result.isLoading}
      />
    </form>
  )
}
