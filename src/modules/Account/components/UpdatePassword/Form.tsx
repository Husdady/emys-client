/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Fallback from '@components/Fallback'
import DeviceFloppy from '@assets/icons/device-floppy'

// Hooks
import useUpdatePasswordForm from './useUpdatePasswordForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

export default function UpdatePasswordForm() {
  const { errors, register, submit, handleSubmit, isLoading } = useUpdatePasswordForm()

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-y-4 lg:ml-auto lg:max-w-[400px]"
    >
      <Fallback classLabel="w-32">
        <InputText
          type="password"
          isShowingPassword
          textLabel="Actual contraseña"
          placeholder="Ingresa tu actual contraseña"
          customInput={register('password')}
          error={getFormError('password', errors)}
          hasError={isString(errors.password?.message)}
        />
      </Fallback>

      <Fallback classLabel="w-32">
        <InputText
          type="password"
          preventAutoComplete
          textLabel="Nueva contraseña"
          placeholder="Ingresa una nueva contraseña"
          customInput={register('newPassword')}
          error={getFormError('newPassword', errors)}
          hasError={isString(errors.newPassword?.message)}
        />
      </Fallback>

      <Fallback classLabel="w-40">
        <InputText
          type="password"
          preventAutoComplete
          textLabel="Confirmar nueva contraseña"
          placeholder="Confirma tu nueva contraseña"
          customInput={register('confirmPassword')}
          error={getFormError('confirmPassword', errors)}
          hasError={isString(errors.confirmPassword?.message)}
        />
      </Fallback>

      <div className="my-3">
        <Button
          type="submit"
          icon={<DeviceFloppy size="smd" />}
          isShowingSpin={isLoading}
          disabled={!isEmptyObject(errors)}
          title="Actualizar contraseña"
          loadingTitle="Actualizando contraseña"
          className="!font-lexend !px-4 !py-3 ml-auto bg-blue-500 hover:bg-sky-500 text-white min-w-[200px] rounded-xl dark:hover:opacity-70 dark:bg-blue-600 min-h-[46px]"
        />
      </div>
    </form>
  )
}
