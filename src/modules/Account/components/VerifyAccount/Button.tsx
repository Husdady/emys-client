/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Mail from '@components/Icons/Mail'

// Hooks
import useSendVerification from './useSendVerification'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))
const TotalRequest = dynamic(() => import('@modules/Auth/components/TotalRequest'))

export default function BtnSendVerification() {
  const { result, submit, timesRequested, maxRequest, requestLimit } = useSendVerification()

  return (
    <>
      <Button
        onClick={submit}
        disabled={requestLimit}
        isShowingSpin={result.isLoading}
        loadingTitle="Enviando verificación..."
        icon={<Mail size="sm" className="stroke-3" />}
        className="py-3 !px-4 gap-x-2 ml-auto rounded-xl bg-blue-800/10 text-blue-600 dark:bg-blue-500 dark:text-white font-semibold dark:font-normal"
        title="Enviar verificación"
      />

      <TotalRequest
        maxRequest={maxRequest}
        timesRequested={timesRequested}
        requestLimit={requestLimit}
      />
    </>
  )
}
