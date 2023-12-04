/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Lock from '@assets/icons/lock'
import Loader from '@components/Loader'
import LockOpen from '@assets/icons/lock-open'
import ShieldLock from '@assets/icons/shield-lock'
import SubmitButton from '@components/SubmitButton'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useForgotEmailForm from './useForgotEmailForm'

// Utils
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Data
import labels from './labels'
import dynamic from 'next/dynamic'

// Dynamic Components
const Email = dynamic(() => import('./Email'), { loading: () => <Loader height="250px" /> })

const InputText = dynamic(() => import('@components/InputText'), {
  loading: () => <FallbackItem classComp="w-32" />
})

export default function ForgotEmailForm() {
  const { errors, submit, result, isValid, register, handleSubmit } = useForgotEmailForm()

  if (result.isSuccess) {
    return <Email message={result.data.message as string} />
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="forgot-email-form mb-2 sm:mb-0 flex flex-col gap-y-5"
    >
      <InputText
        label={labels.code}
        hidePlaceholderOnFocus
        customInput={register('code')}
        placeholder="Por ejemplo: DALKJ1..."
        error={getFormError('code', errors)}
        hasError={isString(errors.code?.message)}
        icon={<LockOpen size="md" className="mr-2 text-gray-500 dark:text-gray-400" />}
      />

      <InputText
        label={labels.secretKey}
        hidePlaceholderOnFocus
        customInput={register('secretKey')}
        error={getFormError('secretKey', errors)}
        hasError={isString(errors.secretKey?.message)}
        icon={<ShieldLock size="md" className="mr-2 text-gray-500 dark:text-gray-400" />}
        placeholder="Por ejemplo: jdaud9123laksd..."
      />

      <SubmitButton
        icon={<Lock size="sm" />}
        title="Solicitar mi correo electrónico"
        className="gap-x-2 py-2.5 leading-tight"
        loadingTitle="Solicitando correo electrónico..."
        isShowingSpin={result.isLoading}
        disabled={!isValid}
      />
    </form>
  )
}
