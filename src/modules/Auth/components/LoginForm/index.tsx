/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import LoginIcon from '@components/Icons/Login'
import Fallback from '@components/Fallback'
import SubmitButton from '@components/SubmitButton'
import Remember from '@modules/Auth/components/Remember'

// Hooks
import useLoginForm from './useLoginForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Data
import labels from './labels'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

export default function LoginForm() {
  const { watch, errors, submit, result, register, handleSubmit, onRemember } = useLoginForm()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="login-form mb-2 sm:mb-0 flex flex-col gap-y-4"
    >
      <Fallback classLabel="w-32">
        <InputText
          type="email"
          label={labels.email}
          customInput={register('email')}
          error={getFormError('email', errors)}
          hasError={isString(errors.email?.message)}
        />
      </Fallback>

      <Fallback classLabel="w-24">
        <InputText
          type="password"
          isShowingPassword
          label={labels.password}
          customInput={register('password')}
          error={getFormError('password', errors)}
          hasError={isString(errors.password?.message)}
        />
      </Fallback>

      <Remember onRemember={onRemember} remember={watch('remember')} />

      <SubmitButton
        title="Iniciar sesión"
        loadingTitle="Iniciando sesión..."
        icon={<LoginIcon size="md" className="mr-1" />}
        disabled={result.isSuccess || !isEmptyObject(errors)}
        isShowingSpin={result.isLoading}
      />
    </form>
  )
}
