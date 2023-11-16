/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Lock from '@assets/icons/lock'

// Hooks
import useRegisterForm from './useRegisterForm'

// Utils
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Data
import labels from './labels'

// Dynamic Components
const UserRegistered = dynamic(() => import('./UserRegistered'))
const InputText = dynamic(() => import('@components/InputText'))
const SubmitButton = dynamic(() => import('@components/SubmitButton'))

export const containerSubmitButtonStyle = { marginTop: '0.85rem' }

export default function RegisterForm() {
  const { errors, submit, result, isValid, register, handleSubmit } = useRegisterForm()

  if (result.isSuccess) {
    return <UserRegistered message={result.data.message as string} />
  }

  return (
    <form noValidate onSubmit={handleSubmit(submit)} className="flex flex-col gap-y-5 sm:gap-y-4">
      <InputText
        label={labels.fullname}
        customInput={register('fullname')}
        error={getFormError('fullname', errors)}
        placeholder="Ingresa tu nombre y apellidos"
        hasError={isString(errors.fullname?.message)}
      />

      <InputText
        type="email"
        preventAutoComplete
        label={labels.email}
        customInput={register('email')}
        error={getFormError('email', errors)}
        hasError={isString(errors.email?.message)}
      />

      <InputText
        type="password"
        isShowingPassword
        preventAutoComplete
        label={labels.password}
        customInput={register('password')}
        error={getFormError('password', errors)}
        hasError={isString(errors.password?.message)}
      />

      <InputText
        icon={null}
        type="password"
        isShowingPassword
        preventAutoComplete
        label={labels.confirmPassword}
        customInput={register('confirmPassword')}
        error={getFormError('confirmPassword', errors)}
        placeholder="Ingresa tu contraseña nuevamente"
        hasError={isString(errors.confirmPassword?.message)}
      />

      <div style={containerSubmitButtonStyle}>
        <SubmitButton
          title="Crear cuenta"
          loadingTitle="Creando cuenta..."
          icon={<Lock size="md" className="mr-1" />}
          isShowingSpin={result.isLoading}
          disabled={!isValid}
        />
      </div>
    </form>
  )
}
