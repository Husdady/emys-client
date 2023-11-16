/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import LoginIcon from '@assets/icons/login'

// Hooks
import useLoginForm from './useLoginForm'

// Utils
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Data
import labels from './labels'

// Dynamic components
const InputText = dynamic(() => import('@components/InputText'))
const SubmitButton = dynamic(() => import('@components/SubmitButton'))
const Remember = dynamic(() => import('@modules/Auth/components/Remember'))

export default function LoginForm() {
  const { watch, errors, submit, result, register, handleSubmit, onRemember } = useLoginForm()

  return (
    <>
      <form noValidate onSubmit={handleSubmit(submit)} className="flex flex-col gap-y-4">
        <InputText
          type="email"
          label={labels.email}
          customInput={register('email')}
          error={getFormError('email', errors)}
          hasError={isString(errors.email?.message)}
        />

        <InputText
          type="password"
          isShowingPassword
          label={labels.password}
          customInput={register('password')}
          error={getFormError('password', errors)}
          hasError={isString(errors.password?.message)}
        />

        <Remember onRemember={onRemember} remember={watch('remember')} />

        <SubmitButton
          title="Iniciar sesión"
          loadingTitle="Iniciando sesión..."
          icon={<LoginIcon size="md" className="mr-1" />}
          disabled={result.isSuccess || !isEmptyObject(errors)}
          isShowingSpin={result.isLoading}
        />
      </form>
    </>
  )
}
