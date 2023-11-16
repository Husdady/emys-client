/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import Loader from '@components/Loader'
import Lock from '@assets/icons/lock'
import InputFallback from '@components/Fallback'
import ShieldLock from '@assets/icons/shield-lock'
import LockOpen from '@assets/icons/lock-open'
import SubmitFallback from '@components/SubmitButton/Fallback'

// Hooks
import useForgotEmailForm from './useForgotEmailForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Data
import labels from './labels'

// Lazy Components
const Email = lazy(() => import('./Email'))
const InputText = lazy(() => import('@components/InputText'))
const SubmitButton = lazy(() => import('@components/SubmitButton'))

export default function ForgotEmailForm() {
  const { errors, submit, result, isValid, register, handleSubmit } = useForgotEmailForm()

  if (result.isSuccess) {
    return (
      <Suspense fallback={<Loader height="250px" />}>
        <Email message={result.data.message as string} />
      </Suspense>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit(submit)} className="flex flex-col gap-y-5">
      <InputFallback classLabel="w-48">
        <InputText
          label={labels.code}
          hidePlaceholderOnFocus
          customInput={register('code')}
          placeholder="Por ejemplo: DALKJ1..."
          error={getFormError('code', errors)}
          hasError={isString(errors.code?.message)}
          icon={<LockOpen size="md" className="mr-2 text-gray-500 dark:text-gray-400" />}
        />
      </InputFallback>

      <InputFallback classLabel="w-48">
        <InputText
          label={labels.secretKey}
          hidePlaceholderOnFocus
          customInput={register('secretKey')}
          error={getFormError('secretKey', errors)}
          hasError={isString(errors.secretKey?.message)}
          icon={<ShieldLock size="md" className="mr-2 text-gray-500 dark:text-gray-400" />}
          placeholder="Por ejemplo: jdaud9123laksd..."
        />
      </InputFallback>

      <Suspense fallback={<SubmitFallback />}>
        <SubmitButton
          icon={<Lock size="sm" className="mr-1" />}
          title="Solicitar mi correo electrónico"
          loadingTitle="Solicitando correo electrónico..."
          isShowingSpin={result.isLoading}
          disabled={!isValid}
        />
      </Suspense>
    </form>
  )
}
