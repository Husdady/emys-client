// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Fallback'
import SendIcon from '@assets/icons/send'

// Hooks
import useContactForm from './useContactForm'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Lazy Components
const Button = lazy(() => import('@components/Button'))
const TextArea = lazy(() => import('@components/TextArea'))
const InputText = lazy(() => import('@components/InputText'))

export default function ContactForm() {
  const { submit, errors, register, isLoading, handleSubmit, isAuthenticated } = useContactForm()

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="contact-form bg-gray-100 px-4 pt-4 pb-7 rounded dark:bg-gray-900"
    >
      <div className="contact-form-inner flex flex-col gap-y-3.5 mb-[2.5rem]">
        <Fallback classLabel="w-28">
          <InputText
            className="!rounded-none"
            textLabel="Nombre completo"
            placeholder="Ingresa tu nombre completo..."
            hasError={isString(errors.fullname?.message)}
            error={getFormError('fullname', errors)}
            customInput={register('fullname')}
            disabled={isAuthenticated}
          />
        </Fallback>

        <Fallback classLabel="w-32">
          <InputText
            className="!rounded-none"
            textLabel="Correo electrónico"
            placeholder="Ingresa tu correo electrónico..."
            hasError={isString(errors.email?.message)}
            error={getFormError('email', errors)}
            customInput={register('email')}
            disabled={isAuthenticated}
          />
        </Fallback>

        <Fallback classLabel="w-16" classComp="h-[186px]">
          <TextArea
            textLabel="Mensaje"
            className="!rounded-none"
            placeholder="Ingresa tu mensaje..."
            customTextArea={register('message')}
            error={getFormError('message', errors)}
            hasError={isString(errors.message?.message)}
          />
        </Fallback>
      </div>

      <Suspense fallback={null}>
        <Button
          type="submit"
          title="Enviar mensaje"
          isShowingSpin={isLoading}
          icon={<SendIcon size="xsm" />}
          loadingTitle="Enviando mensaje"
          className="!px-[1.5rem] py-3 bg-main-700 hover:bg-rose-600 text-white ml-auto flex-row-reverse !gap-x-3.5 dark:bg-pink-200 dark:hover:bg-pink-300 dark:text-gray-900 dark:font-semibold"
        />
      </Suspense>
    </form>
  )
}
