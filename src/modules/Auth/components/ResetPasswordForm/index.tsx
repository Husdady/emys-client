/* eslint-disable @typescript-eslint/no-misused-promises */

// Components
import Lock from '@assets/icons/lock'
import Fallback from '@components/Fallback'
import SubmitButton from '@components/SubmitButton'

// Hooks
import useResetPasswordForm from './useResetPasswordForm'

// Interfaces
import { LoaderResponse } from '@config/global-interfaces'

// Data
import { passwordLabel, confirmPasswordLabel } from './labels'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

export default function ResetPasswordForm(props: LoaderResponse) {
  const { errors, submit, result, register, handleSubmit } = useResetPasswordForm(props)

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="reset-password-form flex flex-col gap-y-4"
    >
      <Fallback classLabel="w-20">
        <InputText
          type="password"
          isShowingPassword
          label={passwordLabel}
          customInput={register('password')}
          error={getFormError('password', errors)}
          hasError={isString(errors.password?.message)}
        />
      </Fallback>

      <Fallback classLabel="w-28">
        <InputText
          type="password"
          isShowingPassword
          label={confirmPasswordLabel}
          customInput={register('confirmPassword')}
          error={getFormError('confirmPassword', errors)}
          hasError={isString(errors.confirmPassword?.message)}
        />
      </Fallback>

      <div className="mt-[0.35rem]">
        <SubmitButton
          title="Actualizar contraseña"
          loadingTitle="Actualizando contraseña..."
          icon={<Lock size="sm" className="mr-1" />}
          disabled={result.isSuccess || !isEmptyObject(errors)}
          isShowingSpin={result.isLoading}
        />
      </div>
    </form>
  )
}
