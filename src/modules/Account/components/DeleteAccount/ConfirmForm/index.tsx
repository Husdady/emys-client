/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Fallback from '@components/Fallback'

// Hooks
import useConfirmForm from './hooks/useConfirmForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Lazy Components
const Instructions = lazy(() => import('./Instructions'))
const InputText = lazy(() => import('@components/InputText'))

export const DELETE_ACCOUNT_FORM_ID = 'delete-account-form-09417iia'

export default function ConfirmForm() {
  const { errors, submit, register, handleSubmit } = useConfirmForm()

  return (
    <form
      noValidate
      className="mt-6 flex flex-col gap-y-8"
      id={DELETE_ACCOUNT_FORM_ID}
      onSubmit={handleSubmit(submit)}
    >
      <Fallback classLabel="w-60">
        <InputText
          type="password"
          customInput={register('password')}
          error={getFormError('password', errors)}
          textLabel="Ingresa tu actual contraseña para poder continuar"
          hasError={isString(errors.password?.message)}
        />
      </Fallback>

      <Fallback classLabel="w-60">
        <InputText
          textLabel={<Instructions />}
          customInput={register('secretMessage')}
          error={getFormError('secretMessage', errors)}
          placeholder="Ingresa el mensaje de color rojo de arriba"
          hasError={isString(errors.secretMessage?.message)}
        />
      </Fallback>
    </form>
  )
}
