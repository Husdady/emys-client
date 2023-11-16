/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import Loader from '@components/Loader'
import Lock from '@assets/icons/lock'

// Hooks
import useResetPasswordForm from './useResetPasswordForm'

// Utils
import lazy from '@utils/lazy'

// Data
import { passwordLabel, confirmPasswordLabel } from './labels'

// Utils
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))
const SubmitButton = lazy(() => import('@components/SubmitButton'))

export default function ResetPasswordForm() {
  const { errors, submit, result, register, handleSubmit } = useResetPasswordForm()

  return (
    <Suspense fallback={<Loader height="250px" />}>
      <form noValidate className="gap-y-6" onSubmit={handleSubmit(submit)}>
        <InputText
          type="password"
          label={passwordLabel}
          customInput={register('password')}
          error={getFormError('password', errors)}
          hasError={isString(errors.password?.message)}
        />

        <InputText
          type="password"
          label={confirmPasswordLabel}
          customInput={register('confirmPassword')}
          error={getFormError('confirmPassword', errors)}
          hasError={isString(errors.confirmPassword?.message)}
        />

        <SubmitButton
          title="Actualizar contraseña"
          loadingTitle="Actualizando contraseña..."
          icon={<Lock size="sm" className="mr-1" />}
          disabled={result.isSuccess || !isEmptyObject(errors)}
          isShowingSpin={result.isLoading}
        />
      </form>
    </Suspense>
  )
}
