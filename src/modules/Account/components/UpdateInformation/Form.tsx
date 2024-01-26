/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import SecretKey from './SecretKey'
import DeviceFloppy from '@assets/icons/device-floppy'
import UploadFallback from '@components/Upload/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useUpdateInformationForm from './useUpdateInformationForm'

// Utils
import isString from '@utils/isString'
import isEmptyObject from '@utils/isEmptyObject'
import getFormError from '@utils/getFormError'

// Lazy Components
const Button = dynamic(() => import('@components/Button'))

const InputText = dynamic(() => import('@components/InputText'), {
  loading: () => <FallbackItem classLabel="w-32" />
})

const UploadPhoto = dynamic(() => import('@components/Upload'), {
  loading: () => <UploadFallback />
})

export default function UpdateInformationForm() {
  const {
    watch,
    submit,
    errors,
    register,
    setValue,
    isLoading,
    handleSubmit,
    onChangeProfilePhoto,
    onRemoveProfilePhoto
  } = useUpdateInformationForm()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-y-4 lg:ml-auto lg:max-w-[400px]"
    >
      <UploadPhoto
        titlePopup="Mi foto de perfil"
        photo={watch('previewProfilePhoto')}
        onChange={onChangeProfilePhoto}
        onRemove={onRemoveProfilePhoto}
      />

      <InputText
        textLabel="Nombre completo"
        placeholder="Ingresa tu nombre"
        customInput={register('fullname')}
        error={getFormError('fullname', errors)}
        hasError={isString(errors.fullname?.message)}
      />

      <InputText
        textLabel="Correo electrónico"
        placeholder="Ingresa un correo electrónico"
        customInput={register('email')}
        error={getFormError('email', errors)}
        hasError={isString(errors.email?.message)}
      />

      <SecretKey
        setValue={setValue}
        secret={watch('secretKey')}
        customInput={register('secretKey')}
        error={getFormError('secretKey', errors)}
        hasError={isString(errors.secretKey?.message)}
      />

      <div className="my-3">
        <Button
          type="submit"
          isShowingSpin={isLoading}
          disabled={!isEmptyObject(errors)}
          icon={<DeviceFloppy size="md" />}
          title="Actualizar mi información"
          loadingTitle="Actualizando información"
          className="!font-lexend !px-4 !py-3 ml-auto bg-blue-500 hover:bg-sky-500 text-white rounded-xl dark:hover:opacity-70 dark:bg-blue-600 min-h-[46px]"
        />
      </div>
    </form>
  )
}
